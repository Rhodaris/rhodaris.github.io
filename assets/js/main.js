// Main JavaScript file for Rhodaris website

document.addEventListener('DOMContentLoaded', function() {
    console.log('Rhodaris website loaded successfully!');
    
    // Highlight active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.fontWeight = 'bold';
        }
    });
});
