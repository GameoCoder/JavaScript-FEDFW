//This program is to check if a number is prime or not
//Author - GameoCoder, 11/09/2026

function check(n) {
  if(n<=1) {
    return false;
  } else if (n==2) {
    return true;
  } else {
    let flag = true;
    for(let i = 2; i < n; i++) {
      if(n%i == 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
}

let res = check(11);
if(res == true) {
  console.log(`The number 11 is a Prime Number!`);
} else {
  console.log(`The number 11 is not a Prime Number!`);
}
