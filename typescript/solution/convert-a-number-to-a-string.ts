// Convert a Number to a String!
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8

// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// numberToString(123); // returns '123';`
// numberToString(999); // returns '999';`

function numberToString(num) {
  // return num.toString();
  // return '' + num;
  // return `${num}`;
  return String(num);
}

console.log('Tests');
console.log(numberToString(67) === '67');
