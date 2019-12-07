// Sum Mixed Array
// https://www.codewars.com/kata/sum-mixed-array/train/javascript

// function sumMix(x) {
//   let sum = 0;

//   x.forEach(value => {
//     sum += Number(value);
//   });

//   return sum;
// }

// function sumMix(x) {
//   return x.reduce((preValue, curValue) => preValue + Number(curValue), 0);
// }

function sumMix(x) {
  let sum = 0;

  let i = 0;
  while (x.length - 1 > i) {
    sum += Number(x[i]);
    i++;
  }

  return sum;
}

console.log('Tests');
console.log(sumMix([9, 3, '7', '3']) === 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) === 42);
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']) === 41);
