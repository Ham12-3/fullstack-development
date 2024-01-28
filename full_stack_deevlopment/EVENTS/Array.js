// Using Push methods

const fruits = ["Apple", "Banana"];

const newArrayOfFruits = fruits.push("Kiwi");

// console.log(newArrayOfFruits);

// console.log("modified fruits", fruits);

// Using pop and shift methods

const animal = ["Cat", "Dog", "Elephant"];

const poppedAnimal = animal.shift();

// console.log(poppedAnimal);

// Using the array length property

const colors = ["Red", "Yellow", "Green", "Black"];

const arrayLength = colors.length;

// console.log(arrayLength);

colors.length = 2;
// console.log(colors);

// For loops

// for (let i = 0; i <= 100; i++) {
//   // code to run
//   if (i === 50) {
//     continue;
//   }
//   console.log(i);
// }

// const myFruits = ["Apple", "Banana", "Kiwi"];

// for (let i = 0; i < myFruits.length; i++) {
//   console.log(myFruits[i]);
// }
//  Looping in reverse

for (let i = 5; i > 0; i--) {
  //   console.log(i);
}

// ForEach loop method

const squares = [];

numbers.forEach(function (element, index, array) {
  squares.push(element ** 2);
});

console.log("The total sum is; ", squares);

const newArrayMap = odlArray.map(function (element, index, array) {
  //transformation code works here
});

const newNumberArr = numbers.map(function (num, index, array) {
  return num * 2;
});

console.log(newNumberArr);

const words = ["apple", "pear", "mango"];

const convertedWords = words.map(function (word, index, array) {
  return word.toUpperCase();
});
console.log(convertedWords);

// THE FILTER METHOD

const newArrayFilter = oldArray.filter(function (element, index, array) {
  // Filtering works here
});

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);

const gender = ["male", "female"];
const maleArr = gender.filter(function (gender) {
  return gender === "male";
});
// using filter to remove falsy values from an array

const mixedArr2 = [0, 1, "apple", "", , null, "banana"];
const truthyValue = mixedArr2.filter(function (value) {
  return Boolean(value);
});

console.log(truthyValue);

// ARRAY REDUCE METHOD
const result = array.reduce(function (accumulator, element, index, array) {
  // Logic to transform accumualtor based on the element
});

// Reducing using the reduce()
const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce(function (acc, current) {
  console.log(acc);
  // Perform our logic
  return acc + current;
}, 0);

console.log(sum);

// Using reduce to count the frequency of element in an arrray

const fruit2 = ["apple", "banana", "mango", "apple"];

const fruitCount = fruit2.reduce(function (acc, current) {
  if (acc[cuurent]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});

// Multi Dimensional Array

// Creating a 2D array

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Accessing the elements

console.log(matrix[0][0]);

// Creating a 3D Array

const threeDArray = [[[], [], []]];
