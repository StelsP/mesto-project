export let userId;
import {
  // ADD START CARDS
  elementsList,
  // CLOSE FULLSCREEN CARD IMAGE
  image,
  imageCloseButton,
  // PROFILE PHOTO EDIT FORM
  profilePhotoEditForm,
  profilePhotoEditButton,
  profilePhotoCloseButton,
  photoInput,
  profilePhotoForm,
  // PROFILE EDIT FORM
  profileEditForm,
  profileEditButton,
  profileCloseButton,
  nameInput, quoteInput,
  profileName,
  profileQuote,
  // ADD NEW CARDS FORM
  elementsAddForm,
  elementsAddButton,
  elementsCloseButton,
  imageInput,
  titleInput,
  elementsForm,
  api,
  profilePhotoEditPopup,
  profileEditPopup,
  elementsAddPopup,
  imagePopup,
  } from '../components/var.js';
import { createCard } from '../components/cards.js';
import { enableValidation } from '../components/validate.js';
import './index.css';

// GET PROFILE/CARDS INFO
Promise.all([api.getProfileInfo(), api.getInitialCards()]).then(([userData, cardData]) => {
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
  imagePopup.closePopup(image);
});

// PROFILE PHOTO EDIT FORM
profilePhotoEditButton.addEventListener('click', () => {
  profilePhotoEditPopup.openPopup(profilePhotoEditForm);
});

profilePhotoCloseButton.addEventListener('click', () => {
  profilePhotoEditPopup.closePopup(profilePhotoEditForm);
});

profilePhotoEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  renderLoading(true, profilePhotoEditPopup);
    api.patchProfilePhoto(photoInput)
      .then(res => {
        profilePhotoEditButton.src = res.avatar;
        profilePhotoEditPopup.closePopup(profilePhotoEditForm);
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
  profileEditPopup.openPopup(profileEditForm);
});

profileCloseButton.addEventListener('click', () => {
  profileEditPopup.closePopup(profileEditForm);
});

profileEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  renderLoading(true, profileEditForm);
    api.patchProfileInfo(nameInput, quoteInput)
      .then((res) => {
        profileName.textContent = res.name;
        profileQuote.textContent = res.about;
        profileEditPopup.closePopup(profileEditForm);
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
  elementsAddPopup.openPopup(elementsAddForm);
});

elementsCloseButton.addEventListener('click', () => {
  elementsAddPopup.closePopup(elementsAddForm);
});

elementsAddForm.addEventListener('submit', (e) => {
  e.preventDefault();
  renderLoading(true, elementsAddForm);
    api.postNewCards(titleInput, imageInput)
      .then((res) => {
        elementsList.prepend(createCard(res));
        elementsAddPopup.closePopup(elementsAddForm);
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



