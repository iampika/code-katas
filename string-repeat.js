// String repeat
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr(n, s) {
  let newStr = s;
  let i = 1;

  while (i < n) {
    newStr += s;
    i++;
  }

  return newStr;
}

console.log('Tests');
console.log(repeatStr(3, '*') === '***');
console.log(repeatStr(5, '#') === '#####');
console.log(repeatStr(2, 'ha ') === 'ha ha ');
