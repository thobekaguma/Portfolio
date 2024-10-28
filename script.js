document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Theme Toggle Functionality
const themeToggleButton = document.getElementById('theme-toggle');
let darkTheme = false;

themeToggleButton.addEventListener('click', () => {
    if (!darkTheme) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#1571da';
        darkTheme = true;
    } else {
        document.body.style.backgroundColor = '#f0f0f3';
        document.body.style.color = '#333';
        darkTheme = false;
    }
});

// Tech Modal Functionality
function showTechInfo(tech) {
    const techInfoModal = document.getElementById('tech-info-modal');
    const techTitle = document.getElementById('tech-title');
    const techDescription = document.getElementById('tech-description');

    // Sample data for tech
    const techData = {
        Java: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
        // Add more
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
