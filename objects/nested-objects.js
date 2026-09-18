// A function inside an object - Object Method
const person = {
  name: "Noob",
  greet() {
    console.log("Hello");
  }
};
person.greet();

// Object containing another object - Nested Object
const student = {
  name: "Ram",
  address: {
    city: "Vijaywada",
    state: "Andhra Pradesh"
  }
};

console.log(student.address.city);
