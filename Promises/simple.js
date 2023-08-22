function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
      // Simulate fetching user profile asynchronously
      setTimeout(() => {
        const userProfile = { id: userId, name: 'John Doe' };
        resolve(userProfile);
      }, 1000);
    });
  }
  
  // Fetch user profile and then fetch user posts
  fetchUserProfile(123)
    .then((userProfile) => {
      console.log('User Profile:', userProfile);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  