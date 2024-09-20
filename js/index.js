'use strict';

// 1
const getFactorial = (num) => {
  if (num === 1) return num;
  return num * getFactorial(num - 1);
};
console.log(getFactorial(3));

// 2
const pow = (num, degree) => {

};
console.log(pow(3, 2));
