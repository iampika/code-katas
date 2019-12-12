// Volume of a Cuboid
// https://www.codewars.com/kata/58261acb22be6e2ed800003a

// Bob needs a fast way to calculate the volume of a cuboid with
// three values: length, width and the height of the cuboid.
// Write a function to help Bob with this calculation.

const Kata = (function () {
  // eslint-disable-next-line no-shadow
  function Kata() {}

  Kata.getVolumeOfCuboid = function (length, width, height) {
    return length * width * height;
  };

  return Kata;
}());

console.log('Tests');
console.log(Kata.getVolumeOfCuboid(1, 2, 2) === 4);
console.log(Kata.getVolumeOfCuboid(6.3, 2, 5) === 63);
