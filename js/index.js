'use strict';

const appendHTMLElements = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.append(elementToAppend);
};

const generateTable = () => {
  const tableSize = 10;
  const table = document.createElement('table');
  table.className = 'table';
  const tbody = document.createElement('tbody');
  table.append(tbody);

  for (let i = 1; i <= tableSize; i++) {
    const tr = document.createElement('tr');

    for (let b = 1; b <= tableSize; b++) {
      const td = document.createElement('td');
      td.innerHTML = `${b}`;
      tr.append(td);
    }
    tbody.append(tr);
  }
  return table;
};

appendHTMLElements(document.body, generateTable());
