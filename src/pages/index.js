import {
  // ADD START CARDS
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

import {
  getInitialCards,
  getProfileInfo,
  patchProfileInfo,
  postNewCards,
  patchProfilePhoto } from '../components/api.js';

import { openPopup, closePopup } from '../components/modal.js';
import { createCard } from '../components/cards.js';
import { enableValidation } from '../components/validate.js';
import './index.css';

// ADD PROFILE INFO
getProfileInfo()
  .then((res) => {
    profilePhotoEditButton.src = res.avatar;
    profileName.textContent = res.name;
    profileQuote.textContent = res.about;
  })
  .catch((err) => {
    console.log(err);
  });

// ADD START CARDS
getInitialCards()
  .then((res) => {
    console.log(res)
    res.forEach(function(item) {
      elementsList.append(createCard(item));
    });
  })
  .catch((err) => {
    console.log(err);
  });

// CLOSE FULLSCREEN CARD IMAGE
imageCloseButton.addEventListener('click', () => {
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
    patchProfilePhoto(photoInput);
    getProfileInfo()
      .then(res => {
        profilePhotoEditButton.src = res.avatar;
      })
      .catch((err) => {
        console.log(err);
      });
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
    patchProfileInfo(nameInput, quoteInput);
    getProfileInfo()
      .then((res) => {
        profileName.textContent = res.name;
        profileQuote.textContent = res.about;
      })
      .catch((err) => {
        console.log(err);
      });
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
    postNewCards(titleInput, imageInput)
      .then((res) => {
        elementsList.append(createCard({
          name: res.name,
          link: res.link
        }));
      })
      .catch((err) => {
        console.log(err);
      });
    elementsForm.reset();
});

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__input_error',
});



