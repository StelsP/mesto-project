export class FormValidator {
  constructor(config, formElement) {
    this.config = config;
    this.formElement = formElement;
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this.config.formSelector));
    formList.forEach(() => {
      this._setEventListeners();
    });
  };

  _isFormValid(inputList) {
    return inputList.every(inputElement => inputElement.validity.valid);
  }

  _hideInputError(inputElement) {
    const errorElement = document.querySelector(`#${inputElement.name}-error`);

    errorElement.textContent = '';
    inputElement.classList.remove(this.config.inputErrorClass);
  }

  _showInputError(inputElement) {
    const errorElement = document.querySelector(`#${inputElement.name}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this.config.inputErrorClass);
  }
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



















