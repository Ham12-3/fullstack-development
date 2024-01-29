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
  setTimeout(() => {
    callback(userData);
  }, 1000);
};

// Fetch the user posts
const fetchUserPost = (userId, callback) => {
  console.log("Fetching user posts....");

  setTimeout(() => {
    callback(userPosts);
  }, 1000);
};

// Fetch post comments

const fetchPostComments = (postId, callback) => {
  console.log("Fetching posts  comments...");
  setTimeout(() => {
    callback(postComments[postId]);
  }, 1000);
};

// initiate the process

fetchUserData(1, function (userData) {
  console.log("User data", userData);
  fetchUserPost(userData.id, function (userPosts) {
    console.log("user posts", userPosts);

    userPosts.forEach(function (post) {
      console.log("Post", post);
      fetchPostComments(post.id, function (comments) {
        console.log("Comments", comments);
      });
    });
  });
});

// Simple calc with errors
const divideNumbers = (dividend, divisor, callback) => {
  setTimeout(() => {
    if (divisor === 0) {
      callback(new Error("Cannot divide by zero"), null);
    } else {
      callback(null, dividend / divisor);
    }
  }, 1000);
};

divideNumbers(10, 2, function (error, result) {
  if (error) {
    console.log("====================================");
    console.log("Error:", error.message);
    console.log("====================================");
  } else {
    console.log("Result", result);
  }
});
