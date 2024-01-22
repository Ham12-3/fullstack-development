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
