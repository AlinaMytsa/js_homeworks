'use strict';

const firstNum = prompt('Введіть перше число для визначення середнього арифметичного.');
const secondNum = prompt('Введіть друге число.');
const thirdNum = prompt('Введіть третє число.');
const condition = isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum) || firstNum === null || secondNum === null || thirdNum === null;

if (condition) {
    alert('Введіть три числа для вирахування середнього арифметичного.')
} else {
    const arithmeticMean = (Number(firstNum) + Number(secondNum) + Number(thirdNum)) / 3;
    alert(`Середнє арифметичне чисел ${firstNum}, ${secondNum} і ${thirdNum} - це ${arithmeticMean}.`);
}