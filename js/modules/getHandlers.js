export const submitHandler = (event, data, createTodoItem, todoItemsContainer) => {
  event.preventDefault();

  const lastItem = data.at(-1);
  const todoItemElement = createTodoItem(lastItem);
  todoItemsContainer.prepend(todoItemElement);

  event.target.reset();
};

export const inputHandler = (data) => {
  const inputs = document.querySelectorAll('input, textarea');
  const dataOfInputs = Array.from(inputs).reduce((acc, { name, value }) => {
    acc[name] = value;
    return acc;
  }, {});

  data.push(dataOfInputs);
};
