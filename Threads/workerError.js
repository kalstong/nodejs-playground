const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  console.log(' From the main thread')
  const worker = new Worker(__filename);
  worker.on('message', (result) => {
    console.log('Worker result:', result);
  });

  worker.on('error', (result) => {
    console.log('Worker error:', result);
  });

} else {
  console.log(' From the worker thread')
  // This code runs in the worker thread
  const result = performComplexCalculation();
  parentPort.postMessage(result);
}

function performComplexCalculation() {
  // Simulate a time-consuming task
  let result = 0;
  for (let i = 0; i < 1000; i++) {
    // This will crash the worker thread but the error will be handled in the main thread
    if (i === 500)
      throw new Error('This error will be handled');
    
    if (i % 2 === 0) {
      // keep sending messages to the main thread
      parentPort.postMessage('Even number found ' + i);
    }
    result += i;
  }
  return result;
}
