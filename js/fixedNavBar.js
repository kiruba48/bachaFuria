





const header = document.querySelector('#home');
const navBar = document.getElementById('nav');

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

export { navHover, stickyNav, obsOptions };
