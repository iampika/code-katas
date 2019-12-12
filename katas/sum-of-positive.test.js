import positiveSum from './sum-of-positive';

describe('Should pass all the tests', () => {
  test('Should return the sum of all of the positives ones', () => {
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
    expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
    expect(positiveSum([-1, 2, 3, 4, -5])).toBe(9);
  });
  test('Should return 0', () => {
    expect(positiveSum([])).toBe(0);
    expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
  });
});
