// Using object assign()

const students = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "B" },
];

// Grade updates

const gradeUpdates = [{ grade: "A+" }, { grade: "A" }];

// Update the students

const updateStudents = students.map((student, index) => {
  return Object.assign({}, student, gradeUpdates[index]);
});

console.log(updateStudents);

// Search and find filter using  find()

// Finding the first patient with a specifi aliment in a hospital

const patients = [
  { id: 101, name: "Sarah", disease: "Cold" },
  { id: 102, name: "Mike", disease: "Fever" },
  { id: 3, name: "Lucy", disease: "Cold" },
];
// Uing ths find()

const patientWithCold = patients.find((patient) => patient.disease === "Cold");

// Search and filter using some()

const patients2 = [
  { id: 101, name: "Sarah", disease: "Cold" },
  { id: 102, name: "Mike", disease: "Fever" },
  { id: 3, name: "Lucy", disease: "Cold" },
];

const patientWithCold2 = patients2.some(
  (patient) => patient.disease === "Cold"
);

// using every()

const studentsArr = [
  { id: 1, name: "Bob", grade: "A" },
  { id: 2, name: "Alice", grade: "B" },
  { id: 3, name: "Emma", grade: "C" },
];

const allPassed = studentsArr.every((student) => student.grade !== "F");
