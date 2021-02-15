'use strict';
import { cursor, cursorHover, footerDate, navToggleBar, fixedNavBar, navAnim } from './utils';
import barba from '@barba/core';
import { testimonials } from './js/testimonial';
import { revealSections } from './js/revealSections';
import { enterAnimation, leaveAnimation, onceAnimation } from './js/transitionAnim';
import { showTiles } from './js/tilesAnimation';
import { formValidation } from './js/fromValidation';
import { products, ui, Storage } from './js/products';
import { productDisplay } from './js/ticketsDisplay';
import { showCart, closeCart } from './js/cart';
import { openModal, closeModal, escCloseModal, labelAnimation } from './js/contactModal';
import { navHover, stickyNav, obsOptions } from './js/fixedNavBar';
import { calanderInit } from './js/calender';

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
  ui.setupAPP()
  ui.cartLogic()
}
app();

/****************** *******************/

/****************** Shopping Cart *******************/

const cartBtnMobile = document.querySelector('.cart-btn--mobile');
const cartBtnDesk = document.querySelector('.cart-btn--desk');
const closeCartBtn = document.querySelector('.close-cart');


cartBtnDesk.addEventListener('click', showCart);
cartBtnMobile.addEventListener('click', showCart);
closeCartBtn.addEventListener('click', closeCart);


/****************** *******************/
const links = document.querySelector('.links');
const navToggle = document.querySelector('.nav-toggle');
const header = document.querySelector('#home');
const navBar = document.getElementById('nav');


// Navigation bar
navToggle.addEventListener('click', navToggleBar) // Mobile view nav toggle


// Fixed NavBar Intersection Observer
const headerObserver = new IntersectionObserver(stickyNav, obsOptions);
headerObserver.observe(header);

// Menu fade out Animation
links.addEventListener('mouseover', (e) => navHover(e, 0.5))

links.addEventListener('mouseout', (e) => navHover(e, 1))


/****************** *******************/

/****************** Contact Model *******************/

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelector('.btn--show-modal');



btnsOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', escCloseModal);
// label animation
labelAnimation();





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
      //  ui.setupAPP();
      // productDisplay()
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
    {
      namespace: "events",
      beforeEnter() {
        calanderInit()
       },
    },
    {
      namespace: "tickets",
      beforeEnter() {
        productDisplay()
       },
       
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
    //   name: 'tickets-transition',
    //   to: {
    //     namespace: ['tickets'],
    //     after() {
    //       productDisplay()
    //         },
    //     // beforeEnter() {
    //     //   productDisplay()
              
    //     //     },
       
    //   }
    // }
   
  ]
})


/****************** *******************/

/****************** *******************/
