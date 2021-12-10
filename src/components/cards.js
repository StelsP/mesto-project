export class Card {
  constructor({name, link, owner, _id, likes}, selector, handleCardClick, userId, elementsLikeButtonActive, api) {
    this._name = name;
    this._link = link;
    this._owner = owner;
    this._likes = likes;
    this._id = _id;
    this._selector = document.querySelector(selector).content;
    this.handleCardClick = handleCardClick;
    this._userId = userId;
    this._elementsLikeButtonActive = elementsLikeButtonActive;
    this._api = api;
  }

  //приватный метод получения карточки
  _getElement() {
    const cardElement = this._selector
    .querySelector('.elements__cell')
    .cloneNode(true)
    return cardElement;
  }

  generateCard() {
    this._card = this._getElement();
    this._setHandlers();

    const cardsImage = this._card.querySelector('.elements__image');
    const cardsName = this._card.querySelector('.elements__name');
    cardsImage.src = this._link;
    cardsImage.alt = 'Фото' + ' ' + this._name;
    cardsName.textContent = this._name;
    if (this._owner._id != this._userId) {
      this._card.querySelector('.elements__delete-button').style.display = 'none';
    }
    return this._card;
  }

  _setHandlers() {
    this._likeCard()
    this._deleteCard()
    this._openFullscreen()
  }

  _openFullscreen() {
    const imageLink = this._card.querySelector('.elements__image');
    imageLink.addEventListener('click', this.handleCardClick);
  }

  _likeCard() {
    const elementsLikeCounter = this._card.querySelector('.elements__like-counter');
    const elementsLikeButton = this._card.querySelector('.elements__like-button');
    elementsLikeCounter.textContent = this._likes.length;
    if (this._likes.some((el) => el._id == this._userId)) {
      elementsLikeButton.classList.add(this._elementsLikeButtonActive);
    }
    elementsLikeButton.addEventListener('click', () => {
      if (!elementsLikeButton.classList.contains(this._elementsLikeButtonActive)) {
        this._api.likeHandler(this._id, 'PUT')
          .then((res) => {
            elementsLikeButton.classList.add(this._elementsLikeButtonActive);
            this._likes = res.likes;
            elementsLikeCounter.textContent = res.likes.length;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this._api.likeHandler(this._id, 'DELETE')
          .then((res) => {
            elementsLikeButton.classList.remove(this._elementsLikeButtonActive);
            this._likes = res.likes;
            elementsLikeCounter.textContent = res.likes.length;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  _deleteCard() {
    const elementsDeleteButton = this._card.querySelector('.elements__delete-button');
    elementsDeleteButton.addEventListener('click', () => {
      this._api.deleteCardHandler(this._id)
        .then(() => {
          this._card.remove();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}







