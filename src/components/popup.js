export class Popup {
  constructor(popup) {
    this.popup = popup;
  }

  openPopup() {
    this.popup.classList.add('popup_opened');
    document.addEventListener('mousedown', this._handleEscClose);
    document.addEventListener('keydown', this._handleEscClose);
  };

  closePopup() {
    this.popup.classList.remove('popup_opened');
    document.removeEventListener('mousedown', this._handleEscClose);
    document.removeEventListener('keydown', this._handleEscClose);
  };

  setEventListeners() {
    this.popup.addEventListener('click', this._handlerClick);
  };

  _handleEscClose = (e) => {
    if (e.key === "Escape") {
      this.closePopup();
    };
  };

  _handlerClick = (e) => {
    if ((e.target.classList.contains('popup_opened')) || (e.target.classList.contains('popup__close-button'))) this.closePopup();
    if (e.target.classList.contains('popup')) {
      this.closePopup();
    };
  };
}



