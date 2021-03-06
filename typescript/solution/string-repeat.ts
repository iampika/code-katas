// String repeat
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// Write a function called repeatString which repeats the given String src exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  let newStr = s;
  let i = 1;

  while (i < n) {
    newStr += s;
    i += 1;
  }

  return newStr;
}

console.log('Tests');
console.log(repeatStr(3, '*') === '***');
console.log(repeatStr(5, '#') === '#####');
console.log(repeatStr(2, 'ha ') === 'ha ha ');
