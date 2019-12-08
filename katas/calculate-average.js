// Calculate average
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  return array.reduce((p, c) => p + c, 0) / array.length;
}

console.log('Tests');
console.log(find_average([1, 1, 1]) === 1);
console.log(find_average([1, 2, 3]) === 2);
