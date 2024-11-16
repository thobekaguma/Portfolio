// Tech Modal Functionality
// Tech Modal Functionality
function showTechInfo(tech) {
    const techInfoModal = document.getElementById('tech-info-modal');
    const techTitle = document.getElementById('tech-title');
    const techDescription = document.getElementById('tech-description');

    // Object mapping each tech to a GitHub link
    const techLinks = {
        Java: 'https://github.com/thobekaguma/Java-Project',
        Python: 'https://github.com/thobekaguma/RPS-Game',
        SQL: 'https://github.com/thobekaguma/SQL-Project',
        HTML: 'https://github.com/thobekaguma/HTML-Project',
        CSS: 'https://github.com/thobekaguma/Portfolio',
        JavaScript: 'https://github.com/thobekaguma/shecodes_weather'
    };

    techTitle.textContent = 'Projects';

    techDescription.innerHTML = `<a href='${techLinks[tech]}' target='_blank'>View ${tech} Project on GitHub</a>`;

    techInfoModal.style.display = 'block';
}


function closeModal() {
    document.getElementById('tech-info-modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('tech-info-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('https://portfolio-backend-9ttq.onrender.com/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending the message. Please try again later.');
    }
});


