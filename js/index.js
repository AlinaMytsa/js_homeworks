'use strict';

const padString = function (string, lenght, symbol, bool = true) {
  const padStr = bool === false ? string.padStart(lenght, symbol) : string.padEnd(lenght, symbol);
  if (string === undefined) {
    return 'не введено строку';
  } if (lenght === undefined) {
    return 'не введено довжину';
  } if (symbol === undefined) {
    return 'не введено символ';
  }

  if (lenght < string.length) {
    const newStr = string.substring(0, lenght);
    return newStr;
  }

  return padStr;
};
const result = padString('hello', 42, '*');
console.log(result);
