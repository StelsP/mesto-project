// ADD START 6 CARDS

import { initialCards } from './initial-cards.js';
import { elementsTemplate, elementsList } from './var.js';
import { openPopup, closePopup } from './utils.js'

initialCards.forEach(function(item) {
  elementsList.prepend(createCard(item));
});

export function createCard(cardData) {
  const elementsCell = elementsTemplate.querySelector('.elements__cell').cloneNode(true);

  elementsCell.querySelector('.elements__image').src = cardData.link;
  elementsCell.querySelector('.elements__image').alt = 'Фото' + ' ' + cardData.name;
  elementsCell.querySelector('.elements__name').textContent = cardData.name;

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
  const elementsLikeButton = card.querySelector('.elements__like-button')
  elementsLikeButton.addEventListener('click', () => {
    elementsLikeButton.classList.toggle('elements__like-button_active');
  });
}

// OPEN/CLOSE FULLSCREEN CARD IMAGE

import { image, imageCloseButton } from './var.js';

function setImageClickEventListener(name, link, card) {
  const imageLink = card.querySelector('.elements__image');
  imageLink.addEventListener('click', () => {
    openPopup(image);
    image.querySelector('.image__pic').src = link;
    image.querySelector('.image__pic').alt = 'Фото' + ' ' + name;
    image.querySelector('.image__title').textContent = name;
  });
}

imageCloseButton.addEventListener('mousedown', () => {
  closePopup(image);
});



