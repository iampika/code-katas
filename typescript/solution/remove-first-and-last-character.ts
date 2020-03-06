// Remove First and Last Character
// https://www.codewars.com/kata/remove-first-and-last-character/train/javascript

// It's pretty straightforward. Your goal is to create a function that removes the
// first and last characters of a string. You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

function removeChar(str) {
  const strArray = str.split('');
  let newStr = '';

  strArray.shift();
  strArray.pop();
  newStr = strArray.join('');

  return newStr;
}

console.log('Tests');
console.log(removeChar('eloquent') === 'loquen');
console.log(removeChar('country') === 'ountr');
console.log(removeChar('person') === 'erso');
console.log(removeChar('place') === 'lac');
