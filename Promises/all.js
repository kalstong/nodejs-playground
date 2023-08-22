function fetchData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Uncomment the following line to simulate an error
        //reject(new Error("Something went wrong"));

        // Simulate fetching data from the provided URL
        resolve(`Data from ${url}`);
      }, Math.random() * 2000); // Simulating varying fetch times
    });
  }
  
  const urls = ['url1', 'url2', 'url3'];
  
  // all method takes an array of promises as an input
  // and returns a single Promise that fulfills when all promises
  // passed as an iterable have been fulfilled
  // or rejected as soon as one of the promises in the iterable rejects
  Promise.all(urls.map(fetchData))
    .then((results) => {
      console.log('All promises fulfilled. Results:', results);
    })
    .catch((error) => {
      console.error('At least one promise rejected:', error);
    });
  