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
  editPhotoButton,
  buttonProfilePhotoEdit
  } from '../components/var.js';
import './index.css';
import { Card } from '../components/cards.js';
import { Section } from '../components/section.js';
import { FormValidator } from '../components/validate.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/popupWithImage.js';
import { PopupWithForm } from '../components/popupWithform.js';

//кнопка редактирования изображения профайла
editPhotoButton.addEventListener('mouseover', (evt) => {
  if (evt.target.classList.contains('profile__edit-photo') || evt.target.classList.contains('profile__edit-photo-button')) buttonProfilePhotoEdit.style.visibility = 'visible';
})

editPhotoButton.addEventListener('mouseout', (evt) => {
  if (evt.target.classList.contains('profile__edit-photo') || evt.target.classList.contains('profile__edit-photo-button'))
  buttonProfilePhotoEdit.style.visibility = 'hidden';
})

export const imagePopup = new PopupWithImage(image);
imagePopup.setEventListeners();

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
          imagePopup.open(item);
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

// PROFILE PHOTO EDIT FORM
buttonProfilePhotoEdit.addEventListener('click', () => {
  const getValidProfilePhotoEditForm = new FormValidator(configElementsValidation, profilePhotoEditForm);
  getValidProfilePhotoEditForm.enableValidation();
  profilePhotoEditPopup.open();
});
// PROFILE EDIT FORM
profileEditButton.addEventListener('click', () => {
  const getValidProfileEditForm = new FormValidator(configElementsValidation, profileEditForm);
  getValidProfileEditForm.enableValidation();
  const editUserInfo = userInform.getUserInfo();
  nameInput.value = editUserInfo.name;
  quoteInput.value = editUserInfo.quote;
  profileEditPopup.open();
});
// ADD NEW CARDS FORM
elementsAddButton.addEventListener('click', () => {
  const getValidelementsAddForm = new FormValidator(configElementsValidation, elementsAddForm);
  getValidelementsAddForm.enableValidation();
  elementsAddPopup.open(elementsAddForm);
});
//ПОПАП РЕДАКТИРОВАНИЕ ФОТО ПРОФИЛЯ
const profilePhotoEditPopup = new PopupWithForm({
  selector: profilePhotoEditForm,
  formSubmitHandler: data => {
    renderLoading(true, profilePhotoEditForm);
      api.patchProfilePhoto(data.input_photo)
        .then(res => {
          profilePhotoEditButton.src = res.avatar;
          profilePhotoEditPopup.close();
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
//ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const profileEditPopup = new PopupWithForm({
  selector: profileEditForm,
  formSubmitHandler: data => {
  renderLoading(true, profileEditForm);
  api.patchProfileInfo(data.input_name, data.input_quote)
      .then((res) => {
        userInform.setUserInfo(res.name, res.about);
        profileEditPopup.close();
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
// ADD NEW CARDS FORM
const elementsAddPopup = new PopupWithForm ({
  selector: elementsAddForm,
  formSubmitHandler: data => {
  renderLoading(true, elementsAddForm);
  api.postNewCards(data.input_title, data.input_image)
      .then((res) => {
        const newCard = new Card(res, elementsTemplate, () => {
          imagePopup.open(res);
        });
        elementsList.prepend(newCard.generateCard());
        elementsAddPopup.close();
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

