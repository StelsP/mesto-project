import {Popup} from './popup.js';

export class PopupWithImage extends Popup{
  constructor(selector) {
    super(selector);

    this.popupImage = this.popup.querySelector('.image__pic');
    this.popupTitle = this.popup.querySelector('.image__title');
  }

  openPopup({link, name}) {
    super.openPopup();
    this.popupImage.src = link;
    this.popupImage.alt = name;
    this.popupTitle.textContent = name;
  }
}

