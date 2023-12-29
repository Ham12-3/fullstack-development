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
const numbers = [1, 2, 3, 4, 5, 6];
const squares = [];

numbers.forEach(function (element, index, array) {
  squares.push(element ** 2);
});

console.log("The total sum is; ", squares);
