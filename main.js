// Toggle responsive menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

// Add an event listener to the toggle button
document.querySelector('.toggle-btn').addEventListener('click', toggleMenu);
