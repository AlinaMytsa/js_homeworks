import { saveDataToLocalStorage } from './localStorageHandler.js';

export const submitHandler = (event, data, createTodoItem, todoItemsContainer) => {
  event.preventDefault();

  const inputs = document.querySelectorAll('input, textarea');
  const dataOfInputs = Array.from(inputs).reduce((acc, { name, value }) => {
    acc[name] = value;
    return acc;
  }, {});

  data.push(dataOfInputs);

  const todoItemElement = createTodoItem(dataOfInputs);
  todoItemsContainer.prepend(todoItemElement);

  saveDataToLocalStorage(data);

  event.target.reset();
};

export const inputHandler = (data) => {
  // const inputs = document.querySelectorAll('input, textarea');
  // const dataOfInputs = Array.from(inputs).reduce((acc, { name, value }) => {
  //   acc[name] = value;
  //   return acc;
  // }, {});

  // data.push(dataOfInputs);
  saveDataToLocalStorage(data);
};
