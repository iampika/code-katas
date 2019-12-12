// Count of positives / sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// Given an array of integers.

// Return an array, where the first element is the count of
// positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  const arr = [];

  if (input && input.length > 0) {
    input.forEach((value) => {
      if (value > 0) {
        count += 1;
      } else {
        sum += value;
      }
    });
    arr.push(count);
    arr.push(sum);
  }

  return arr;
}

console.log('Tests');
let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let actual = countPositivesSumNegatives(testData);
let expected = [10, -65];

console.log(actual[0] === expected[0] && actual[1] === expected[1]);

testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
actual = countPositivesSumNegatives(testData);
expected = [8, -50];

console.log(actual[0] === expected[0] && actual[1] === expected[1]);
