function fetchUserProfile(userId) {
  return new Promise((resolve, reject) => {
    // Simulate fetching user profile asynchronously
    setTimeout(() => {
      const userProfile = { id: userId, name: 'John Doe' };
      resolve(userProfile);
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    // Simulate fetching user posts asynchronously
    setTimeout(() => {
      reject(new Error('fetchUserPosts failed'));
    }, 1500);
  });
}

// Fetch user profile and then fetch user posts wich will fail with an error
// Chaining promises allow to centralize error handling in one place
fetchUserProfile(123)
  .then((userProfile) => {
    console.log('User Profile:', userProfile);
    return fetchUserPosts(userProfile.id); // Returning a promise
  })
  .then((userPosts) => {
    console.log('User Posts:', userPosts);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


  // Another approach to handle errors is to use a second callback function
  // Note that there is no need to use the catch method
  // Careful: this approach will not catch errors from fetchUserPosts
  fetchUserProfile(123)
  .then((userProfile) => {
    console.log('User Profile:', userProfile);
    return fetchUserPosts(userProfile.id); // Returning a promise
  }, (error) => {
    console.error('This error will not be executed:', error);
  })
  .then((userPosts) => {
    console.log('User Posts:', userPosts);
  });