
// Theme Toggle Functionality
const themeToggleButton = document.getElementById('theme-toggle');
let darkTheme = false;

themeToggleButton.addEventListener('click', () => {
    let themeButton = document.querySelector('#theme-toggle');
    if (!darkTheme) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#1571da';
        themeButton.textContent = 'Light';
        darkTheme = true;
    } else {
        document.body.style.backgroundColor = '#f0f0f3';
        document.body.style.color = '#333';
        themeButton.textContent = 'Dark';
        darkTheme = false;
    }
});

// Tech Modal Functionality
function showTechInfo(tech) {
    const techInfoModal = document.getElementById('tech-info-modal');
    const techTitle = document.getElementById('tech-title');
    const techDescription = document.getElementById('tech-description');

    const techData = {
        Java: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',

        Python: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.',

        SQL: 'Structured Query Language is a domain-specific language used to manage data, especially in a relational database management system. It is particularly useful in handling structured data, i.e., data incorporating relations among entities and variables.',

        HTML: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',

        CSS: 'Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',

        JavaScript: 'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.',
    };

    techTitle.textContent = tech;
    techDescription.textContent = techData[tech] || 'Details not available.';
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


