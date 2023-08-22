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
        const userPosts = [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
          { id: 3, title: 'Post 3' }
        ];
        resolve(userPosts);
      }, 1500);
    });
  }
  
  // Fetch user profile and then fetch user posts
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
  