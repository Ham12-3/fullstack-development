// Simulating a delay

async function waitAndRun(value) {
  // making API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 3000);
  });
}

// usage
const getProcessesdValue = async () => {
  const result = await waitAndRun("This is my promise");
  console.log(result);
};

getProcessesdValue();

// Fetching multiple values in parallel
const getName = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Alice");
    }, 1000);
  });
};

const getAge = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};

async function getUserDetails() {
  const result = await Promise.all([getName(), getAge()]);
  console.log(result);
}

// Error handling in async await
async function randomOutcome() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Success");
    } else {
      reject("failed");
    }
  });
}

const handleOutcome = async () => {
  try {
    const result = await randomOutcome();
    console.log(result);
  } catch (e) {
    console.log(err);
  }
};

handleOutcome();
