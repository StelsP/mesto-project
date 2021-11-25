import { imagePic, imageTitle, image, elementsLikeButtonActive, api, imagePopup } from '../components/var.js';
import { userId } from '../pages/index.js';
import { Popup } from './popup.js';

export class Card {
  constructor({name, link, owner, _id, likes}, selector) {
    this.name = name,
    this.link = link,
    this.owner = owner,
    this.likes = likes,
    this._id = _id,
    this.selector = selector,
    // подумать! TODO
    this.card = selector.querySelector('.elements__cell').cloneNode(true)
  }

  createCard() {
    const elementsImage = this.card.querySelector('.elements__image');
    const elementsName = this.card.querySelector('.elements__name');

    elementsImage.src = this.link;
    elementsImage.alt = 'Фото' + ' ' + this.name;
    elementsName.textContent = this.name;

    if (this.owner._id != userId) {
      this.card.querySelector('.elements__delete-button').style.display = "none";
    }
    this._handlers()

    return this.card;
  }

  _handlers() {
    this._likeCard()
    this._deleteCard()
    this._openFullscreen()
  }

  _likeCard() {
    const elementsLikeCounter = this.card.querySelector('.elements__like-counter');
    const elementsLikeButton = this.card.querySelector('.elements__like-button');
    elementsLikeCounter.textContent = this.likes.length;
    if (this.likes.some((el) => el._id == userId)) {
      elementsLikeButton.classList.add(elementsLikeButtonActive);
    }
    elementsLikeButton.addEventListener('click', () => {
      if (!elementsLikeButton.classList.contains(elementsLikeButtonActive)) {
        api.likeHandler(this._id, 'PUT')
          .then((res) => {
            elementsLikeButton.classList.add(elementsLikeButtonActive);
            this.likes = res.likes;
            elementsLikeCounter.textContent = res.likes.length;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api.likeHandler(this._id, 'DELETE')
          .then((res) => {
            elementsLikeButton.classList.remove(elementsLikeButtonActive);
            this.likes = res.likes;
            elementsLikeCounter.textContent = res.likes.length;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  _deleteCard() {
    const elementsDeleteButton = this.card.querySelector('.elements__delete-button');
    elementsDeleteButton.addEventListener('click', () => {
      api.deleteCardHandler(this._id)
        .then(() => {
          this.card.remove();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  _openFullscreen() {
    const imageLink = this.card.querySelector('.elements__image');
    imageLink.addEventListener('click', () => {
      imagePopup.openPopup(image);
      imagePic.src = this.link;
      imagePic.alt = 'Фото' + ' ' + this.name;
      imageTitle.textContent = this.name;
    });
  }
}







