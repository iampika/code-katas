// Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// Convert number to reversed array of digits
// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
  return String(n)
    .split('')
    .map(Number)
    .reverse();
}

console.log('Tests');
console.log(digitize(35231), [1, 3, 2, 5, 3]);
