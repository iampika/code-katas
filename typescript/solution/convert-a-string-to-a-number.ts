// Convert a String to a Number!
// https://www.codewars.com/kata/544675c6f971f7399a000e79

// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number.
// What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a
// perfectly valid representation of an integral number.

// Examples
// stringToNumber("1234") == 1234
// stringToNumber("605" ) == 605
// stringToNumber("1405") == 1405
// stringToNumber("-7"  ) == -7

const stringToNumber = function (str) {
  // return Number(str);
  // return parseInt(str);
  // return parseFloat(str);
  // return +str;
  // eslint-disable-next-line no-eval
  return eval(str);
};

console.log('Tests');
console.log(stringToNumber('1234') === 1234);
console.log(stringToNumber('605') === 605);
console.log(stringToNumber('1405') === 1405);
console.log(stringToNumber('-7') === -7);
