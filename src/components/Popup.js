export class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener('click', this._handleClick);
  }

  _handleEscClose = (e) => {
    if (e.key === "Escape") {
      this.close();
    }
  }

  _handleClick = (e) => {
    if ((e.target.classList.contains('popup_opened')) || (e.target.classList.contains('popup__close-button'))) this.close();
  }

}



