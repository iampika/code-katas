// Sort and Star
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

// You will be given an vector of string(s).You must sort it alphabetically(case -sensitive!!) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from / to the array.

function twoSort(s) {
  return s
    .sort()[0]
    .split('')
    .join('***');
}

console.log('Tests');
console.log(
  twoSort([
    'bitcoin',
    'take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps',
  ]) === 'b***i***t***c***o***i***n'
);
console.log(
  twoSort([
    'turns',
    'out',
    'random',
    'test',
    'cases',
    'are',
    'easier',
    'than',
    'writing',
    'out',
    'basic',
    'ones',
  ]) === 'a***r***e'
);
