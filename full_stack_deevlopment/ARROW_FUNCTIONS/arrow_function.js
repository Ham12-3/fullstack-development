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

function hoistingIssue() {
  var a = 10;
  console.log(a);
}

hoistingIssue();

for (let i = 0; i < 3; i++) {
  // console.log(i);
}
console.log(i);

// Using var and let

var x = 10;
x = 20;

// DESTRUCTURING

const numbers = [1, 2, 3, 4];

const [first, second, third, fourth] = numbers;

const user = { name: "Masynctech", age: 10, email: "support@masynctech.com" };

function greet2(userObj) {
  console.log(`Hello, ${userObj.name}, your age is ${userObj.age}`);
}

const myUser = {
  name: "John",
  age: 30,
};

greet2(myUser);

// Destrucutre nested properties

const {
  id,
  info: { name, age },
} = {
  id: 1,
  info: {
    name: "Masynctech",
    age: 10,
  },
};

console.log(name);

// -----
// the concept of object being passed by reference
// ------

// Modifying object through a different reference

const person1 = { name: "Alice", age: 20 };

const person2 = person1;
// modify age

person2.age = 30;
console.log(person2);

console.log("person1", person1);

// passing object to a function

const incrementAge = (personObj) => {
  personObj.age += 1;
};

// PersonObj
const bob = { name: "Bob", age: 40 };
console.log("Before", bob);
incrementAge(bob);
console.log("After", bob);

// ---
// Objects in arrays

// ---

// Scenario: Managing a lsit of students

// In this example, we'll create a simple lst of students where each student is an object
// with peoperties like `id`, `name`, and `grade`

const students = [
  { id: 1, name: "Bob", grade: "A" },
  { id: 1, name: "Alice", grade: "B" },
];

// Access Students

const student1 = students[0].name;

// Add a new student

const addStudent = (id, name, grade) => {
  const newStudent = { id, name, grade };
  // push the new student into the students array

  students.push(newStudent);
};

addStudent(3, "Emmmanuel", "C");

const updateStudentGrade = (id, newGrade) => {
  // find the student by idconst

  const studentFound = students.find((student) => {
    return student.id === id;
  });
  if (studentFound) {
    studentFound.grade = "F";
  } else {
    console.log("Student not found");
  }
};

// Upgrade a student
