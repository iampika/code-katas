// Sum of differences in array
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example: sumOfDifferences([2, 1, 10]) Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0(Nothing in Haskell).

function sumOfDifferences(arr) {
  return arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((a, b) => a + b, 0);
}

console.log('Tests');
console.log(sumOfDifferences([1, 2, 10]) === 9);
console.log(sumOfDifferences([-3, -2, -1]) === 2);
console.log(sumOfDifferences([3, -1, 0, -2, -2, -2, 2, -2, 2]) === 5);
