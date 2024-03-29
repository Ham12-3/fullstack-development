// Promise.all

// create our promises

const promise1 = Promise.resolve("Promise 1 resolved");

const promise2 = Promise.reject(new Error("Promise 2 rejected"));

Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
