document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    let userName = '';

    // Prevent the default form submission and capture the user's name
    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        userName = nameInput.value.trim();
        if (userName) {
            alert(`Hello, ${userName}! Please make your choice.`);
        } else {
            alert('Please enter your name.');
        }
    });

    // Handle Yes/No button clicks
    yesButton.addEventListener('click', function() {
        if (userName) {
            alert(`${userName} clicked Yes`);
        } else {
            alert('Please enter your name first.');
        }
    });

    noButton.addEventListener('click', function() {
        if (userName) {
            alert(`${userName} clicked No`);
        } else {
            alert('Please enter your name first.');
        }
    });
});
