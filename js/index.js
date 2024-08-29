'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const generateKey = function (length, characters) {
  let key = '';
  for (let i = 0; i <= length; i++) {
    const indexOfCharacter = Math.floor(Math.random() * characters.length);
    key += characters[indexOfCharacter];
  }
  return key;
};
const generateKeyResult = generateKey(16, characters);
console.log(generateKeyResult);
