import { cursor, cursorHover, footerDate, navToggleBar, fixedNavBar, navAnim } from './utils';
import barba from '@barba/core';
import { testimonials } from './js/testimonial';
import { revealSections } from './js/revealSections';
import { enterAnimation, leaveAnimation, onceAnimation } from './js/transitionAnim';
import gsap from 'gsap/gsap-core';




// locomotive();


/****************** *******************/

gsap.registerPlugin(ScrollTrigger);

const app = () => {
  footerDate();
  // showTiles();
  // Animating nav slide
  navAnim(); //Links slide animation
}
app();


let controller;
let tilesScene;
let t1;


function showTiles() {
  controller = new ScrollMagic.Controller();
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0, 0);
      
  gsap.utils.toArray('.tiles').forEach((section, index) => {
        const tilesSection = section.querySelector('.tiles__line');
        const [x, xEnd] = (index % 2) ? ['100%', (tilesSection.scrollWidth - section.offsetWidth) * -1] : [tilesSection.scrollWidth * -1, 0];
        t1 = gsap.fromTo(tilesSection, { x }, { x:xEnd });
        tilesScene = new ScrollMagic.Scene({
          triggerElement:section,
          duration: 1000,
          offset: -100
  })
  .setTween(t1)
  // .addIndicators({colorStart: 'white', colorTrigger: 'white', name: 'tiles'})
  .addTo(controller)

  })

}


/****************** *******************/

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

/****************** *******************/

// cursor animation
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", cursorHover);

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

    }
  ],
  transitions: [
    {
      name: 'custom-transition',
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
    //   name: 'home js init',
    //   to: {
    //     namespace: ['home']
    //   },
    //   once() {
    //     testimonials();
    //     console.log('once')
    //   },
    //   leave(data) {
    //     console.log('leave')
    //     let done = this.async();
    //     const tl = gsap.timeline({defaults: {ease: "power2.inOut"}});
    //     tl.fromTo(data.current.container, { opacity: 1 }, { opacity: 0, duration: 1 });
    //     tl.fromTo('.swipe', {x: '-100%'}, { x: '0%', duration: 0.75, onComplete: done }, "-=0.5");
    //   },
    //   enter(data) {
    //     console.log('enter')

    //     testimonials();
    //     let done = this.async();
    //     //Scroll to the top
    //     window.scrollTo(0, 0);
    //     const tl = gsap.timeline({ defaults: {ease: "power2.inOut"} });
    //     tl.fromTo('.swipe', {x: '0%'}, { x: '-100%', stagger: 0.5, duration: 1, onComplete: done });

    //     tl.fromTo(data.next.container, { opacity: 0 }, { opacity: 1, duration: 0 })

    //   }
    // }
   
  ]
})


/****************** *******************/

/****************** *******************/
