yesButton.addEventListener('click', function() {
    if (userName) {
        fetch('http://localhost:5000/yes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: userName, response: 'yes' }),
        });
        alert(`${userName} clicked Yes`);
    } else {
        alert('Please enter your name first.');
    }
});

noButton.addEventListener('click', function() {
    if (userName) {
        fetch('http://localhost:5000/no', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: userName, response: 'no' }),
        });
        alert(`${userName} clicked No`);
    } else {
        alert('Please enter your name first.');
    }
});
