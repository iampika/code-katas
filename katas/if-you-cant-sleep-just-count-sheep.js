// If you can't sleep, just count sheep!!
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function(num) {
  let countedSheep = '';
  for (let i = 1; i <= num; i++) {
    countedSheep += `${i} sheep...`;
  }
  return countedSheep;
};

console.log('Tests');
console.log(countSheep(1) === '1 sheep...');
console.log(countSheep(2) === '1 sheep...2 sheep...');
console.log(countSheep(3) === '1 sheep...2 sheep...3 sheep...');
