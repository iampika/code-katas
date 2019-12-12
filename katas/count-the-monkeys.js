// Count the Monkeys!
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// You take your son to the forest to see the monkeys.
// You know that there are a certain number there(n),
// but your son is too young to just appreciate the full number,
// he has to start counting them from 1.

// As a good parent, you will sit and count with him.
// Given the number(n), populate an array with all numbers
// up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

function monkeyCount(n) {
  const monkeyCountArray = [];

  let i = 1;
  while (i <= n) {
    monkeyCountArray.push(i);
    i += 1;
  }
  return monkeyCountArray;
}

console.log('Tests');
console.log(monkeyCount(5), [1, 2, 3, 4, 5]);
console.log(monkeyCount(3), [1, 2, 3]);
console.log(monkeyCount(9), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
