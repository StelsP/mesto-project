import { Popup } from './popup.js';
import { configElementsValidation } from './var.js'
export class PopupWithForm extends Popup {
  //Кроме селектора попапа принимает в
  //конструктор колбэк сабмита формы.
  constructor({selector, formSubmitHandler}) {
    super(selector);

    this._form = this._popup.querySelector(configElementsValidation.formSelector);
    this._formButton = this._form.querySelector(configElementsValidation.buttonSelector);
    this.formSubmitHandler = formSubmitHandler;
  }

  close() {
    super.close();
    this._form.reset();
  };

  setEventListeners() {
    //но и добавлять обработчик сабмита формы.
    //обработчик сабмита формы.
    this._form.addEventListener('submit', this._handler.bind(this));
    super.setEventListeners();
  };

  _handler = (e) => {
    e.preventDefault();
    this.formSubmitHandler(this._getInputValues());
  };

  //Содержит приватный метод _getInputValues,
  //который собирает данные всех полей формы.
  _getInputValues() {
    this._elements = this._form.querySelectorAll('.popup__input');
    this._inputValues = {};
    this._elements.forEach(el => {
      this._inputValues[el.name] = el.value;
    });
  return this._inputValues;
  };

}
