import { cursor, cursorHover, footerDate, navToggleBar, fixedNavBar, navAnim } from './utils';

gsap.registerPlugin(ScrollTrigger);


const app = () => {
  footerDate();
  // Animating nav slide
  navAnim(); //Links slide animation
}
app();

// Navigation bar
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', navToggleBar)

// Fixed navBar 
window.addEventListener("scroll",fixedNavBar)



const sliders = document.querySelectorAll('.slide');

let slideT1;
let pageTl;

function animateScroll() {

  sliders.forEach((slide, index, slides) => {
    const revealImg = slide.querySelector('.reveal-img');
    const img = slide.querySelector('img');
    const revealText = slide.querySelector('.reveal-text');

    slideT1 = gsap.timeline({
      defaults: {duration: 1, ease: "power2.inOut"},
      scrollTrigger: {
        trigger: slide,
        start: "top center-=200px",

      }
    })
    slideT1.fromTo(revealImg, {x: "0%"}, {x: "100%"});
    slideT1.fromTo(img, {scale: 2}, {scale: 1}, '-=1');
    slideT1.fromTo(revealText, {x: "0%"}, {x: "100%"}, '-=0.75');

    pageTl = gsap.timeline({
      scrollTrigger: {
        trigger: slide,
        duration: "100%",
        start: "top top",
        scrub: true,
        snap: {snapTo: slide, duration: 0.3, delay: 0.1, ease: "power1.inOut"},
        pin: true,
        pinSpacing: false
      }
    });
    pageTl.fromTo(slide, {opacity: 1, scale: 1}, {opacity:0, scale: 0.5});


  })

}








window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", cursorHover);
// Swipe hover animation
// window.addEventListener("mouseover", (e) => {
//   const item = e.target;
//   if(item.classList.contains('explore')) {
//     gsap.to('.about__swipe', {y: "0%", duration: 1});
//   } else {
//     gsap.to('.about__swipe', {y: "100%", duration: 1});
//   }
// })




