// ADD START 6 CARDS

import { initialCards } from './initial-cards.js';
import { elementsTemplate, elementsList} from './variables.js';
import { setImageClickEventListener } from './modal.js';
import { openPopup, closePopup, submitPopup } from './utils.js'


initialCards.forEach(function(item) {
  elementsList.prepend(createCard(item));
});

function createCard(cardData) {
  const elementsCell = elementsTemplate.querySelector('.elements__cell').cloneNode(true);

  elementsCell.querySelector('.elements__image').src = cardData.link;
  elementsCell.querySelector('.elements__image').alt = 'Фото' + ' ' + cardData.name;
  elementsCell.querySelector('.elements__name').textContent = cardData.name;

  setDeleteCardEventListener(elementsCell);
  setLikeCardEventListener(elementsCell);
  setImageClickEventListener(cardData.name, cardData.link, elementsCell);

  return elementsCell;
}

// ADD NEW CARDS

import { elementsAddForm, elementsAddButton, imageInput, titleInput} from './variables.js';

elementsAddButton.addEventListener('click', () => {
  openPopup(elementsAddForm);
});

elementsAddForm.addEventListener('click', (event) => {
  closePopup(elementsAddForm, `${'popup__close-button_type_card-add'}`, event);
});

elementsAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    submitPopup(elementsAddForm);
    elementsList.prepend(createCard({
      name: titleInput.value,
      link: imageInput.value
    }));
  document.querySelector('#popup__form_type_card-add').reset();
});

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
