// PROFILE PHOTO EDIT FORM

import { profilePhotoEditForm, profilePhotoEditButton, photoInput} from './variables.js';
import { openPopup, closePopup, submitPopup } from './utils.js'

profilePhotoEditButton.addEventListener('mousedown', () => {
  openPopup(profilePhotoEditForm);
});

profilePhotoEditForm.addEventListener('mousedown', (event) => {
  closePopup(profilePhotoEditForm, `${'popup__close-button_type_photo'}`, event);
});

profilePhotoEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    submitPopup(profilePhotoEditForm);
    profilePhotoEditButton.src = photoInput.value;
    document.querySelector('#popup__form_type_photo').reset();

});

// PROFILE EDIT FROM

import { profileEditForm, profileEditButton, nameInput, quoteInput, profileName, profileQuote} from './variables.js';

profileEditButton.addEventListener('mousedown', () => {
  nameInput.value = profileName.textContent;
  quoteInput.value = profileQuote.textContent;
  openPopup(profileEditForm);
});

profileEditForm.addEventListener('mousedown', (event) => {
  closePopup(profileEditForm, `${'popup__close-button_type_profile'}`, event);
});

profileEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    submitPopup(profileEditForm);
    profileName.textContent = nameInput.value;
    profileQuote.textContent = quoteInput.value;
});

// ADD NEW CARDS FROM

import { elementsAddForm, elementsAddButton, imageInput, titleInput} from './variables.js';

elementsAddButton.addEventListener('mousedown', () => {
  openPopup(elementsAddForm);
});

elementsAddForm.addEventListener('mousedown', (event) => {
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


