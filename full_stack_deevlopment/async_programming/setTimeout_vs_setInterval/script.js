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
