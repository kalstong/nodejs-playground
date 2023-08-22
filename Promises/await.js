/*
    The await operator is used to wait for a Promise. It can only be used inside an async function.
*/

async function simulateAsyncOperation() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Operation completed');
      }, 1000);
    });
  }
  
  async function main() {
    try {
      console.log('Start');
      const result = await simulateAsyncOperation();
      console.log(result);
      console.log('End');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  main();
  