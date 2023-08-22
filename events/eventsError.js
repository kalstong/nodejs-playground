const EventEmitter = require('events');

// Create an EventEmitter instance
const messageEmitter = new EventEmitter({ captureRejections: true });

// Listener function for receiving messages
async function receiveMessage(sender, message) {
  // return a rejected promise
  return Promise.reject(new Error('Something went wrong!'));
}

// Register the listener for the 'messageReceived' event
messageEmitter.on('messageReceived', receiveMessage);

messageEmitter.on('error', (error) => {
  console.log('Captured promise rejection value: ' + error.message)
});

// Function to send a message
function sendMessage(sender, message) {
  console.log(`\nSending message from ${sender}...`);
  // Emit the 'messageReceived' event with the sender and message as arguments
  messageEmitter.emit('messageReceived', sender, message);
}

// Send a message
try {
  sendMessage('Alice', 'Hello there!');
  sendMessage('Bob', 'Hey, how are you?');
} catch (error) {
  console.log(`Event Error: ${error.message}`)
}