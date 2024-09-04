'use strict';

const arr = [];
const fillTheArray = (array) => {
  const userArrayLength = prompt('Введіть довжину масиву');

  while (array.length < userArrayLength) {
    const userArrayElement = +prompt('Введіть число-елемент масиву');
    array.push(userArrayElement);
  }
  console.log(array);
  array.sort((a, b) => a - b);
  console.log(array);
  const updatedArray = array.slice(2, 5);
  console.log(updatedArray);
};

console.log(fillTheArray(arr));
