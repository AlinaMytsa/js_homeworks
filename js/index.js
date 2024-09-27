'use strict';

const docBody = document.body;
const table = () => {
  for (let i = 1; i <= 100; i++) {
    const row = document.createElement('tr');
    const desc = document.createElement('td');
    row.append(desc);
    const description = document.createTextNode(`${i}`);
    desc.append(description);
    docBody.append(row);
  }
};
table();
