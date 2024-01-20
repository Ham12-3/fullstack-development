const functionName = (param1, param2, param3) => XPathExpression;

const functionName1 = () => ({ key: "value" });

//
// ARROW FUNCTION

// Basic Syntax

function multiply(a, b) {
  return a * b;
}

const multiply = (a, b) => a * b;

const result = multiply(2, 3);

const greet = (name) => {
  return `Hello, ${name}`;
};

const greetFun = greet("Emmanuel");

// Single Parameter , No parenthesis

const square = (x) => x * x;

const squareFn = square(5);

// No Parameters
const random = () => Math.random();

// Object literal return

const getUser = () => {
  return {
    name: "Masynctech",
    age: 10,
  };
};

const getUserFn = getUser();
