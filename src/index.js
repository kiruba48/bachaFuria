import { cursor, cursorHover } from './utils';
import LocomotiveScroll from 'locomotive-scroll';
import barba from '@barba/core';



// Promise.all([preloadImages('.tiles__line-img')]).then(() => {
//   // Remove loader (loading class)
//   document.body.classList.remove('loading');

//   // Initialize the Locomotive scroll
//   const scroll = new LocomotiveScroll({
//       el: document.querySelector('[data-scroll-container]'),
//       smooth: true
//   });
// });  

function locomotive() {
   // Initialize the Locomotive scroll
   const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
}

locomotive();


// Page Transition
barba.init({
  views: [
    {
      namespace: 'home'
    },
    {
      namespace: 'about'
    },
    {
      namespace: 'gallery'
    }
  ]
})



// cursor animation
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", cursorHover);

// // // Scroll animation in About page
// animateScroll();


