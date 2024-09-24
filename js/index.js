'use strict';

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

const flat = function (arr) {
  let newArr = [];
  if (arguments.length > 1) throw new Error('Function accepts only 1 argument, too much arguments provided');
  if (!arr.some(Array.isArray)) {
    newArr = arr.slice(0, arr.length + 1);
  }

  for (const item of arr) {
    if (Array.isArray(item)) {
      newArr = newArr.concat(flat(item));
    } else {
      newArr.push(item);
    }
  }
  return newArr;
};
console.log(flat(complexArray));
