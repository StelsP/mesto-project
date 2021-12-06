import {Popup} from './popup.js';
import {configElementsValidation} from './var.js'
export class PopupWithForm extends Popup {
  //Кроме селектора попапа принимает в
  //конструктор колбэк сабмита формы.
  constructor({popup, formSubmitHandler}) {
    super(popup);

    this.form = this.popup.querySelector(configElementsValidation.formSelector);
    this.formButton = this.form.querySelector(configElementsValidation.buttonSelector);
    this.formSubmitHandler = formSubmitHandler;
  }

  //Содержит приватный метод _getInputValues,
  //который собирает данные всех полей формы.
  _getInputValues() {
    this._elements = this.form.querySelectorAll('.popup__input');
    this._inputValues = {};
    this._elements.forEach(el => {
      this._inputValues[el.name] = el.value;
  })
  return this._inputValues;
}

handler = (e) => {
  e.preventDefault();
  this.formSubmitHandler(this._getInputValues());
}

setEventListeners() {
  //но и добавлять обработчик сабмита формы.
  //обработчик сабмита формы.
  this.form.addEventListener('submit', this.handler.bind(this));
  super.setEventListeners();
}

closePopup() {
  super.closePopup();
  this.form.reset();
}

}
