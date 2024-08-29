'use strict';

// 1
for (let i = 10; i <= 20; i++) {
  console.log(`Вивести на сторінку в один рядок через кому числа від 10 до 20: ${i}`);
}
// 2
for (let i = 10; i <= 20; i++) {
  console.log(`Вивести квадрати чисел від 10 до 20: ${i}, ${i ** 2}`);
}
// 3
for (let i = 1; i <= 10; i++) {
  console.log(`Вивести таблицю множення на 7:7 * ${i} = ${i * 7}`);
}
// 4
console.log('Знайти суму всіх цілих чисел від 1 до 15.');
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
  console.log(sum);
}
// 5
console.log('Знайти добуток усіх цілих чисел від 15 до 35.');
let sum2 = 0;
for (let i = 15; i <= 35; i++) {
  sum2 += i;
  console.log(sum2);
}
// 6
console.log('Знайти середнє арифметичне всіх цілих чисел від 1 до 500');
let sum3 = 0;
for (let i = 1; i <= 500; i++) {
  sum3 += i;
  const result = sum3 / i;
  console.log(result);
}
// 7
console.log('Вивести суму лише парних чисел в діапазоні від 30 до 80');
let sum4 = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum4 += i;
    console.log(sum4);
  }
}
// 8
console.log('Вивести всі числа в діапазоні від 100 до 200 кратні 3.');
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
// 9
console.log('Дано натуральне число. Знайти та вивести на сторінку всі його дільники.');
const num = prompt('введіть число');
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}
// 10
console.log('Визначити кількість його парних дільників.');
let count = 0;
for (let i = 0; i <= num; i++) {
  if (num % i === 0 && i % 2 === 0) {
    count++;
  }
}
console.log(count);
// 11
console.log('Знайти суму його парних дільників.');
let count2 = 0;
for (let i = 0; i <= num; i++) {
  if (num % i === 0 && i % 2 === 0) {
    count2 += i;
  }
}
console.log(count2);
// 12
console.log('Надрукувати повну таблицю множення від 1 до 10.');
for (let i = 1; i <= 10; i++) {
  console.log(`Таблиця множення на 1:  1 * ${i} = ${1 * i}`);
}
for (let i = 1; i <= 10; i++) {
  console.log(`Таблиця множення на 2:  2 * ${i} = ${2 * i}`);
}
for (let i = 1; i <= 10; i++) {
  console.log(`Таблиця множення на 3:  3 * ${i} = ${3 * i}`);
}
for (let i = 1; i <= 10; i++) {
  console.log(`Таблиця множення на 4:  4 * ${i} = ${4 * i}`);
}
for (let i = 1; i <= 10; i++) {
  console.log(`Таблиця множення на 5:  5 * ${i} = ${5 * i}`);
}
for (let i = 1; i <= 10; i++) {
  console.log(`Таблиця множення на 6:  6 * ${i} = ${6 * i}`);
}
for (let i = 1; i <= 10; i++) {
  console.log(`Таблиця множення на 7:  7 * ${i} = ${7 * i}`);
}
for (let i = 1; i <= 10; i++) {
  console.log(`Таблиця множення на 8:  8 * ${i} = ${8 * i}`);
}
for (let i = 1; i <= 10; i++) {
  console.log(`Таблиця множення на 9:  9 * ${i} = ${9 * i}`);
}
for (let i = 1; i <= 10; i++) {
  console.log(`Таблиця множення на 10:  10 * ${i} = ${10 * i}`);
}
