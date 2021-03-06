// Grasshopper - Summation
// https://www.codewars.com/kata/grasshopper-summation/train/javascript

// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

const summation = function (num) {
  let sum = 0;

  let i = 1;
  while (i <= num) {
    sum += i;
    i += 1;
  }

  return sum;
};

console.log('Tests');
console.log(summation(1) === 1);
console.log(summation(8) === 36);
