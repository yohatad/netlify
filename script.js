document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    let userName = '';

    // Handle form submission
    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        userName = nameInput.value.trim();
        if (userName) {
            alert(`Hello, ${userName}! Please make your choice.`);
        } else {
            alert('Please enter your name.');
        }
    });

    // Define a function to handle post request
    function handleUserResponse(response) {
        if (userName) {
            fetch('https://fit-frank-stork.ngrok-free.app/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: userName, response: response }),
            })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
            alert(`${userName} clicked ${response}`);
        } else {
            alert('Please enter your name first.');
        }
    }

    // Attach events to buttons
    yesButton.addEventListener('click', () => handleUserResponse('Yes'));
    noButton.addEventListener('click', () => handleUserResponse('No'));
});
