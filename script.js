document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const responseOutput = document.getElementById('responseOutput'); // Assuming an element to display output

    function handleUserResponse(response) {
        responseOutput.textContent = `User clicked ${response}`;
        // Updates text content of the response output element
    }

    function handleEvent(event) {
        event.preventDefault(); // Prevents additional events such as 'click' after 'touchend'
        const response = event.target.getAttribute('data-response');
        handleUserResponse(response);
    }

    // Add event listeners for both click and touchend
    yesButton.addEventListener('click', handleEvent);
    yesButton.addEventListener('touchend', handleEvent);
    yesButton.setAttribute('data-response', 'Yes');

    noButton.addEventListener('click', handleEvent);
    noButton.addEventListener('touchend', handleEvent);
    noButton.setAttribute('data-response', 'No');
});
