// Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// Introduction
// The first century spans from the year 1 up to and including the year 100,
// The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// Hope you enjoy it .. Awaiting for Best Practice Codes

// Enjoy Learning !!!

function century(year) {
  // return year % 100 !== 0 ? Math.floor(year / 100 + 1) : year / 100;
  return Math.ceil(year / 100);
}

console.log('Tests');
console.log(century(1705) === 18);
console.log(century(1900) === 19);
console.log(century(1601) === 17);
console.log(century(2000) === 20);
console.log(century(89) === 1);
console.log(century(427316) === 4274);
console.log(century(875790) === 8758);
