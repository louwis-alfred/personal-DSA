const students = [
  { name: "LA", grade: 97 },
  { name: "Sam", grade: 99 },
  { name: "Pakkun", grade: 96 },
  { name: "Justine Bieber", grade: 96 },
  { name: "Abel", grade: 98 }
];

let highestStudent = students[0];

for (let i = 0; i < students.length; i ++) { 
  if (students[i].grade > highestStudent.grade) {
    highestStudent = students[i];
  }
}

console.log(`Name:${highestStudent.name} 
Grade:${highestStudent.grade}`)
