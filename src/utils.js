import gsap from 'gsap/gsap-core';
import LocomotiveScroll from 'locomotive-scroll';
import barba from '@barba/core';


/****************** *******************/
const imagesLoaded = require('imagesloaded');

const preloadImages = (selector = img) => {
  return new Promise(resolve => {
    imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve)
  })
}
let scroll;
function locomotive() {
  // Initialize the Locomotive scroll
   scroll = new LocomotiveScroll({
   el: document.querySelector('[data-scroll-container]'),
   smooth: true
});
}
/****************** *******************/

/****************** *******************/
// Navigation bar
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

function navToggleBar() {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

if(containerHeight === 0) {
  linksContainer.style.height = `${linksHeight}px`;
} else {
  linksContainer.style.height = 0;
}
}
// Fixed navBar 
const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

function fixedNavBar() {
  const scrollHeight = window.pageYOffset;
  
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }

  if(scrollHeight > 1000) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');

  }
}
// animating nav links slide
function navAnim() {
  const burger = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.links');
  const navLinks = document.querySelectorAll('.links a');
  

  burger.addEventListener('click', () => {
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    })
  })
}
/****************** *******************/

/****************** *******************/
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
/****************** *******************/

/****************** *******************/
// Footer date update
function footerDate() {
  const date = document.querySelector('#date');
  date.innerHTML = new Date().getFullYear();
}
/****************** *******************/

/****************** Barba page Transition *******************/
function pageTransition() {
  // barba.init({
  //   views: [
  //     {
  //       namespace: "home",
  //       beforeEnter() {
  //         showTiles();
  //       }
  //     },
  //     {
  //       namespace: "about"
  //     }
  //   ]
  // })
}




export { preloadImages, cursor, cursorHover, footerDate, navToggleBar, fixedNavBar, locomotive, navAnim, pageTransition };






// Promise.all([preloadImages('.tiles__line-img')]).then(() => {
//   // Remove loader (loading class)
//   document.body.classList.remove('loading');

//   // Initialize the Locomotive scroll
//   const scroll = new LocomotiveScroll({
//       el: document.querySelector('[data-scroll-container]'),
//       smooth: true
//   });
// }); 
