// Remove First and Last Character
// https://www.codewars.com/kata/remove-first-and-last-character/train/javascript

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
