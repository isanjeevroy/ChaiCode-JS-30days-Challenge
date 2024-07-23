//Activity 1 : Understanding Promises
//Task 1

function delayedMessage() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello after 2 seconds!");
      }, 2000);
    });
  }
  
  delayedMessage()
  .then((message) => {
    console.log(message);
  })

  
