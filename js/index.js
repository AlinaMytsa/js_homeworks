'use strict';

const sum = () => {
  let result = 0;
  return function (num) {
    result += num;
    return result;
  };
};
const sum1 = sum();
console.log(sum1(3));
console.log(sum1(5));
console.log(sum1(20));
