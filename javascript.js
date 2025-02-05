const hintButtons = document.querySelectorAll('.hint-button');

hintButtons.forEach(button => {
    button.addEventListener('click', () => {
        const hint = button.nextElementSibling;
        hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
    });
});

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cards = document.querySelectorAll('.card');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value; // Remove toLowerCase() for XSS vulnerability

    cards.forEach(card => {
        const companyName = card.querySelector('.card-body p:first-child strong').textContent; 
        if (companyName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
