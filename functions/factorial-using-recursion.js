//This Code is for finding factorial of a number by recursion in javascript
//Author - GameoCoder, 11/09/2026

function fac(n) {
  if(n <= 1) {
    return 1;
  } else {
    return n * fac(n-1);
  }
}

console.log(fac(5));  //Prints 120
console.log(fac(10)); //Prints 3628800
