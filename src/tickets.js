'use strict';
import { openModal, closeModal, escCloseModal, labelAnimation } from './js/contactModal';
import { showCart, closeCart } from './js/cart';
import { productDisplay } from './js/ticketsDisplay';
import { formValidation } from './js/fromValidation';
import { products, ui, Storage } from './js/products';
import { navHover, stickyNav, obsOptions } from './js/fixedNavBar';
import { cursor, footerDate, navAnim, navToggleBar } from './utils';


const app = () => {
  footerDate();
  // Animating nav slide
  navAnim(); //Links slide animation
  formValidation();
  ui.setupAPP()
  ui.cartLogic()
  productDisplay()
}
app();

// cursor animation
window.addEventListener("mousemove", cursor);




/****************** Shopping Cart *******************/


const cartBtnMobile = document.querySelector('.cart-btn--mobile');
const cartBtnDesk = document.querySelector('.cart-btn--desk');
const closeCartBtn = document.querySelector('.close-cart');


cartBtnDesk.addEventListener('click', showCart);
cartBtnMobile.addEventListener('click', showCart);
closeCartBtn.addEventListener('click', closeCart);

/****************** Shopping Cart *******************/

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


/****************** Contact Model *******************/

/****************** Nav Bar *******************/

// Navigation bar
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', navToggleBar) // Mobile view nav toggle


// Fixed navBar 
const links = document.querySelector('.links');
const header = document.querySelector('#home');
const navBar = document.getElementById('nav');

// Fixed NavBar Intersection Observer
const headerObserver = new IntersectionObserver(stickyNav, obsOptions);
headerObserver.observe(header);

// Menu fade out Animation
links.addEventListener('mouseover', (e) => navHover(e, 0.5))

links.addEventListener('mouseout', (e) => navHover(e, 1))

/****************** Nav Bar *******************/
