'use strict';

const LIST_TYPES = {
  UL: 'ul',
  OL: 'ol',
  MENU: 'menu',
};
const appendElement = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.append(elementToAppend);
};

const generateList = (listItems, listType = LIST_TYPES.UL) => {
  if (!Object.values(LIST_TYPES).includes(listType)) throw new Error('listType arg must be a list type');
  if (!listItems || !Array.isArray(listItems)) throw new Error('array arg must be an array');
  if (!listItems.length) throw new Error('the length of the array must not be equal to 0');

  const listElement = document.createElement(listType);

  listItems.forEach((item) => {
    const listItemElement = document.createElement('li');
    appendElement(listElement, listItemElement);

    if (Array.isArray(item)) {
      appendElement(listItemElement, generateList(item, listType));
    } else {
      listItemElement.innerHTML = item;
    }
    appendElement(listElement, listItemElement);
  });
  return listElement;
};
const result = generateList([1, 2, 3, [4, 5, 6]], 'ol');
appendElement(document.body, result);
