import { config } from '../components/var.js';
import { openPopup, closePopup } from '../components/modal.js'
import { initialCards } from '../components/initial-cards.js';
import { createCard } from '../components/cards.js';
import { enableValidation } from '../components/validate.js';
import './index.css';

// ADD START 6 CARDS

initialCards.forEach(function(item) {
  config.elementsList.prepend(createCard(item));
});

// CLOSE FULLSCREEN CARD IMAGE

config.imageCloseButton.addEventListener('mousedown', () => {
  closePopup(config.image);
});

// PROFILE PHOTO EDIT FORM

config.profilePhotoEditButton.addEventListener('click', () => {
  openPopup(config.profilePhotoEditForm);
});

config.profilePhotoCloseButton.addEventListener('click', () => {
  closePopup(config.profilePhotoEditForm);
});

config.profilePhotoEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
    closePopup(config.profilePhotoEditForm);
    config.profilePhotoEditButton.src = config.photoInput.value;
    config.profilePhotoForm.reset();
});

// PROFILE EDIT FORM

config.profileEditButton.addEventListener('click', () => {
  config.nameInput.value = config.profileName.textContent;
  config.quoteInput.value = config.profileQuote.textContent;
  openPopup(config.profileEditForm);
});

config.profileCloseButton.addEventListener('click', () => {
  closePopup(config.profileEditForm);
});

config.profileEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
    closePopup(config.profileEditForm);
    config.profileName.textContent = config.nameInput.value;
    config.profileQuote.textContent = config.quoteInput.value;
});

// ADD NEW CARDS FORM

config.elementsAddButton.addEventListener('click', () => {
  openPopup(config.elementsAddForm);
});

config.elementsCloseButton.addEventListener('click', () => {
  closePopup(config.elementsAddForm);
});

config.elementsAddForm.addEventListener('submit', (e) => {
  e.preventDefault();
    closePopup(config.elementsAddForm);
    config.elementsList.prepend(createCard({
      name: config.titleInput.value,
      link: config.imageInput.value
    }));
  config.elementsForm.reset();
});

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__input_error',
});
