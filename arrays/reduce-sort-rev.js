let nums = [25,10,15,20];
let rev_nums = nums;
let sum = nums.reduce((total, num) => total+num,0);
console.log(`Sum (using reduce) - ${sum}`);

let sorted_nums = nums.sort((a,b) => a-b);
console.log(`Sorted Numbers: ${sorted_nums}`);


rev_nums.reverse();
console.log(`Reverse Numbers: ${rev_nums}`);
