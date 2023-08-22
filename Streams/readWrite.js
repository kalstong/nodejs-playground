const fs = require('fs');

/*
    1. Create a readable stream from a file
    2. Create a writable stream to another file
    3. Pipe the data from the readable stream to the writable stream
    4. Handle events for data, end, and error
*/

// Readable stream reading from a file
const readableStream = fs.createReadStream('input.txt');

// Writable stream writing to another file
const writableStream = fs.createWriteStream('output.txt');

// Pipe the data from the readable stream to the writable stream
readableStream.pipe(writableStream);

// Handle events for data, end, and error
readableStream.on('data', (chunk) => {
  console.log('Received a chunk of data:\n', chunk.toString());
});

readableStream.on('end', () => {
  console.log('\nReading finished.');
});

readableStream.on('error', (error) => {
  console.error('\nAn error occurred:', error);
});
