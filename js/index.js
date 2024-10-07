'use strict';

const appendElements = (parentElement, elementToAppend) => {
  if (!parentElement || !elementToAppend) throw new Error('parentElement & elementToAppend should be a HTMLElement instance');
  parentElement.append(elementToAppend);
};

const createWrapperElem = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper d-flex gap-3';
  return wrapper;
};

const wrapperElem = createWrapperElem();
appendElements(document.body, wrapperElem);

const createInput = () => {
  const input = document.createElement('input');
  input.type = 'text';
  return input;
};

const input = createInput();
appendElements(wrapperElem, input);

const createAsideDiv = () => {
  const div = document.createElement('div');
  div.className = 'aside-div';
  div.innerHTML = 'hello world';
  return div;
};

const asideDiv = createAsideDiv();
appendElements(wrapperElem, asideDiv);

const addingStyles = (element, selector) => {
  const elementApplyStylesTo = document.querySelector(selector);

  input.addEventListener('focus', () => {
    elementApplyStylesTo.setAttribute('style', 'display: block;');
  });

  input.addEventListener('blur', () => {
    elementApplyStylesTo.setAttribute('style', 'display: none;');
  });
};

const styles = addingStyles(asideDiv, '.aside-div');
appendElements(asideDiv, styles);
