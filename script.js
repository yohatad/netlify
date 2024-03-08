window.onload = function() {
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');

    function handleUserResponse(response) {
        // Replace alert with a more compatible approach if necessary
        window.alert('User clicked ' + response);
    }

    function handleClick() {
        var response = this.getAttribute('data-response');
        handleUserResponse(response);
    }

    if (yesButton.attachEvent) {
        // For very old IE browsers
        yesButton.attachEvent('onclick', handleClick);
        noButton.attachEvent('onclick', handleClick);
    } else {
        // For other browsers
        yesButton.onclick = handleClick;
        noButton.onclick = handleClick;
    }

    yesButton.setAttribute('data-response', 'Yes');
    noButton.setAttribute('data-response', 'No');
};
