const fs = require("fs");

// Read a file using fs module

// Synchronous

const content = fs.readFileSync("./sample.txt", "utf-8");

console.log(content.toString());

// Asynchronous

fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
    console.log(data);
  } else {
    console.log(data.toString());
  }
});

// Write to a file

fs.writeFile("./new.txt", "Hello, World!", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("File written successfully!");
  }
});

// Appending to a file

fs.appendFile("./new.txt", "Appended content", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("File written successfully!");
  }
});

// Checking if a file already exists or not

fs.access("./new2.txt", fs.constants.F_OK, (err) => {
  if (err) {
    console.log("File does not exist");
  } else {
    console.log("File exists");
  }
});

// Delete a file

// fs.unlink("./new.txt", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("File deleted successfully!");
//   }
// });

// Using promise
const fs2 = require("fs/promises");

const readFileContent = async () => {
  try {
    const data = await fs2.readFile("./sample.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

readFileContent();
