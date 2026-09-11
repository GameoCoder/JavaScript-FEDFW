//This program is for printing fibonacci series
//Author - GameoCoder, 11/09/2026

function fib(n) {
  if(n <= 2) {
    return 1;
  } else {
    return fib(n-1) + fib(n-2);
  }
}

function print_fib(num) {
  for(let i = 1; i < num; i++) {
    console.log(fib(i));
  }
}

print_fib(10);
