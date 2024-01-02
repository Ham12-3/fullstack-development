// ----
// Creating Object using Object literals
// -----

// Define an object to represent a book in a bookstore

const boook = {
  title: "Harry Potter",
  author: "J.K Rowling",
  available: true,
  price: 9.99,
};
console.log(boook);

// title
// author
// price
// available
// pages

// Dot Notation

const bookTitle = boook.title;
console.log(bookTitle);

// Bracket Notation

const bookTitle2 = boook["title"];

// Propeties with special characters

const person = {
  "first name": "ben",
  "last name": "Joe",
};

console.log(person["first name"]);

// Adding properties to objects

objectname.newPropertyName = newValue;
objectName["newPropertyName"] = newValue;

// Add user role
const userProfile = {
  username: "Masynctech",
  email: "masuntech@gmail.com",
};

// Add role property

// userProfile.role = "admin";

userProfile["role"] = "superadmin";

console.log(userProfile);

const book1 = {
  title: "Harry Potter",
};

book1["publication year"] = 2023;

// Adding nested properties

const employee = {
  name: "Bob",
  department: "HR",
};

employee.address = {
  city: "Kumasi",
  state: "Ghana",
};
