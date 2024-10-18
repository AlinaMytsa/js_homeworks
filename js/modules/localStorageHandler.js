export const saveDataToLocalStorage = (data) => {
  localStorage.setItem('todoItems', JSON.stringify(data));
};

export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem('todoItems');
  return data ? JSON.parse(data) : [];
};
