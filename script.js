document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    let userName = 'hello';

    // nameForm.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     userName = nameInput.value.trim();
    //     if (userName) {
    //         alert(`Hello, ${userName}! Please make your choice.`);
    //     } else {
    //         alert('Please enter your name.');
    //     }
    // });

    yesButton.addEventListener('click', function() {
        if (userName) {
            fetch('https://fit-frank-stork.ngrok-free.app/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: userName, response: 'Yes' }),
            })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
            alert(`clicked Yes`);
        } else {
            alert('Please enter your name first.');
        }
    });

    noButton.addEventListener('click', function() {
        if (userName) {
            fetch('https://fit-frank-stork.ngrok-free.app/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: userName, response: 'No' }),
            })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
            alert(`clicked No`);
        } else {
            alert('Please enter your name first.');
        }
    });
});
