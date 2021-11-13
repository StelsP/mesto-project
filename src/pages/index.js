export let userId;
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

// GET PROFILE/CARDS INFO
Promise.all([getProfileInfo(), getInitialCards()]).then(([userData, cardData]) => {
  profilePhotoEditButton.src = userData.avatar;
  profileName.textContent = userData.name;
  profileQuote.textContent = userData.about;
  userId = userData._id;
  addInitialCards(cardData);
})
.catch((err) => {
  console.log(err);
});

// ADD START CARDS
const addInitialCards = (cardData) => {
  cardData.forEach(function(card) {
    elementsList.append(createCard(card));
  });
}

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
  renderLoading(true, profilePhotoEditForm);
    patchProfilePhoto(photoInput)
      .then(res => {
        profilePhotoEditButton.src = res.avatar;
        closePopup(profilePhotoEditForm);
        profilePhotoForm.reset();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, profilePhotoEditForm, 'Сохранить', true);
      });
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
  renderLoading(true, profileEditForm);
    patchProfileInfo(nameInput, quoteInput)
      .then((res) => {
        profileName.textContent = res.name;
        profileQuote.textContent = res.about;
        closePopup(profileEditForm);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, profileEditForm, 'Сохранить', true);
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
  renderLoading(true, elementsAddForm);
    postNewCards(titleInput, imageInput)
      .then((res) => {
        elementsList.prepend(createCard(res));
        closePopup(elementsAddForm);
        elementsForm.reset();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, elementsAddForm, 'Создать', true);
      });
});

function renderLoading(isLoading, form, text, disabled) {
  const submitButton = form.querySelector('.popup__submit-button')
  submitButton.disabled = disabled;
  submitButton.textContent = `${text}`;
  if (isLoading) {
    submitButton.textContent = 'Сохранение...';
  }
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__input_error',
});



