const EventEmitter = require('events');

// Create an EventEmitter instance
const messageEmitter = new EventEmitter();

// Listener function for receiving messages
function receiveMessage(sender, message) {
  console.log(`${sender} says: ${message}`);
}

// Register the listener for the 'messageReceived' event
messageEmitter.on('messageReceived', receiveMessage);

// Function to send a message
function sendMessage(sender, message) {
  console.log(`\nSending message from ${sender}...`);
  // Emit the 'messageReceived' event with the sender and message as arguments
  messageEmitter.emit('messageReceived', sender, message);
}

// Send a message
sendMessage('Alice', 'Hello there!');
sendMessage('Bob', 'Hey, how are you?');