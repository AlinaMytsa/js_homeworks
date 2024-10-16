'use strict';

(function () {
  const form = document.querySelector('[data-todo-form]');
  const data = [];

  const todoItemsContainer = document.querySelector('#todoItems');

  const createTodoItem = ({ title, description }) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';
    wrapper.innerHTML = `
              <div class="taskWrapper">
                  <div class="taskHeading">${title}</div>
                  <div class="taskDescription">${description}</div>
              </div>
    `;

    return wrapper;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const lastItem = data.at(-1);
    const todoItemElement = createTodoItem(lastItem);
    todoItemsContainer.prepend(todoItemElement);

    event.target.reset();
  };

  const inputHandler = () => {
    const inputs = document.querySelectorAll('input, textarea');
    const dataOfInputs = Array.from(inputs).reduce((acc, { name, value }) => {
      acc[name] = value;
      return acc;
    }, {});
    data.push(dataOfInputs);
    console.log(data);
  };

  form.addEventListener('submit', submitHandler);
  form.addEventListener('change', inputHandler);
}());
