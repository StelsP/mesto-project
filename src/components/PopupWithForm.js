import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
  constructor({selector, formSubmitHandler}, configElementsValidation) {
    super(selector);

    this._form = this._popup.querySelector(configElementsValidation.formSelector);
    this._formButton = this._form.querySelector(configElementsValidation.buttonSelector);
    this.formSubmitHandler = formSubmitHandler;
    this._elements = this._form.querySelectorAll('.popup__input');
  }

  close() {
    super.close();
    this._form.reset();
  };

  setEventListeners() {
    this._form.addEventListener('submit', this._handler.bind(this));
    super.setEventListeners();
  };

  _handler = (e) => {
    e.preventDefault();
    this.formSubmitHandler(this._getInputValues());
  };

  _getInputValues() {
    this._inputValues = {};
    this._elements.forEach(el => {
      this._inputValues[el.name] = el.value;
    });
  return this._inputValues;
  };

}
