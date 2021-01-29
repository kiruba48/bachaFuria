const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const labels = document.querySelectorAll('.label');


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const escCloseModal = function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
}

const labelAnimation = function() {
  labels.forEach(label => {
  
    const innerText = label.innerHTML.split('')
                                     .map((letter, index) => `<span style = "transition-delay:${index * 50}ms">${letter}</span>`)
                                     .join('')
                           
    label.innerHTML = innerText;
   
  })
}

export { openModal, closeModal, escCloseModal, labelAnimation };
