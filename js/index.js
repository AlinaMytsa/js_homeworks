'use strict';

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// 1 Знайти суму та кількість позитивних елементів.
const positiveLengthAndSum = (arr) => {
  const newArr = [];
  let sumOfPositive = 0;
  arr.forEach((item) => {
    if (item > 0) {
      newArr.push(item);
      sumOfPositive += item;
    }
  });
  console.log(newArr.length);
  console.log(sumOfPositive);
};
positiveLengthAndSum(array);
// 2 Знайти мінімальний елемент масиву та його порядковий номер.
const smallestNumber = (arr) => {
  let min = arr[0];
  arr.forEach((item) => {
    if (item < min) {
      min = item;
    }
  });
  const index = arr.findIndex((element) => element === min);
  return `Найменше число: ${min}, його індекс в масиві: ${index}`;
};

console.log(smallestNumber(array));
// 3 Знайти максимальний елемент масиву та його порядковий номер.
const biggestNumber = (arr) => {
  let max = arr[0];
  arr.forEach((item) => {
    if (item > max) {
      max = item;
    }
  });
  const index = arr.findIndex((element) => element === max);
  return `Найбільше число: ${max}, його індекс: ${index}`;
};
console.log(biggestNumber(array));

// 4 Визначити кількість негативних елементів.
const amountOfNegative = (arr) => {
  const newArr = [];
  arr.forEach((item) => {
    if (item < 0) {
      newArr.push(item);
    }
  });
  return newArr.length;
};
console.log(amountOfNegative(array));
// 5 Знайти кількість непарних позитивних елементів.
const oddPositive = (arr) => {
  const newArr = [];
  arr.forEach((element) => {
    if (element > 0 && element % 2 !== 0) {
      newArr.push(element);
    }
  });
  return newArr.length;
};
console.log(oddPositive(array));
// 6 Знайти кількість парних позитивних елементів.
const evenPositive = (arr) => {
  const newArr = [];
  arr.forEach((element) => {
    if (element > 0 && element % 2 === 0) {
      newArr.push(element);
    }
  });
  return newArr.length;
};
console.log(evenPositive(array));
// 7 Знайти суму парних позитивних елементів.
const sumOfEvenPositive = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    if (element > 0 && element % 2 === 0) {
      sum += element;
    }
  });
  return sum;
};
console.log(sumOfEvenPositive(array));
// 8 Знайти суму непарних позитивних елементів.
const sumOfOddPositive = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    if (element > 0 && element % 2 !== 0) {
      sum += element;
    }
  });
  return sum;
};
console.log(sumOfOddPositive(array));
// 9 Знайти добуток позитивних елементів.
const multipleOfPositive = (arr) => {
  let multiple = 1;
  arr.forEach((element) => {
    if (element > 0) {
      multiple *= element;
    }
  });
  return multiple;
};
console.log(multipleOfPositive(array));
// 10 Знайти найбільший серед елементів масиву, інші обнулити.
const zeroedOther = (arr) => {
  let max = arr[0];
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== max) {
      arr[i] = 0;
    }
  }
  return arr;
};
console.log(zeroedOther(array));
