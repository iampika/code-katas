// Reversed Strings
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'

function solution(str) {
  // return [...str].reduce((p, c) => c + p, '');
  // return [...str].reduceRight((p, c) => p + c, '');
  // return [...str].reverse().join('');
  return str
    .split('')
    .reverse()
    .join('');
}

console.log('Tests');
console.log(solution('world') === 'dlrow');
