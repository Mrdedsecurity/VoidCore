const hintButtons = document.querySelectorAll('.hint-button');

hintButtons.forEach(button => {
    button.addEventListener('click', () => {
        const hint = button.nextElementSibling;
        hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
    });
});