// Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('.')
    .toUpperCase();
}

console.log('Tests');
console.log(abbrevName('Sam Harris') === 'S.H');
console.log(abbrevName('Patrick Feenan') === 'P.F');
console.log(abbrevName('Evan Cole') === 'E.C');
console.log(abbrevName('P Favuzzi') === 'P.F');
console.log(abbrevName('David Mendieta') === 'D.M');
