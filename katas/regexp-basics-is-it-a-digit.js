// Regexp Basics - is it a digit ?
// https://www.codewars.com/kata/567bf4f7ee34510f69000032

// Implement String#digit ? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit(0 - 9), false otherwise.

String.prototype.digit = function() {
  return this.length === 1 && '0' <= this && this <= '9';
  // return /^[0-9]$/.test(this);
};

console.log('Tests');
console.log(''.digit() === false);
console.log('7'.digit() === true);
console.log(' '.digit() === false);
console.log('a'.digit() === false);
console.log('a5'.digit() === false);
console.log('14'.digit() === false);
