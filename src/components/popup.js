// OPEN/CLOSE POPUP
export class Popup {
  constructor(popup) {
    this.popup = popup;
  }

  openPopup() {
    this.popup.classList.add('popup_opened');
    document.addEventListener('mousedown', this._closePopupWidthOverlayClick);
    document.addEventListener('keydown', this._closePopupWidthEscape);
  };

  closePopup() {
    this.popup.classList.remove('popup_opened');
    document.removeEventListener('mousedown', this._closePopupWidthOverlayClick);
    document.removeEventListener('keydown', this._closePopupWidthEscape);
  };

  _closePopupWidthEscape = (e) => {
    if (e.key === "Escape") {
      this.closePopup();
    };
  };

  _closePopupWidthOverlayClick = (e) => {
    if (e.target.classList.contains('popup')) {
      this.closePopup();
    };
  };
}

