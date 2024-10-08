'use strict';

const appendElement = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.append(elementToAppend);
};

const generateList = (array) => {
  if (!array || !Array.isArray(array)) throw new Error('array arg must be an array');

  const list = document.createElement('ul');
  appendElement(document.body, list);

  for (const item of array) {
    const listItem = document.createElement('li');
    appendElement(list, listItem);

    if (Array.isArray(item)) {
      appendElement(listItem, generateList(item));
    } else {
      listItem.innerHTML = item;
    }
    appendElement(list, listItem);
  }
  return list;
};
console.log(generateList([1, 2, 3, [4, 5, 6]]));
