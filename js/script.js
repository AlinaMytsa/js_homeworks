'use strict';

const firstOperand = prompt('Enter the first operand.');
const secondOperand = prompt('Enter the second operand.');
const condition = isNaN(firstOperand) || isNaN(secondOperand) || firstOperand === null || secondOperand === null;

if (condition) {
    alert('Error: You have entered a non-numeric value or skipped the input.');
} else {
    console.log(`Приклад для складання: "Результат: ${+firstOperand} + ${secondOperand} = ${+firstOperand+(+secondOperand)}"`);
    console.log(`Приклад для віднімання: "Результат: ${firstOperand} - ${secondOperand} = ${firstOperand-secondOperand}"`);
    console.log(`Приклад для множення: "Результат: ${firstOperand} * ${secondOperand} = ${firstOperand*secondOperand}"`);
    console.log(`Приклад для ділення: "Результат: ${firstOperand} / ${secondOperand} = ${firstOperand/secondOperand}"`);
}

