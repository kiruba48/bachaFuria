import gsap from 'gsap';


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
          offset: -250
  })
  .setTween(t1)
  // .addIndicators({colorStart: 'white', colorTrigger: 'white', name: 'tiles'})
  .addTo(controller)

  })

}


export { showTiles };
