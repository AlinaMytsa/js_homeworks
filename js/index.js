'use strict';

const mainFunction = (callback) => {
  const firstNum = +prompt('введіть перше число');
  const secondNum = +prompt('введіть друге число');
  callback(firstNum, secondNum);
};

const exponentiation = (firstNumber, secondNumber) => {
  const result = firstNumber ** secondNumber;
  return alert(`Результат зведення ${firstNumber} в ступінь ${secondNumber} дорівнює ${result}`);
};

mainFunction(exponentiation);

// Додаткові завдання
// Callback функція multiplay
const multiplay = (firstNumber, secondNumber) => {
  const result = firstNumber * secondNumber;
  return alert(`Результат множення ${firstNumber} на ${secondNumber} дорівнює ${result}`);
};

mainFunction(multiplay);

// Callback функція division
const division = (firstNumber, secondNumber) => {
  const result = firstNumber / secondNumber;
  return alert(`Результат ділення числа ${firstNumber} на число ${secondNumber} дорівнює ${result}`);
};

mainFunction(division);

// Callback функція modulo
const modulo = (firstNumber, secondNumber) => {
  const result = firstNumber % secondNumber;
  return alert(`Залишок ділення числа ${firstNumber} від числа ${secondNumber} дорівнює ${result}`);
};

mainFunction(modulo);
