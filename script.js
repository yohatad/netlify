yesButton.addEventListener('click', function() {
    if (userName) {
        fetch('https://fit-frank-stork.ngrok-free.app/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: userName, response: 'Yes' }),
        });
        alert(`${userName} clicked Yes`);
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
        });
        alert(`${userName} clicked No`);
    } else {
        alert('Please enter your name first.');
    }
});
