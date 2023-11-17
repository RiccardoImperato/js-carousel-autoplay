'use strict'

/* Funzioni */

function autoPlay() {

    domThumbItem[currentThumb].classList.remove('thumb-active');
    domItem[currentslide].classList.remove('active');

    if (currentslide === domItem.length - 1 && currentThumb === domThumbItem.length - 1) {
        currentslide = 0;
        currentThumb = 0;
    }
    else {
        currentThumb++;
        currentslide++;
    }

    domThumbItem[currentThumb].classList.add('thumb-active');
    domItem[currentslide].classList.add('active');
}

/*/ Funzioni */

// Programma

// Auto play
let myFn;

const play = document.querySelector('.start');
const stop = document.querySelector('.stop');

play.addEventListener("click", function () {
    myFn = setInterval(autoPlay, 3000);
})

stop.addEventListener("click", function () {
    clearInterval(myFn);
})



// Array con immagini fornite
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

// rimuovo il markup statico, creo gli elementi nel DOM e vi appendo le immagini, usando un ciclo for e delle condizioni
const items = document.querySelector('.items');
let currentslide = 0;

// Frecce
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let item = 0;

// Markup
for (let i = 0; i < images.length; i++) {
    item = document.createElement('div');
    item.classList.add('item');
    // Classe active per visualizzare le immagini
    if (i === currentslide) {
        item.classList.add('active');
    }

    // Immagini
    const img = document.createElement('img');
    img.src = `img/${images[i]}`;
    img.alt = `Landscape ${images[i]}`;
    item.append(img);
    items.append(item);
}

// Node list
const domItem = document.querySelectorAll('.item');
console.log(domItem);

// Thumbnail

// Selezione elemento .list
const thumb = document.querySelector('.list');

let currentThumb = 0;
let element = 0;

for (let i = 0; i < images.length; i++) {
    // Contenitore nel DOM
    element = document.createElement('div');
    element.classList.add('thumb-item');
    thumb.append(element);

    // Layer
    const layer = document.createElement('div');
    element.append(layer);
    layer.classList.add('layer');

    if (i === currentThumb) {
        element.classList.add('thumb-active');

    }


    // Immagini
    const img = document.createElement('img');
    img.src = `img/${images[i]}`;
    img.alt = `Landscape ${images[i]}`;
    element.append(img);
}

// Node list
const domThumbItem = document.querySelectorAll('.thumb-item');
console.log(domThumbItem);






// aggiugo un evento al click dell'utente selle frecce in modo da poter scorrere le immagini 
prev.addEventListener("click", function () {

    domThumbItem[currentThumb].classList.remove('thumb-active');
    domItem[currentslide].classList.remove('active');

    if (currentslide === 0 && currentThumb === 0) {

        currentslide = domItem.length - 1;
        currentThumb = domThumbItem.length - 1;
    }
    else {
        currentThumb--;
        currentslide--;
    }

    domThumbItem[currentThumb].classList.add('thumb-active');
    domItem[currentslide].classList.add('active');


})

next.addEventListener("click", function () {

    domThumbItem[currentThumb].classList.remove('thumb-active');
    domItem[currentslide].classList.remove('active');


    if (currentslide === domItem.length - 1 && currentThumb === domThumbItem.length - 1) {

        currentslide = 0;
        currentThumb = 0;
    }
    else {
        currentThumb++;
        currentslide++;
    }


    domThumbItem[currentThumb].classList.add('thumb-active');
    domItem[currentslide].classList.add('active');

})
