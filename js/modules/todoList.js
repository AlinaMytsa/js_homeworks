import createTodoItem from './createToDoItem.js';
import { submitHandler, inputHandler } from './getHandlers.js';
import { getDataFromLocalStorage } from './localStorageHandler.js';

const initToDoList = () => {
  const form = document.querySelector('[data-todo-form]');
  const data = getDataFromLocalStorage();
  const todoItemsContainer = document.querySelector('#todoItems');

  data.forEach((todoItem) => {
    const todoItemElement = createTodoItem(todoItem);
    todoItemsContainer.prepend(todoItemElement);
  });

  form.addEventListener('submit', (event) => submitHandler(event, data, createTodoItem, todoItemsContainer));
  form.addEventListener('change', () => inputHandler(data));
};
export default initToDoList;
