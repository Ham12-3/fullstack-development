const { clear } = require("console");

// Nodejs guide : https://nodejs.org/en/docs/
console.log("Hello World!");
// Nodejs REPL : https://nodejs.org/en/docs/guides/getting-started-guide/
// Nodejs guide : https://nodejs.org/en/docs/

// Path: full_stack_deevlopment/nodejs/my-first-app/app.js

// Node.js single threaded event loop model is used to handle multiple concurrent clients.

// Node.js Objects : https://nodejs.org/api/globals.html

// console.log(global);

// Accessing the global object in Node.js

global.myGlobal = "I am global";

console.log(global.myGlobal);

// console.log(__dirname);
// console.log(__filename);

// Using setInterval and clearInterval in Node.js : https://nodejs.org/en/docs/guides/timers-in-node/

let count = 0;
const interval = setInterval(() => {
  //   console.log("Hello World!");
  count++;
  if (count === 5) {
    clearInterval(interval);
  }
});

// using setTimeout in Node.js : https: nodejs.org/en/docs/guides/timers-in-node/  setTimeout is used to run a function after a certain period of time.
// using process object in Node.js : https://nodejs.org/api/process.html
// process object is a global object and can be accessed from anywhere. It is an instance of EventEmitter.
// process.argv : https://nodejs.org/api/process.html#process_process_argv
// process.argv property returns an array containing the command line arguments passed when the Node.js process was launched.
// process.argv[0] is the path to node

// console.log(process);

// Environment variables in Node.js : https://nodejs.org/api/process.html#process_process_env

// Accessing environment variables in Node.js
// console.log(process.env.APP_ENV || "development");

// Display the env
console.log(
  `Our Node App is running in ${process.env.APP_ENV || "development"} mode`
);

if (process.env.APP_ENV === "production") {
  //   Display some error message

  console.log("This is a production environment");
}

// modules and require in Node.js : https://nodejs.org/api/modules.html

// console.log(utils("Alice"));

const { add, subtract } = require("./utils");

console.log(add(2, 3));

console.log(subtract(5, 3));
