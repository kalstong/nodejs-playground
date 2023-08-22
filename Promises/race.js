function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ms)
      }, ms);
    });
  }
  
  const promise1 = delay(1000); // Resolves after 1 second
  const promise2 = delay(2000); // Resolves after 2 seconds
  const promise3 = delay(500);  // Resolves after 500 milliseconds
  
  // With race as soon as one promise resolves or rejects, the result of the fastest promise is returned
  // the other promises are resolved or rejected but their result is not returned
  Promise.race([promise1, promise2, promise3])
    .then((result) => {
      console.log('The fastest promise resolved with:', result);
    })
    .catch((error) => {
      console.error('At least one promise rejected:', error);
    });
  