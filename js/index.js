'use strict';

const user = {
  firstName: 'Alina',
  lastName: 'Mytsa',
};

const getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
const apply = function (func, context, ...args) {
  let result = null;
  context.func = func;
  result = context.func(...args);
  delete context.func;

  return result;
};

const bind = function (func, context, args = []) {
  if (!func) return undefined;

  return function () {
    return apply(func, context, ...args);
  };
};

const bindedGetFullName = bind(getFullName, user);
console.log(bindedGetFullName());
