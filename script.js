const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        displayMessage(message);
        broadcastMessage(message); // Broadcasts the message to all users
        messageInput.value = '';
    }
}

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
}

// Function to broadcast the message to all users
function broadcastMessage(message) {
    // For simulation purpose, we will log the broadcasted message to the console
    console.log('Broadcasted message:', message);
    // In a real scenario, you would send this message to all connected clients using Socket.io or a similar technology
}
