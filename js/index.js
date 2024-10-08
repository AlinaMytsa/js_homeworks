'use strict';

const appendElement = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.append(elementToAppend);
};

const generateList = (listType, array) => {
  if (!listType || typeof listType !== 'string') throw new Error('listType arg must be a list type');
  if (!array || !Array.isArray(array)) throw new Error('array arg must be an array');

  const list = document.createElement(listType);

  for (const item of array) {
    const listItem = document.createElement('li');
    appendElement(list, listItem);

    if (Array.isArray(item)) {
      appendElement(listItem, generateList(listType, item));
    } else {
      listItem.innerHTML = item;
    }
    appendElement(list, listItem);
  }
  return list;
};
const result = generateList('ol', [1, 2, 3, [4, 5, 6]]);
appendElement(document.body, result);
