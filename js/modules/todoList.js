import createTodoItem from './createToDoItem.js';
import { submitHandler, inputHandler } from './getHandlers.js';

const initToDoList = () => {
  const form = document.querySelector('[data-todo-form]');
  const data = [];
  const todoItemsContainer = document.querySelector('#todoItems');

  form.addEventListener('submit', (event) => submitHandler(event, data, createTodoItem, todoItemsContainer));
  form.addEventListener('change', () => inputHandler(data));
};
export default initToDoList;
