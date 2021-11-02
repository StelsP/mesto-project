console.log('test');

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit-button',
};

const hideInputError = (inputElement) => {
  const errorElement = document.querySelector(`#${inputElement.name}-error`);

  errorElement.textContent = '';
};

const showInputError = (inputElement) => {
  const errorElement = document.querySelector(`#${inputElement.name}-error`);
  console.log(errorElement);

  errorElement.textContent = 'Some Error';
};

const toggleButtonState = (buttonElement, inputList) => {

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


















