// Calculate average
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// Write function avg which calculates average of numbers in given list.

function findAverage(array) {
  return array.reduce((p, c) => p + c, 0) / array.length;
}

console.log('Tests');
console.log(findAverage([1, 1, 1]) === 1);
console.log(findAverage([1, 2, 3]) === 2);
