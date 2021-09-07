'use strict';
const menu = document.getElementById('menu');
let menuEnlaces = document.getElementById('menuEnlaces');

menu.addEventListener('click', () => {
  menuEnlaces.classList.toggle('circulo-final');
});