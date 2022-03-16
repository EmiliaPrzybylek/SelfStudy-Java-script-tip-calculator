'use strict';

const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');


const showBills = () => {

    if (price.value == ''|| people.value == '' || tip.value == 0) {
        error.textContent = 'Wypełnij wszystkie pola!';
        costInfo.style.display = 'none';
    } else {
        error.textContent = '';
        countBills();
    }
}

const countBills = () => {
    const priceValue = parseFloat(price.value);
    const peopleValue = parseInt(people.value);
    const tipValue = parseFloat(tip.value);

    const sum = (priceValue + priceValue * tipValue) / peopleValue;

    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2);
}

countBtn.addEventListener('click', showBills);

