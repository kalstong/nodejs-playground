function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
      // Simulate fetching user profile asynchronously
      setTimeout(() => {
        reject(new Error('fetchUserProfile failed'));
      }, 1000);
    });
  }
  
  // Fetch user profile will fail with an error
  fetchUserProfile(123)
    .then((userProfile) => {
      console.log('User Profile:', userProfile);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  

  // Another approach to handle errors is to use a second callback function
  // Note that there is no need to use the catch method
  // Careful with this approach when chaining promises
  fetchUserProfile(123)
    .then((userProfile) => {
      console.log('User Profile:', userProfile);
    }, (error) => {
      console.error('Error:', error);
    });