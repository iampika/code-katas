// Draw stairs
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

// given a number n, draw stairs with 'I' n tall and n wide, with the tallest in the top left.
// Example (with - to represent spaces; DO NOT USE THEM IN THE SOLUTIONS! USE SPACES IN SOLUTION!
// the "-"s are for clarity.): draw_stairs(3) == '''I\n_I\n__I'''

// For example, a 7-step stairs should be drawn like this:

// const sevenStepStairs = drawStairs(7);
// I
//  I
//   I
//    I
//     I
//      I
//       I

function drawStairs(n) {
  return [...Array(n)].map((_, i) => `${' '.repeat(i)}I`).join('\n');
}

console.log('Tests');
console.log(drawStairs(1) === 'I');
console.log(drawStairs(3) === 'I\n I\n  I');
console.log(drawStairs(5) === 'I\n I\n  I\n   I\n    I');
