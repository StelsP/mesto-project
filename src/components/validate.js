
  _toggleButtonState(buttonElement, inputList) {
    if (this._isFormValid(inputList)) {
      buttonElement.disabled = false;
    } else {
      buttonElement.disabled = true;
    }
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement, this.config);
    } else {
      this._showInputError(inputElement, this.config);
    }

  }
  _setEventListeners () {
    this.formElement.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    const inputList = Array.from(this.formElement.querySelectorAll(this.config.inputSelector));
    const submitButton = this.formElement.querySelector(this.config.buttonSelector);

    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(submitButton, inputList);
      });
      this._toggleButtonState(submitButton, inputList);
    });
  };
}



// const isFormValid = (inputList) => {
//   return inputList.every(inputElement => inputElement.validity.valid);
// };

// const hideInputError = (inputElement, config) => {
//   const errorElement = document.querySelector(`#${inputElement.name}-error`);

//   errorElement.textContent = '';
//   inputElement.classList.remove(config.inputErrorClass);
// };

// const showInputError = (inputElement, config) => {
//   const errorElement = document.querySelector(`#${inputElement.name}-error`);

//   errorElement.textContent = inputElement.validationMessage;
//   inputElement.classList.add(config.inputErrorClass);
// };

// const toggleButtonState = (buttonElement, inputList) => {
//   if (isFormValid(inputList)) {
//     buttonElement.disabled = false;
//   } else {
//     buttonElement.disabled = true;
//   }
// };

// const checkInputValidity = (inputElement, config) => {
//   if (inputElement.validity.valid) {
//     hideInputError(inputElement, config);
//   } else {
//     showInputError(inputElement, config);
//   }
// };

// const setEventListeners = (formElement, config) => {
//   formElement.addEventListener('submit', (e) => {
//     e.preventDefault();
//   });

//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   const submitButton = formElement.querySelector(config.buttonSelector);

//   inputList.forEach(inputElement => {
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(inputElement, config);
//       toggleButtonState(submitButton, inputList);
//     });
//     toggleButtonState(submitButton, inputList);
//   });
// };

// export const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach(formElement => {
//     setEventListeners(formElement, config);
//   });
// };


















