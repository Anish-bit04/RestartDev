/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let l1 = numbers.length;
  let maxValue = numbers[0];
  for (let i = 1; i < l1; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
    }
  }
  return maxValue;
}

// console.log(findLargestElement([3, 7, 2, 9, 1]));
module.exports = findLargestElement;
