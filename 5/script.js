const socket = new WebSocket('wss://echo-ws-service.herokuapp.com/');
const chat = document.querySelector('.chat');
let hideNextMessage = false


document.querySelector('.sendButton').addEventListener('click', () => {
    const message = document.querySelector('.messageInput').value;
    socket.send(message);
    displayMessage(message, true);
    document.querySelector('.messageInput').value = "";
});

document.querySelector('.geoButton').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(function(position) {
        const location = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
        socket.send(location);
        displayMessage(`<a href="https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}">${location}</a>`, true);
    });

    hideNextMessage = true
});

socket.addEventListener('message', (message) => {
    if (hideNextMessage) {
        hideNextMessage = false
    } else {
        displayMessage(message.data, false);
    }
});


function displayMessage(message, isClientMessage) {
    const messageElement = document.createElement('div');
    messageElement.className = isClientMessage ? 'client-message message' : 'server-message message';
    messageElement.innerHTML = `<p>${message}</p>`;
    chat.appendChild(messageElement);
}
