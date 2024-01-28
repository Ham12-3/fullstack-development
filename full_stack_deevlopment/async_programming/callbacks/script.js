// Behaving as a normal function parameter/argument/variable

// Create callback function

function myCallbackFn() {
  console.log("Hello this is a simple callback function");
}

// usage
function logMessage(callback) {
  // Execute the callback fn
  const result = callback();
  console.log(result);
}

logMessage(() => {
  return "Hello this is a simple callback function";
});

// passing parameters to callback functions

const logMessageHOF = (callback) => {
  const result = callback("Agnes", "Appiah");

  console.log(result);
};

const logMessageCallbackFn = (firstName, lastName) => {
  return `hello ${firstName} ${lastName} this is a simple cb`;
};

logMessageHOF(logMessageCallbackFn);

// HOF with parameter and call back function

const calculateSumHOF = (a, b, callback) => {
  const result = a + b;
  callback(result);
};
calculateSumHOF(2, 3, (result) => {
  console.log(result);
});
