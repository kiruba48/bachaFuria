import gsap from 'gsap/gsap-core';
import { doc } from 'prettier';

const imagesLoaded = require('imagesloaded');

const preloadImages = (selector = img) => {
  return new Promise(resolve => {
    imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve)
  })
}

const mouse = document.querySelector(".cursor");
const mouseText = mouse.querySelector('span');
const cursor = (e) => {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

const cursorHover = (e) => {
  const item = e.target;
  if(item.classList.contains('nav') || item.classList.contains('fa')) {
    mouse.classList.add('nav--active');
  } else {
    mouse.classList.remove('nav--active');
  }
// Explore
  if(item.classList.contains('explore')) {
    mouse.classList.add('explore--active');
    mouseText.innerText = 'Tap';
  } else {
    mouse.classList.remove('explore--active');
    mouseText.innerText = '';
  }
}

export { preloadImages, cursor, cursorHover };
