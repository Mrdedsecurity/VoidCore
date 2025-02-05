const hintButtons = document.querySelectorAll('.hint-button');

hintButtons.forEach(button => {
    button.addEventListener('click', () => {
        const hint = button.nextElementSibling;
        hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
    });
});

const FLAG = "FLAG{XSS}";
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cards = document.querySelectorAll('.card');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value; // No sanitization

    // Injecting user input directly into the page (XSS vulnerability)
    document.body.insertAdjacentHTML('beforeend', `<div>${searchTerm}</div>`);

    if (searchTerm.includes("<script>")) {
        setTimeout(() => {
            alert("Congratulations! You found the flag: " + FLAG);
        }, 500); // Delay to ensure execution
    }

    cards.forEach(card => {
        // Create a new element to hold the search term
        const searchTermElement = document.createElement('div');
        searchTermElement.innerHTML = searchTerm; 

        const companyName = card.querySelector('.card-body p:first-child strong').textContent; 
        if (companyName.includes(searchTermElement.textContent)) { 
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
