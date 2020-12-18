import gsap from 'gsap';

const onceAnimation = function() {
  // return gsap.fromTo('.swipe', {x: '0%'}, { x: '-100%', stagger: 0.5, duration: 1 });
  const tl = gsap.timeline();
  // tl.to('ul.transition li', { duration: 0.5, scaleY: 1, transformOrigin: 'bottom left', stagger: 0.2 });
  tl.to('ul.transition li', { duration: 0.5, scaleY: 0, transformOrigin: 'top left', stagger: 0.1, delay: 1 })
    // tl.fromTo('ul.transition li', {y: '0%'}, { y: '-100%', stagger: 0.2, duration: 1, delay: 1 });
  tl.from('.nav', { opacity: 0 })
 
  tl.from('.tiles__title--clip', { x: -20, clipPath: 'inset(0 0 100% 0)', delay: 1 }, "-=0.5")
  tl.from('.tiles--clip', { clipPath: 'inset(0 0 100% 0)' })
    
}

const enterAnimation = function(container, async) {
  // let done = this.async();
  window.scrollTo(0, 0);
  const tl = gsap.timeline({ defaults: {ease: "power2.inOut"} });
        tl.fromTo('.swipe', {x: '0%'}, { x: '-100%', stagger: 0.5, duration: 1, onComplete: async });
        tl.fromTo(container, { opacity: 0 }, { opacity: 1, duration: 0 })
        // tl.from('.nav', { opacity: 0 })
}

const leaveAnimation = function(container, async) {
  // let done = this.async();

  const tl = gsap.timeline({defaults: {ease: "power2.inOut"}});
  tl.fromTo(container, { opacity: 1 }, { opacity: 0, duration: 1 });
  tl.fromTo('.swipe', {x: '-100%'}, { x: '0%', duration: 0.75, onComplete: async }, "-=0.5");
}

export { enterAnimation, leaveAnimation, onceAnimation };
