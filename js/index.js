'use strict';

const minBalance = 2000;

// @param arr = array of object with balance and phone numbers
// @param minimalBalance = number
// @param keys = { balance: 'balance field key', phone: 'phone field key'}

const arrayOfUsersWithMinimalBalance = (
  arr,
  minimalBalance = 0,
  keys = {
    balance: 'balance',
    phone: 'phone',
  },
) => {
  if (!Array.isArray(arr)) return [];
  if (typeof minimalBalance !== 'number') return [];
  const results = [];

  arr.forEach((item) => {
    if (minimalBalance < 0) {
      results.push(item[keys.phone]);
    }
    const normalizedBalance = Number(removeSymbols(item[keys.balance], ['$', ',']));
    if (normalizedBalance > minBalance) results.push(item[keys.phone]);
  });

  return results;
};
console.log(arrayOfUsersWithMinimalBalance(users, minBalance));

const averageBalance = (arr, balanceKey = 'balance') => {
  if (!Array.isArray(arr)) throw new Error('arr must be an array');
  if (typeof balanceKey !== 'string') throw new Error('balanceKey must be a string');

  const sum = arr.reduce((accum, item) => {
    const normalizedBalance = Number(removeSymbols(item[balanceKey], ['$', ',']));
    const currentBalance = accum + normalizedBalance;
    return Number(currentBalance.toFixed(2));
  }, 0);

  return sum;
};

console.log(averageBalance(users));
