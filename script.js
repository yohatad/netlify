window.onload = function() {
    var nameForm = document.getElementById('nameForm');
    var nameInput = document.getElementById('nameInput');
    var incomingTextContainer = document.getElementById('incomingText');
    var receiveMessageButton = document.getElementById('receiveMessage');
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var userName = '';

    nameForm.onsubmit = function(event) {
        event.preventDefault();
        userName = nameInput.value.trim();
        console.log('Name submitted:', userName);
    };

    function fetchMessage() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://fit-frank-stork.ngrok-free.app/fetch-message', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        var response = JSON.parse(xhr.responseText);
                        incomingTextContainer.innerHTML = '<p>' + response.text + '</p>';
                    } catch (e) {
                        alert("Error parsing JSON: " + e);
                    }
                }
            }
        };
        xhr.send(null);
    }

    function sendResponse(response) {
        if (userName) {
            console.log(`Sending response: ${response}`);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://fit-frank-stork.ngrok-free.app/submit', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('POST response received');
                }
            };
            var data = JSON.stringify({ name: userName, response: response });
            xhr.send(data);
        } else {
            console.log('No name entered.');
        }
    }

    receiveMessageButton.onclick = fetchMessage;
    yesButton.onclick = function() { sendResponse('Yes'); };
    noButton.onclick = function() { sendResponse('No'); };
};
