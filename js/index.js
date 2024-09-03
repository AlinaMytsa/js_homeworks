'use strict';

// 1
const arr = [5, 'hello', 10, 15, 'world'];
const arithmeticAverage = function (array) {
  const newArr = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      newArr.push(array[i]);
      sum += array[i];
    }
  }
  return sum / newArr.length;
};
const result = arithmeticAverage(arr);
console.log(result);
// 2
const num1 = prompt('введіть перше число');
const num2 = prompt('введіть друге число');
const action = prompt('введіть дію, яку потрібно зробити з числами: +, -, *, /, %, ^ (ступінь)');
const doMath = function (x, znak, y) {
  if (znak === '+') {
    console.log(`Результат: ${x} + ${y} = ${Number(x) + Number(y)}`);
  } else if (znak === '-') {
    console.log(`Результат: ${x} ${znak} ${y} = ${x - y}`);
  } else if (znak === '*') {
    console.log(`Результат: ${x} ${znak} ${y} = ${x * y}`);
  } else if (znak === '/') {
    console.log(`Результат: ${x} ${znak} ${y} = ${x / y}`);
  } else if (znak === '%') {
    console.log(`Результат: ${x} ${znak} ${y} = ${x % y}`);
  } else if (znak === '^') {
    console.log(`Результат: ${x} ${znak} ${y} = ${x ** y}`);
  }
  return 'Задачу виконано.';
};
const result2 = doMath(num1, action, num2);
console.log(result2);
// 3
const fillTheArray = function () {
  const outerArrayLength = +prompt('Введіть довжину зовнішнього масиву.');
  const outerArray = [];

  for (let i = 0; i < outerArrayLength; i++) {
    const innerArrayLength = +prompt(`Введіть довжину масиву ${i + 1}:`);
    const innerArray = [];

    for (let el = 0; el < innerArrayLength; el++) {
      const element = prompt('Введіть значення елементу масиву:');
      innerArray.push(element);
    }
    outerArray.push(innerArray);
  }
  return outerArray;
};
const result3 = fillTheArray();
console.log(result3);
// 4
const userString = prompt('Введіть строку');
const userRemove = prompt('Введіть символи, які потрібно видалити зі строки через кому:');
const removeCharacters = function (string, removeElements) {
  const removeArray = removeElements.split(',');
  let finalString = '';
  for (let i = 0; i <= string.length; i++) {
    const symbol = string[i];
    let shouldRemove = false;
    for (let j = 0; j <= removeArray.length; j++) {
      if (symbol === removeArray[j]) {
        shouldRemove = true;
        break;
      }
    }
    if (!shouldRemove) {
      finalString += symbol;
    }
  }
  return finalString;
};
const result4 = removeCharacters(userString, userRemove);
console.log(result4);
