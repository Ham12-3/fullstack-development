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
