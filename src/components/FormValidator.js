export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _isFormValid(inputList) {
    return inputList.every(inputElement => inputElement.validity.valid);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);

    errorElement.textContent = '';
    inputElement.classList.remove(this._config.inputErrorClass);
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.inputErrorClass);
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
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }

  _setEventListeners () {
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    const submitButton = this._formElement.querySelector(this._config.buttonSelector);

    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(submitButton, inputList);
      });
      this._toggleButtonState(submitButton, inputList);
    });
  }
}



















