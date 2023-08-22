const { Duplex } = require('stream');

/*
    1. Create a custom Duplex Stream
    2. Handle events for data and end
    3. Write data to the stream
    4. End the stream
*/

// Custom Duplex Stream implementation
class MyDuplexStream extends Duplex {
  constructor(options) {
    super(options);
    this.index = 1;
  }

  // Private function to be invoked by the Duplex Stream
  _write(chunk, encoding, callback) {
    // Reverse the incoming data and push it to be read
    const reversedChunk = chunk.toString().split('').reverse().join('');
    this.push(reversedChunk);
    callback();
  }

  // Private function to be invoked by the Duplex Stream
  _read(size) {
    // Generate and send data to be written
    this.push(this.index.toString());
    this.index++;
    if (this.index > 5) {
      this.push(null); // Signals the end of data
    }
  }
}

// Using the custom Duplex Stream
const duplexStream = new MyDuplexStream();

duplexStream.on('data', (chunk) => {
  console.log('\nReceived data:', chunk.toString());
});

duplexStream.on('end', () => {
  console.log('\nReading finished.');
});

// If you comment the following lines, the stream will be readed until it signals the end of data
// I that case, you should be able to see 'Received data: 1' to 'Received data: 5' in the console
duplexStream.write('Hello, ');
duplexStream.write('Node.js ');

duplexStream.end();
