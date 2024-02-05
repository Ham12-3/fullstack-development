// Ways of exporting in csjs
// Single Function Export
// Object Export
// Named Function export

const firstName = "Development";

const greet = (name) => {
  return `Hello, ${name}`;
};

// module.exports = greet;

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

module.exports = {
  add,
  subtract,
};
