window.onload = function() {
    var nameForm = document.getElementById('nameForm');
    var nameInput = document.getElementById('nameInput');
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var userName = '';

    nameForm.onsubmit = function(event) {
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        userName = nameInput.value.trim();
        if (userName) {
            alert('Hello, ' + userName + '! Please make your choice.');
        } else {
            alert('Please enter your name.');
        }
    };

    function sendResponse(response) {
        if (userName) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://fit-frank-stork.ngrok-free.app/submit', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var json = JSON.parse(xhr.responseText);
                    console.log('Success:', json);
                }
            };
            var data = JSON.stringify({ name: userName, response: response });
            xhr.send(data);
            alert(userName + ' clicked ' + response);
        } else {
            alert('Please enter your name first.');
        }
    }

    yesButton.onclick = function() { sendResponse('Yes'); };
    noButton.onclick = function() { sendResponse('No'); };
};
