const isFormValid = (inputList) => {
  return inputList.every(inputElement => inputElement.validity.valid);
};

const hideInputError = (inputElement, config) => {
  const errorElement = document.querySelector(`#${inputElement.name}-error`);

  errorElement.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
};

const showInputError = (inputElement, config) => {
  const errorElement = document.querySelector(`#${inputElement.name}-error`);

  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
};

const toggleButtonState = (buttonElement, inputList) => {
  if (isFormValid(inputList)) {
    buttonElement.disabled = false;
  } else {
    buttonElement.disabled = true;
  }
};

const checkInputValidity = (inputElement, config) => {
  if (inputElement.validity.valid) {
    hideInputError(inputElement, config);
  } else {
    showInputError(inputElement, config);
  }
};

const setEventListeners = (formElement, config) => {
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    submitButton.disabled = true;
  });

  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const submitButton = formElement.querySelector(config.buttonSelector);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement, config);
      toggleButtonState(submitButton, inputList);
    });
    toggleButtonState(submitButton, inputList);
  });
};

export const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(formElement => {
    setEventListeners(formElement, config);
  });
};


















