import { initialCards } from '../components/initial-cards.js';
import {
  // ADD START 6 CARDS
  elementsList,
  // CLOSE FULLSCREEN CARD IMAGE
  image, imageCloseButton,
  // PROFILE PHOTO EDIT FORM
  profilePhotoEditForm, profilePhotoEditButton, profilePhotoCloseButton, photoInput, profilePhotoForm,
  // PROFILE EDIT FORM
  profileEditForm, profileEditButton, profileCloseButton, nameInput, quoteInput, profileName, profileQuote,
  // ADD NEW CARDS FORM
  elementsAddForm, elementsAddButton, elementsCloseButton, imageInput, titleInput, elementsForm,
  } from '../components/var.js';
import { openPopup, closePopup } from '../components/modal.js';
import { createCard } from '../components/cards.js';
import { enableValidation } from '../components/validate.js';
import './index.css';

// ADD START 6 CARDS
initialCards.forEach(function(item) {
  elementsList.prepend(createCard(item));
});

// CLOSE FULLSCREEN CARD IMAGE
imageCloseButton.addEventListener('mousedown', () => {
  closePopup(image);
});

// PROFILE PHOTO EDIT FORM
profilePhotoEditButton.addEventListener('click', () => {
  openPopup(profilePhotoEditForm);
});

profilePhotoCloseButton.addEventListener('click', () => {
  closePopup(profilePhotoEditForm);
});

profilePhotoEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
    closePopup(profilePhotoEditForm);
    profilePhotoEditButton.src = photoInput.value;
    profilePhotoForm.reset();
});

// PROFILE EDIT FORM
profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  quoteInput.value = profileQuote.textContent;
  openPopup(profileEditForm);
});

profileCloseButton.addEventListener('click', () => {
  closePopup(profileEditForm);
});

profileEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
    closePopup(profileEditForm);
    profileName.textContent = nameInput.value;
    profileQuote.textContent = quoteInput.value;
});

// ADD NEW CARDS FORM
elementsAddButton.addEventListener('click', () => {
  openPopup(elementsAddForm);
});

elementsCloseButton.addEventListener('click', () => {
  closePopup(elementsAddForm);
});

elementsAddForm.addEventListener('submit', (e) => {
  e.preventDefault();
    closePopup(elementsAddForm);
    elementsList.prepend(createCard({
      name: titleInput.value,
      link: imageInput.value
    }));
  elementsForm.reset();
});

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__input_error',
});
