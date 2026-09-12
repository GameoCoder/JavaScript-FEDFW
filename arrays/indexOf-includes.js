let arr = [10,20,30,40,50];

//Includes??
console.log(arr.includes(30));

//Finds the index of a value in the array
console.log(arr.indexOf(50));

//Prints each element
arr.forEach(element => {
  console.log(element);
});

//Finds either the number that just satisfies the condition or the index of that number
console.log(arr.find(num => num > 35));
console.log(arr.findIndex(num => num > 35));
