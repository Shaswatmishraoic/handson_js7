let studentNames = studentRecords.map(student => student.name.toUpperCase());
console.log(studentNames);
//1

let studentsAbove50Marks = studentRecords.filter(student => student.marks > 50);
console.log(studentsAbove50Marks);
//2

let studentsAbove50MarksAndIDGreaterThan120 = studentRecords.filter(student => student.marks > 50 && student.id > 120);
console.log(studentsAbove50MarksAndIDGreaterThan120);
//3

let totalMarks = studentRecords.reduce((sum, student) => sum + student.marks, 0);
console.log(totalMarks);
//4

let namesAbove50Marks = studentRecords
  .filter(student => student.marks > 50)
  .map(student => student.name);

console.log(namesAbove50Marks);
//5

let sumMarks = studentRecords
  .filter(student => student.id > 120)
  .reduce((sum, student) => sum + student.marks, 0);

console.log(sumMarks);
//6

let totalMarksAfterGrace = studentRecords
  .map(student => {
    if (student.marks <= 50) {
      student.marks += 15;
    }
    return student.marks;
  })
  .reduce((sum, marks) => sum + marks, 0);

console.log(totalMarksAfterGrace);
//7

let studentArray = [
    { name: 'John', class: 'A', rollNo: 1 },
    { name: 'Emma', class: 'B', rollNo: 2 },
    { name: 'Michael', class: 'A', rollNo: 3 },
    { name: 'Sophia', class: 'B', rollNo: 4 },
    { name: 'William', class: 'A', rollNo: 5 },
    { name: 'Olivia', class: 'B', rollNo: 6 }
  ];
  
  console.log(studentArray);
//8  