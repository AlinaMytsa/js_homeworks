'use strict';

(function () {
// 1 Напишіть код, який виведе кожен елемент списку в консоль.
  const listItems = document.getElementsByTagName('li');
  for (const item of listItems) {
    console.log(item);
  }

  // 2 Витягніть всі атрибути, які є в тегі ul, переберіть їх (for..of) і запишіть значення кожного атрибута в масив — виведіть цей масив у консоль.
  const list = document.querySelector('ul');
  const arrOfAttributesValue = [];
  const namesOfAttributes = [];

  for (const attr of list.attributes) {
    arrOfAttributesValue.push(attr.value);
    namesOfAttributes.push(attr.name);
  }
  console.log(arrOfAttributesValue);

  // 3 Також запишіть в окремий масив кожне ім'я атрибута — виведіть масив у консоль.
  console.log(namesOfAttributes);

  // 4 За допомогою JavaScript змініть текст у останньому тегі li на «Привіт, мене звуть» + Ваше ім’я.
  list.lastElementChild.innerHTML = 'привіт, мене звати Aліна';
  console.log(list.lastElementChild);

  // 5 Додайте першому елементу li атрибут 'data-my-name' зі значенням, яке містить Ваше ім’я.
  const firstItem = list.firstElementChild;
  firstItem.setAttribute('data-my-name', 'Alina');
  console.log(firstItem);

  // 6 Видаліть у тега ul атрибут 'data-dog-tail'.
  list.removeAttribute('data-dog-tail');
  console.log(list);
}());
