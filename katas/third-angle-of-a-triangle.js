// Third Angle of a Triangle
// https://www.codewars.com/kata/third-angle-of-a-triangle/train/javascript

// You are given two angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180 - (a + b);
}

console.log('Tests');
console.log(otherAngle(30, 60) === 90);
console.log(otherAngle(60, 60) === 60);
console.log(otherAngle(43, 78) === 59);
console.log(otherAngle(10, 20) === 150);
