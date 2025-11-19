/*
(November 19, 2025) One, Two, Skip a Few
Create a function which calculates how many numbers are missing from an ordered number line.
This number line starts at the first value of the array, and increases by 1 to the end of the number line, ending at the last value of the array.

Usage/Test case:
howManyMissing([1, 2, 3, 8, 9])
=> 4
howManyMissing([1, 3])
=> 1
howManyMissing([7, 10, 11, 12])
=> 2
howManyMissing([1, 3, 5, 7, 9, 11])
=> 5
howManyMissing([5, 6, 7, 8])
=> 0
*/

const howManyMissing = (array) => {
  if (array.length === 0) return 0;
  array.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < array.length - 1; i++) if (array[i + 1] - array[i] > 1) count += (array[i + 1] - array[i] - 1);

  return count;
};
