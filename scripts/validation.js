console.log('test');

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__input_error',
};

const isFormvalid = (inputList) => {
  return valid = inputList.every(inputElement => inputElement.validity.valid);
};

const hideInputError = (inputElement) => {
  const errorElement = document.querySelector(`#${inputElement.name}-error`);

  errorElement.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
};

const showInputError = (inputElement) => {
  const errorElement = document.querySelector(`#${inputElement.name}-error`);

  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
};

const toggleButtonState = (buttonElement, inputList) => {
  // if form valid enable submit button else disable

};

const checkInputValidity = (inputElement) => {
  // if valid, hide error else show error
  if (inputElement.validity.valid) {
    // hide error
    hideInputError(inputElement);
  } else {
    // show error
    showInputError(inputElement);
  }
};

const setEventListeners = (formElement) => {
  // prevent page reload on form sumbit
  formElement.addEventListener('submit', e => {
    e.preventDefault();
  });

  // find all inputs
  const inputList = Array.from(document.querySelectorAll(config.inputSelector));

  // find submit button
  const submitButton = document.querySelector(config.buttonSelector);

  inputList.forEach(inputElement => {
    // add event listeners for each input
    inputElement.addEventListener('input', () => {
      // check each input is valid
      checkInputValidity(inputElement);

      // toggle button state
      toggleButtonState(submitButton, inputList);
    });
  });

};

const enableValidation = () => {

  // find all forms
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  // set event listeners for each form
  formList.forEach(formElement => {
    setEventListeners(formElement);
  });

};


















