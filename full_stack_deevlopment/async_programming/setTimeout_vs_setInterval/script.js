// _____setTimeout

const { log } = require("console");

const showMessage = () => {
  console.log("hello after 3 seconds");
};

// schedule a message
setTimeout(showMessage, 3000);

console.log("Waiting for the message");

const timeOutId = setTimeout(() => {
  console.log("This will not be displayed");
}, 5000);

console.log(timeOutId);
clearTimeout(timeOutId);

setInterval(() => {
  log("Am calling at every 2 seconds");
}, 2000);

let counter = 0;

const intervalId = setInterval(() => {
  counter++;
  log(counter);
}, 2000);

if (counter >= 5) {
  clearInterval(intervalId);
}

// ____Create a blocking code___________

console.log("started Blocking Operations");

// Create a blocking code 

for(let i=0;i < 1e9;1++) {
    // Simulate some operations 
    console.log(i)
}

console.log("Finished Blocking Operations")


// ______Non Blocking Operations_______

console.log('====================================');
console.log("Starting non Blocking Operations");
console.log('====================================');

setTimeout(()=> {
    console.log("Executing delays");
}, 4000)

console.log("Finished non Blocking Operations")