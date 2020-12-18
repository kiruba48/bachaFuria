import { cursor, cursorHover, footerDate, navToggleBar, fixedNavBar, navAnim } from './utils';
import barba from '@barba/core';
import { testimonials } from './js/testimonial';
import { revealSections } from './js/revealSections';
import { enterAnimation, leaveAnimation, onceAnimation } from './js/transitionAnim';
import { showTiles } from './js/tilesAnimation';
import { formValidation } from './js/fromValidation';
import { Products, UI, Storage } from './js/products';
import gsap from 'gsap/gsap-core';




// let scroll;
// function locomotive(container) {
//   // Initialize the Locomotive scroll
//   if(scroll) {
//     scroll.destroy()
//   }
//   scroll = new LocomotiveScroll({
//     el: container.querySelector('[data-scroll-container]'),
//     smooth: true
//   });
// }


/****************** *******************/

// gsap.registerPlugin(ScrollTrigger);

const app = () => {
  footerDate();
  // showTiles();
  // Animating nav slide
  navAnim(); //Links slide animation
  formValidation();
}
app();

/****************** *******************/

/****************** Shopping Cart *******************/

const cartBtnMobile = document.querySelector('.cart-btn--mobile');
const cartBtnDesk = document.querySelector('.cart-btn--desk');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
// products part
const productDOM = document.querySelector('.product-center');

// cart data
let cart = [];

// Getting products
// barba.hooks.once ((data) => {
//   const ui = new UI();
//   const products = new Products();
//    // Fetch the products
//   products.fetchProducts().then(data => console.log(data))
 
// })




document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  const products = new Products();

  // Fetch the products
  products.fetchProducts().then(data => console.log(data))
                        
})








/****************** *******************/
const links = document.querySelector('.links');
const navToggle = document.querySelector('.nav-toggle');
const header = document.querySelector('#home');
const navBar = document.getElementById('nav');


// Navigation bar
navToggle.addEventListener('click', navToggleBar) // Mobile view nav toggle

// Fixed navBar 
// window.addEventListener("scroll",fixedNavBar);
const stickyNav = function(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) navBar.classList.add("fixed-nav");
  else navBar.classList.remove("fixed-nav");
}

const obsOptions = {
  root: null,
  threshold: 0,
}

const headerObserver = new IntersectionObserver(stickyNav, obsOptions);
headerObserver.observe(header);

// Menu fade out
const navHover = function(e, opacity) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.links').querySelectorAll('.nav__link');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = opacity;
    })
  }

}
links.addEventListener('mouseover', (e) => navHover(e, 0.5))

links.addEventListener('mouseout', (e) => navHover(e, 1))


/****************** *******************/

/****************** *******************/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelector('.btn--show-modal');
const labels = document.querySelectorAll('.label');
const contactInputs = document.querySelectorAll('.input');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// label animation
labels.forEach(label => {
  
  const innerText = label.innerHTML.split('')
                                   .map((letter, index) => `<span style = "transition-delay:${index * 50}ms">${letter}</span>`)
                                   .join('')
                         
  label.innerHTML = innerText;
 
})

// contactInputs.forEach(input => {
//   console.log(input.value)
//   if(input.value === '') {
//     const parent = input.parentElement;
//     const [children1, children2] = parent.children;
//     console.log(children2)
//     const span = children2.children;
//     console.log(span.length)
//     // span.forEach(s => {
//     //   s.style.transform = `translateY(-30px)`
//     // })
//   }
// })


/****************** *******************/

// cursor animation
window.addEventListener("mousemove", cursor);
// window.addEventListener("mouseover", cursorHover);

/****************** *******************/
barba.init({
  views: [
    {
      namespace: "home",
      beforeEnter() {
       showTiles();
       testimonials();
       revealSections();
       
      },
      beforeLeave() {
        tilesScene.destroy();
        controller.destroy();
      },
      afterEnter() {
        
      }
    },
    {
      namespace: "about",

    },
   
  ],
  transitions: [
    {
      name: 'general-transition',
      once({current, next}) {
        onceAnimation();
        
      },
      leave({current, next}) {
        let done = this.async();
      
        leaveAnimation(current.container, done);
      },
      enter({current, next}) {
        let done = this.async();
        
        enterAnimation(next.container, done);

      }
    },
    // {
    //   name: 'gallery-transition',
    //   to: {
    //     namespace: ['gallery'],
    //     beforeEnter({ next }) {

    //           // destroy the previous scroll
    //           scroll.destroy();
        
    //           // init LocomotiveScroll regarding the next page
    //           locomotive(next.container);
    //         },
    //     beforeLeave() {
    //           scroll.destroy();
    //         },
    //   }
    // }
   
  ]
})


/****************** *******************/

/****************** *******************/
