'use strict';
//1
const name = prompt('Введіть своє імʼя.');
const age = prompt('Введіть свій вік.');
const likesProgramming = confirm('Чи подобається вам програмувати?');
//2
console.log(name, age, likesProgramming);
console.log(`name: ${typeof name} type`);
console.log(`age: ${typeof age} type`);
console.log(`likesProgramming: ${typeof likesProgramming} type`);
//3
const greeting = `Привіт, ${name}!`;
alert(greeting);
//4
const numericAge = Number(age);
const nextAge = numericAge + 1;
console.log(nextAge);
//5
const isAdult = numericAge >= 18;
console.log(isAdult);


