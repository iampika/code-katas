// Alan Partridge II - Apple Turnover
// https://www.codewars.com/kata/alan-partridge-ii-apple-turnover/train/javascript

// Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'.According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

// X will be a number.

function apple(x) {
  return x * x > 1000
    ? "It's hotter than the sun!!"
    : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}

console.log('Tests');
console.log(apple('50') === "It's hotter than the sun!!");
console.log(
  apple(4) === 'Help yourself to a honeycomb Yorkie for the glovebox.'
);
