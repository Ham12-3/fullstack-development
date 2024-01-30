// Example 1 with callback

function simpleCb(success, cb) {
  console.log("Cb function called");
  if (success) {
    cb(null, "The operation was successful");
  } else {
    cb("The operation failed", null);
  }
}

// Usage

simpleCb(true, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
  console.log("This always log regradless of the operation");
});

// Example 2 convert to use promise

// creation

const simplePromise = new Promise((resolve, rejected) => {
  const success = true;
  if (success) {
    resolve("The operation was successful");
  } else {
    // Reject the promise
    rejected("The promise operation failed");
  }
});

// Usage

simplePromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("This always log regardless of the operation");
  });

function isEvenNumber(number, cb) {
  if (number % 2 === 0) {
    cb(null, `The number ${number} is not even`);
  } else {
    cb(new Error(`The number ${number} is not even`));
  }
}

// Usage

isEvenNumber(4, (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});

// Creation

function isEvenNumberPromise(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      // Resolve
      resolve(`The number ${number} is even`);
    } else {
      // Reject the promise
      reject(`The number ${number} is odd`);
    }
  });
}

// Call the fn/resolve
isEvenNumberPromise(4)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("This always logs regardless of the operation");
  });
