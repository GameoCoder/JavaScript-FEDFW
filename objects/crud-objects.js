const student = {
  name: "Nitin",
  age: 20,
  course: "Hybrid Quantum Machine Learning"
};

//Accessing Properties
console.log(student.name);
console.log(student["age"]);

//Modifying Properties
student.course = "Quantum Computing";
console.log(student.course);

//Create Properties
student.city = "Guntur";
console.log(student.city);

//Delete Properties
delete student.age;
console.log(student.age); // Undefined
