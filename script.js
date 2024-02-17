let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  const studentsOver50 = arr.filter(student => student.marks > 50);
  console.log(studentsOver50);
}

function PrintStudentsbyForEach() {
  arr.forEach(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  const passedStudents = arr.filter(student => student.marks >= 50);
  arr = passedStudents;
  console.log(arr);
}

function concatenateArray() {
  const newStudents = [
    { id: 4, name: "susan", age: "20", marks: 45 },
    { id: 5, name: "peter", age: "21", marks: 60 },
    { id: 6, name: "emma", age: "22", marks: 70 }
  ];
  arr = arr.concat(newStudents);
  console.log(arr);
}
