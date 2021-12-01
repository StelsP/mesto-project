// OPEN/CLOSE POPUP
export class Popup {
  constructor(popup) {
    this.popup = popup;
  }

  open() {
    this.popup.classList.add('popup_opened');
    document.addEventListener('mousedown', this._closeWidthOverlayClick);
    document.addEventListener('keydown', this._closeWidthEscape);
  };

  close() {
    this.popup.classList.remove('popup_opened');
    document.removeEventListener('mousedown', this._closeWidthOverlayClick);
    document.removeEventListener('keydown', this._closeWidthEscape);
  };

  _closeWidthEscape = (e) => {
    if (e.key === "Escape") {
      this.close();
    };
  };

  _closeWidthOverlayClick = (e) => {
    if (e.target.classList.contains('popup')) {
      this.close();
    };
  };
}

