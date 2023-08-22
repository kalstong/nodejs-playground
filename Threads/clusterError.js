const cluster = require('cluster');
const { error } = require('console');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });

  cluster.on('message', (worker, message) => {
    console.log(`Message received from worker ${worker.id}: ${message}`);
  });

  cluster.on('error', (worker, message) => {
    console.log(`Error received from worker ${worker.id}: ${message}`);
  });

} else {
  // Workers can share any TCP connection
  // In this case, it is an HTTP server
  // Check the result with 'curl http://localhost:8000' in the terminal
  http.createServer((req, res) => {
    const forcedError = Math.random() > 0.5;
    if (forcedError === true)
      throw new Error('This will crash the worker thread but the error will be handled in the main thread')
    
    res.writeHead(200);
    process.send(`Hello from worker ${process.pid}`);
    res.end(`Hello, Node.js from pid ${process.pid}!`);
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
