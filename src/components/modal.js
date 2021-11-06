// PROFILE PHOTO EDIT FORM

import { config } from './var.js';
import { openPopup, closePopup } from './utils.js'
import { createCard } from './cards.js'

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
    document.querySelector('#popup__form_type_photo').reset();
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
  document.querySelector('#popup__form_type_card-add').reset();
});




