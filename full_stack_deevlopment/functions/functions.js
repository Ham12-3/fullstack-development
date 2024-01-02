// Syntax of Function declaration

function Hello() {
  // logic goes here
  //   Write any JavaScript logic

  console.log("Hello world");
}
// Calling the function

// Invoke

// show date

function showDate() {
  const currentDate = new Date();
  console.log(`Todays date is ${currentDate}`);
}
// Invoke
showDate();

// Function Expression

const sayHello = function () {
  console.log("Hello world");
};
sayHello();

const greetings = function () {
  console.log("Welcome to masynctech");
};

greetings();

const checkEvenOrOdd = function () {
  const number = 4;
  if (number % 2 === 0) {
    console.log("This is an even number");
  } else {
    console.log("This is an odd number");
  }
};

checkEvenOrOdd();

// Anonymous Function

() => console.log("Welcome");

// Immediately invoked function expression

(function () {})();

(function () {
  const num = 5;
  const square = num * num;
  console.log(square);
})();

(function () {
  const str1 = "Hello";
  const str2 = "World";

  console.log(str1 + " " + str2);
});

// Function parameters vs function arguments
// DRY don't repeat yourself

function greeting() {
  console.log("welcome to masynctech");
}

const greeting = function (name, age) {
  console.log(name);
  console.log(age);
  console.log(`Welcome ${name} your age is: ${age} years`);
};

greeting("Emma", 27);

const addTwoNumbers = function (a, b) {
  const result = a + b;
  console.log(result);
};

addTwoNumbers(5, 10);

// Default parameters

const greet = function (name = "Guest", age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old`);
};

greet("Emma", 30);

const multiply = function (a, b = a * 2) {
  console.log(a * b);
};
