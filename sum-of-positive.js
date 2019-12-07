// Sum of positive
// https://www.codewars.com/kata/sum-of-positive/train/javascript

function positiveSum(arr) {
  return arr.reduce((p, c) => (c > 0 ? p + c : p), 0);
}

console.log('Tests');
console.log(positiveSum([1, 2, 3, 4, 5]) === 15);
console.log(positiveSum([1, -2, 3, 4, 5]) === 13);
console.log(positiveSum([]) === 0);
console.log(positiveSum([-1, -2, -3, -4, -5]) === 0);
console.log(positiveSum([-1, 2, 3, 4, -5]) === 9);
