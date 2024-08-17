'use strict'
const productsData = [
	{
		src: 'img.png',
		alt: 'img obj data',
		name: 'Название из object data',
		link: 'product.html',
		description: 'Описание из object data',
		price: '$10000',
	},
	{
		src: 'img2.png',
		alt: 'img obj data 2',
		name: 'Название из object data 2',
		link: 'product2.html',
		description: 'Описание из object data 2',
		price: '$20000',
	},
	{
		src: 'img3.png',
		alt: 'img obj data 3',
		name: 'Название из object data 3',
		link: 'product3.html',
		description: 'Описание из object data 3',
		price: '$30000',
	},
];


const poductBox = document.querySelector('.product-box');

productsData.forEach(productData => {
	const productEl = document.createElement('div');
	productEl.classList.add('product');

	const productImg = document.createElement('img');
	productImg.classList.add('product__img');
	productImg.src = productData.src;
	productImg.setAttribute('alt', productData.alt);

	const productContent = document.createElement('div');
	productContent.classList.add('product__content');


	const productLink = document.createElement('a');
	productLink.classList.add('product__name');
	productLink.href = productData.link;
	productLink.textContent = productData.name;


	const productText = document.createElement('p');
	productText.classList.add('product__text');
	productText.textContent = productData.description;


	const productPrice = document.createElement('p');
	productPrice.classList.add('product__price');
	productPrice.textContent = productData.price;

	productContent.appendChild(productLink);
	productContent.appendChild(productText);
	productContent.appendChild(productPrice);
	productEl.appendChild(productImg);
	productEl.appendChild(productContent);
	poductBox.appendChild(productEl);
});












