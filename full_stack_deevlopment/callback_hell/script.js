// Nested Timeout functions

const task1 = (callback) => {
  setTimeout(() => {
    console.log("Task completed");
    callback();
  }, 3000);
};

const task2 = (callback) => {
  setTimeout(() => {
    console.log("Task completed");
    callback();
  }, 2000);
};

const task3 = (callback) => {
  setTimeout(() => {
    console.log("Task completed");
    callback();
  }, 1000);
};

// Start the first task
task1(function () {
  // Once the first task is completed start the second
  task2(function () {
    // Once the second is completed start the third
    task3(function () {
      console.log("All task completed");
    });
  });
});

// Fecth user data(dummy data)

const userData = { id: 1, name: "Agnes Appia" };

const userPosts = [
  { id: 101, content: "Post 1" },
  { id: 102, content: "Post 2" },
];

const postComments = {
  101: ["comment 1", "comment 2"],
  102: ["comment 1", "comment 2"],
};

// Fetch the user data

const fetchUserData = (userI, callback) => {
  console.log("Fetching user data");
};

// Fetch the user posts
const fetchUserPost = (userId, callback) => {
  console.log("Fetching user posts....");

  setTimeout(() => {
    callback(usersPosts);
  }, 1000);
};
