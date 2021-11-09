
import { config } from './var.js';
import { openPopup } from './modal.js'

// CREATE START 6 CARDS

export function createCard(cardData) {
  const elementsCell = config.elementsTemplate.querySelector('.elements__cell').cloneNode(true);
  const elementsImage = elementsCell.querySelector('.elements__image');
  const elementsName = elementsCell.querySelector('.elements__name');

  elementsImage.src = cardData.link;
  elementsImage.alt = 'Фото' + ' ' + cardData.name;
  elementsName.textContent = cardData.name;

  setDeleteCardEventListener(elementsCell);
  setLikeCardEventListener(elementsCell);
  setImageClickEventListener(cardData.name, cardData.link, elementsCell);

  return elementsCell;
}

// DELETE CARDS

function setDeleteCardEventListener(card) {
  const elementsDeleteButton = card.querySelector('.elements__delete-button');
  elementsDeleteButton.addEventListener('click', () => {
    card.remove();
  });
}

// LIKE CARDS

function setLikeCardEventListener(card) {
  const elementsLikeButton = card.querySelector('.elements__like-button');
  elementsLikeButton.addEventListener('click', () => {
    elementsLikeButton.classList.toggle('elements__like-button_active');
  });
}

// OPEN FULLSCREEN CARD IMAGE

function setImageClickEventListener(name, link, card) {
  const imageLink = card.querySelector('.elements__image');
  imageLink.addEventListener('click', () => {
    openPopup(config.image);
    config.imagePic.src = link;
    config.imagePic.alt = 'Фото' + ' ' + name;
    config.imageTitle.textContent = name;
  });
}





