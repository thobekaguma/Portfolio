require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

// Middleware
// app.use(express.static(path.join(__dirname, '/public')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Nodemailer transporter configuration with environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Route for handling form submission
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    if (!isValidRequest(name, email, message)) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact from ${name}`,
        text: `Message from ${name} (${email}):\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error.message);
            return res.status(500).json({ error: 'Error sending email' });
        }
        return res.status(200).json({ message: 'Message sent successfully!' });
    });
});

const isValidRequest = (name, email, message) => {
    return !name || !email || !message;
}


// Serve frontend on root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));