'use strict';

const hours = prompt('Введіть кількість годин');

if (isNaN(hours) || hours === null) {
    alert('Введіть кільість годин.');
} else {
    const seconds = Number(hours) * 3600;
    alert(`Ця кількість годин: ${hours} має таку кількість секунд: ${seconds}`);
}