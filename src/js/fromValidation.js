


function formValidation() {
  const form = document.querySelector('#form');
  const fullname = document.querySelector('#fullname');
  const email = document.querySelector('#contact-email');
  const phone = document.querySelector('#phone');

// Error input
  function showError(input, message) {
      const inputContainer = input.parentElement;
      inputContainer.classList.add('error')
      const small = inputContainer.querySelector('small');
      small.innerText = message;
    // inputContainer.className = 'input-container error';
    
  }

// email validity
  function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
    // return re.test(String(email).toLowerCase());
  }

// Success message input
  function showSuccess(input) {
    const inputContainer = input.parentElement;
    inputContainer.classList.remove('error')
  }

// Check Form Fields 
function checkRequired(inputArray) {
  let isRequired = false;
  inputArray.forEach(input => {
    if(input.value.trim() === '') {
      showError(input, `${getField(input)} is required`)
      isRequired = true;
    } else {
      showSuccess(input)
    }
  })
  
  return isRequired
}

// Capatilize 
function getField(input) {
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

   if(!checkRequired([fullname, email, phone])) {
    checkEmail(email)
    
   }

})

}


export { formValidation };
