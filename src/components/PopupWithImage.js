import { Popup } from './Popup.js';

export class PopupWithImage extends Popup{
  constructor(selector) {
    super(selector);

    this._popupImage = this._popup.querySelector('.image__pic');
    this._popupTitle = this._popup.querySelector('.image__title');
  }

  open({link, name}) {
    super.open();
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupTitle.textContent = name;
  }
}
