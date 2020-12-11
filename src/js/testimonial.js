
function testimonials() {
  const slides = document.querySelectorAll('.slide');
  const rightBtn = document.querySelector('.slider__btn--right');
  const leftBtn = document.querySelector('.slider__btn--left');
  const dotContainer = document.querySelector('.dots');
  let currentSlide = 0;
  const maxSlide = slides.length;

  function createDots() {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend', 
      `<button class="dots__dot" data-slide="${i}"></button>`
      )
    })
  }
 

  function dotActive(slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => {
      dot.classList.remove('dots__dot--active')
    })

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
  }
  

  function moveSlide(slide) {
    slides.forEach((s, index) => {
      s.style.transform = `translateX(${100 * (index - slide)}%)`;  
    })
  }

  function nextSlide () {
    if(currentSlide === maxSlide - 1) currentSlide = 0;
    else currentSlide++;

  moveSlide(currentSlide)
  dotActive(currentSlide)
  }

  function prevSlide() {
    if(currentSlide  === 0) currentSlide = maxSlide - 1;
    else   currentSlide--;

    moveSlide(currentSlide) 
    dotActive(currentSlide)
  }

  // initialize
  function init() {
    createDots()
    dotActive(0)
  }

init()
  // eventhandlers
rightBtn.addEventListener('click', nextSlide)
leftBtn.addEventListener('click', prevSlide)

document.addEventListener('keydown' , (e) => {
  if(e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide()
})

dotContainer.addEventListener('click', (e) => {

  if(e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    moveSlide(slide)
    dotActive(slide)
  }
})
}

export { testimonials };
