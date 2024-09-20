'use strict';

const insertWordInto = (initialStr = '') => {
  let pseudoRandomIndex = 0;
  return function (string) {
    const arrayFromString = initialStr.split(' ');
    arrayFromString.splice(pseudoRandomIndex, 0, string);
    pseudoRandomIndex += 1;
    return arrayFromString.join(' ');
  };
};

const insert = insertWordInto('hello world');
const result = insert('odesa');
console.log(result);
const result2 = insert('odesa');
console.log(result2);
const result3 = insert('odesa');
console.log(result3);
