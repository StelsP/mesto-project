export let userId;

import {
  // ADD START CARDS
  elementsList,
  // CLOSE FULLSCREEN CARD IMAGE
  image,
  // PROFILE PHOTO EDIT FORM
  profilePhotoEditForm,
  profilePhotoEditButton,
  // PROFILE EDIT FORM
  profileEditForm,
  profileEditButton,
  nameInput, quoteInput,
  profileName,
  profileQuote,
  // ADD NEW CARDS FORM
  elementsAddForm,
  elementsAddButton,
  api,
  elementsTemplate,
  configElementsValidation,
  } from '../components/var.js';
import './index.css';
import { Card } from '../components/cards.js';
import { Section } from '../components/section.js';
import { FormValidator } from '../components/validate.js';
//BLABLA
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/popupWithImage.js';
import { Popup } from '../components/popup.js';
import { PopupWithForm } from '../components/popupWithform.js';
const userInform = new UserInfo(profileName, profileQuote);
// GET PROFILE/CARDS INFO
Promise.all([api.getProfileInfo(), api.getInitialCards()])
.then(([userData, cardData]) => {
  userInform.setUserInfo(userData.name, userData.about);
  profilePhotoEditButton.src = userData.avatar;
  userId = userData._id;

  const addInitialCards = new Section({
    items: cardData,
    renderer: (item) => {
      const card = new Card(item, elementsTemplate, () => {
        imagePopup.openPopup(item);
        });
      const cardElement = card.generateCard();
      addInitialCards.addItem(cardElement);
    }
  },
    elementsList
);
addInitialCards.renderingItems();
})
.catch((err) => {
  console.log(err);
});

// CLOSE FULLSCREEN CARD IMAGE

export const imagePopup = new PopupWithImage(image);
imagePopup.setEventListeners();



// PROFILE PHOTO EDIT FORM

profilePhotoEditButton.addEventListener('click', () => {
  const getValidProfilePhotoEditForm = new FormValidator(configElementsValidation, profilePhotoEditForm);
  getValidProfilePhotoEditForm.enableValidation();
  profilePhotoEditPopup.openPopup();
});
//ПОПАП РЕДАКТИРОВАНИЕ ФОТО ПРОФИЛЯ
const profilePhotoEditPopup = new PopupWithForm({
  popup: profilePhotoEditForm,
  formSubmitHandler: data => {
    renderLoading(true, profilePhotoEditForm);
      api.patchProfilePhoto(data.input_photo)
        .then(res => {
          profilePhotoEditButton.src = res.avatar;
          profilePhotoEditPopup.closePopup();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          renderLoading(false, profilePhotoEditForm, 'Сохранить', true);
        });
  }
});
profilePhotoEditPopup.setEventListeners();

// PROFILE EDIT FORM
profileEditButton.addEventListener('click', () => {
  const getValidProfileEditForm = new FormValidator(configElementsValidation, profileEditForm);
  getValidProfileEditForm.enableValidation();
  const editUserInfo = userInform.getUserInfo();
  nameInput.value = editUserInfo.name;
  quoteInput.value = editUserInfo.quote;
  profileEditPopup.openPopup();
});
//ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const profileEditPopup = new PopupWithForm({
  popup: profileEditForm,
  formSubmitHandler: data => {
  renderLoading(true, profileEditForm);
  api.patchProfileInfo(data.input_name, data.input_quote)
      .then((res) => {
        userInform.setUserInfo(res.name, res.about);
        profileEditPopup.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, profileEditForm, 'Сохранить', true);
      });
    }
});
profileEditPopup.setEventListeners();


//СДЕЛАТЬ

// ADD NEW CARDS FORM
elementsAddButton.addEventListener('click', () => {
  const getValidelementsAddForm = new FormValidator(configElementsValidation, elementsAddForm);
  getValidelementsAddForm.enableValidation();
  elementsAddPopup.openPopup(elementsAddForm);
});

const elementsAddPopup = new PopupWithForm ({
  popup: elementsAddForm,
  formSubmitHandler: data => {
  renderLoading(true, elementsAddForm);
  api.postNewCards(data.input_title, data.input_image)
      .then((res) => {
        const newCard = new Card(res, elementsTemplate, () => {
          imagePopup.openPopup(res);
        });
        elementsList.prepend(newCard.generateCard());
        elementsAddPopup.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, elementsAddForm, 'Создать', true);
      });
    }
});
elementsAddPopup.setEventListeners();

export function renderLoading(isLoading, form, text, disabled) {
  const submitButton = form.querySelector('.popup__submit-button')
  submitButton.disabled = disabled;
  submitButton.textContent = `${text}`;
  if (isLoading) {
    submitButton.textContent = 'Сохранение...';
  }
};
