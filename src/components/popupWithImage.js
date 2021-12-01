import { Popup } from './popup.js'
// import { imagePic, imageTitle } from './var.js'


export class PopupWithImage extends Popup {
  contructor(popup, link, name) {
    super(popup);
    this.link = link;
    this.name = name;

  }

  openPopup() {
    super.openPopup();
  }

  handleCardClick() {
    imagePic.src = this.link;
    imagePic.alt = 'Фото' + ' ' + this.name;
    imageTitle.textContent = this.name;
  }
}
