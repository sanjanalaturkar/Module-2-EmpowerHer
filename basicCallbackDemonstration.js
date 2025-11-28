function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}

function getUserInput(callback) {
  setTimeout(() => {
    const retrievedName = "Alice"; 
    callback(retrievedName);
  }, 1000);
}

getUserInput(displayMessage);
