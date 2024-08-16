'use strict';
const yearOfBirth = prompt('Введіть ваш рік народження');

if (Number.isNaN(yearOfBirth) || yearOfBirth === null) {

    alert('Шкода, що ви не захотіли ввести свій рік народження.');

} else {

    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    let city = prompt('В якому місті ви живете?');
    if (city === null || city === '') {
        alert('Шкода, що ви не захотіли ввести своє місто.');
    } else if (city.toLowerCase() === 'київ') {
        city = 'Ви живете в столиці України - Києві';
    } else if (city.toLowerCase() === 'вашингтон') {
        city = 'Ви живете в столиці США - Вашингтоні'
    } else if (city.toLowerCase() === 'лондон') {
        city = 'Ви живете в столиці Великобританії - Лондоні'
    } else {
        `Ви живете в місті ${city}`
    }


    let favSport = prompt('Який ваш улюблений вид спорту?');

    if (favSport === null || favSport === ''){
        alert('Шкода, що ви не захотіли ввести свій улюблений вид спорту.');
    } else if (favSport === 'волейбол') {
        favSport = 'Круто! Хочеш стати , як Бруно Резенде?';
    } else if (favSport === 'баскетбол') {
        favSport = 'Круто! Хочеш стати , як Майкл Джордан?';
    } else if (favSport === 'плавання') {
        favSport = `Круто! Хочеш стати , як Ян Торп?`;
    } else {
        favSport = `Ваш улюблений вид спорту - ${favSport}`
    }

    alert(`Ваш вік - ${age}, '\n' ${city}, '\n' ${favSport}`)
}

