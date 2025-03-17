document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('.hint-button').forEach(button => {
        button.addEventListener('click', () => {
            const hint = button.nextElementSibling;
            hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
        });
    });

    const FLAG = "FLAG{XSS}";
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const cards = document.querySelectorAll('.card');

    
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value; 

            
            const hiddenDiv = document.createElement('div');
            hiddenDiv.style.display = 'none'; 
            hiddenDiv.innerHTML = searchTerm;
            document.body.appendChild(hiddenDiv);

            if (searchTerm.includes("<script>")) {
                setTimeout(() => {
                    alert("Congratulations! You found the flag: " + FLAG);
                }, 500); 
            }

            cards.forEach(card => {
                const searchTermElement = document.createElement('div');
                searchTermElement.innerHTML = searchTerm;

                const companyNameElement = card.querySelector('.card-body p:first-child strong');
                const companyName = companyNameElement ? companyNameElement.textContent : '';

                if (companyName.includes(searchTermElement.textContent)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    
    document.querySelectorAll('.flag').forEach((flagContainer, index) => {
        const input = flagContainer.querySelector('input[type="text"]');
        const submitButton = flagContainer.querySelector('.submit-button');
        const correctFlags = [
            "FLAG{XSS}",
            "FLAG{SQL}",
            "FLAG{VoidSoup}",
            "FLAG{Key}",
            "server-status",
            "172-31-16-136",
            "Apache/2.4.58 (Ubuntu)"
        ];

        submitButton.addEventListener('click', () => {
            const enteredFlag = input.value.trim();

            
            let existingMessage = flagContainer.querySelector('.flag-message');
            if (existingMessage) {
                existingMessage.remove();
            }

            const messageDiv = document.createElement('div');
            messageDiv.classList.add('flag-message');

            if (enteredFlag === correctFlags[index]) {
                messageDiv.textContent = "Correct! Well done.";
                messageDiv.style.color = "white";
            } else {
                messageDiv.textContent = "Incorrect Flag. Try again.";
                messageDiv.style.color = "red";
            }

            flagContainer.appendChild(messageDiv);
        });
    });
});

