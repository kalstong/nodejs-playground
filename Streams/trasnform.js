const { Transform } = require('stream');

/*
    1. Create a custom Transform Stream
    2. Handle events for data and end
    3. Write data to the stream
    4. End the stream
*/

// Custom Transform Stream implementation
class MyTransformStream extends Transform {
  constructor(options) {
    super(options);
  }

  // Private function to be invoked by the Transform Stream
  _transform(chunk, encoding, callback) {
    // Convert incoming data to uppercase and push it to be read
    const upperCaseChunk = chunk.toString().toUpperCase();
    this.push(upperCaseChunk);
    callback();
  }
}

// Using the custom Transform Stream
const transformStream = new MyTransformStream();

transformStream.on('data', (chunk) => {
  console.log('\nReceived data:', chunk.toString());
});

transformStream.on('end', () => {
  console.log('\nTransformation finished.');
});

transformStream.write('Hello, ');
transformStream.write('Node.js ');

transformStream.end();
