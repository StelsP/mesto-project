// PROFILE PHOTO EDIT

import { profilePhotoEditForm, profilePhotoEditButton, photoInput} from './variables.js';
import { openPopup, closePopup, submitPopup } from './utils.js'

profilePhotoEditButton.addEventListener('click', () => {
  openPopup(profilePhotoEditForm);
});

profilePhotoEditForm.addEventListener('click', (event) => {
  closePopup(profilePhotoEditForm, `${'popup__close-button_type_photo'}`, event);
});

profilePhotoEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    submitPopup(profilePhotoEditForm);
    profilePhotoEditButton.src = photoInput.value;
    document.querySelector('#popup__form_type_photo').reset();

});

// PROFILE EDIT

import { profileEditForm, profileEditButton, nameInput, quoteInput, profileName, profileQuote} from './variables.js';

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  quoteInput.value = profileQuote.textContent;
  openPopup(profileEditForm);
});

profileEditForm.addEventListener('click', (event) => {
  closePopup(profileEditForm, `${'popup__close-button_type_profile'}`, event);
});

profileEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    submitPopup(profileEditForm);
    profileName.textContent = nameInput.value;
    profileQuote.textContent = quoteInput.value;
});

// OPEN/CLOSE CARD IMAGE

import { image } from './variables.js';

export function setImageClickEventListener(name, link, card) {
  const imageLink = card.querySelector('.elements__image');
  imageLink.addEventListener('click', () => {
    openPopup(image);
    image.querySelector('.image__pic').src = link;
    image.querySelector('.image__pic').alt = 'Фото' + ' ' + name;
    image.querySelector('.image__title').textContent = name;
  });
}

image.addEventListener('click', (event) => {
  closePopup(image, `${'popup__close-button_type_picture'}`, event);
});
