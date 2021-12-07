import { Popup } from './popup.js';

export class PopupWithImage extends Popup{
  constructor(selector) {
    super(selector);

    this._popupImage = this._selector.querySelector('.image__pic');
    this._popupTitle = this._selector.querySelector('.image__title');
  }

  open({link, name}) {
    super.open();
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupTitle.textContent = name;
  }
}
