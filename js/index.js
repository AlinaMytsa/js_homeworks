'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7];
const removeElement = function (array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
    }
  }
  return array;
};
const result = removeElement(arr, 5);
console.log(result);
