let nums = [2,4,6];
console.log(nums.every(num => num % 2 === 0));

nums = [2,4,5];

console.log(nums.some(num => num % 2 === 0));

console.log(nums.join(', '));
