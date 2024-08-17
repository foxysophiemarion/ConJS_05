'use strict';

// HOMEWORK

const randomCofeeJSON = JSON.parse(randomCofee);
console.log(randomCofeeJSON);

const boxElements = document.querySelector('.box');

randomCofeeJSON.forEach(element => {
	boxElements.insertAdjacentHTML('beforeend', `
<div class="box__item">
<h3 class="box__name">${element.name}</h3>
<img class="box__img" src="${element.file}">
<p class="box__price">${element.price} рублей</p>
</div>
`)
});

