const cartBtnMobile = document.querySelector('.cart-btn--mobile');
const cartBtnDesk = document.querySelector('.cart-btn--desk');
const closeCartBtn = document.querySelector('.close-cart');
const cartOverlay = document.querySelector('.cart-overlay');

function showCart() {
  const cartDOM = document.querySelector('.cart');
  const cartOverlay = document.querySelector('.cart-overlay');

  cartOverlay.classList.add('transparentBcg');
  // cartDOM.classList.add('show-cart');
  cartDOM.style.transform = 'translateX(0)';
}

function closeCart() {
  const cartDOM = document.querySelector('.cart');
  const cartOverlay = document.querySelector('.cart-overlay');

  cartOverlay.classList.remove('transparentBcg');
  // cartDOM.classList.add('show-cart');
  cartDOM.style.transform = 'translateX(100%)';
}

export { showCart, closeCart };
