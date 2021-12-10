let userId;
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
  buttonProfilePhotoEdit,
  elementsLikeButtonActive
  } from '../utils/var.js';
import './index.css';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

//кнопка редактирования изображения профайла
editPhotoButton.addEventListener('mouseover', (evt) => {
  if (evt.target.classList.contains('profile__edit-photo') || evt.target.classList.contains('profile__edit-photo-button')) buttonProfilePhotoEdit.style.visibility = 'visible';
})

editPhotoButton.addEventListener('mouseout', (evt) => {
  if (evt.target.classList.contains('profile__edit-photo') || evt.target.classList.contains('profile__edit-photo-button'))
  buttonProfilePhotoEdit.style.visibility = 'hidden';
})

export const imagePopup = new PopupWithImage('.popup_type_picture');
imagePopup.setEventListeners();

function createCard (item, elementsTemplate, render, userId, elementsLikeButtonActive, api) {
  const card = new Card(item, elementsTemplate, () => {
    imagePopup.open(item);
    }, userInform.userId, elementsLikeButtonActive, api);
  const cardElement = card.generateCard();
  // addInitialCards.addItem(cardElement);
  return cardElement;
}
// GET PROFILE/CARDS INFO
Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userInform.setUserInfo(userData);
    userInform.setUserAvatar(userData);
    addInitialCards.renderingItems(cardData);

  })
  .catch((err) => {
    console.log(err);
  });

  const addInitialCards = new Section(
    item => {
      const card = createCard(item, elementsTemplate, () => {
        imagePopup.open(item);
        }, userInform.userId, elementsLikeButtonActive, api);
      addInitialCards.addItem(card);
    },
    '.elements__list'
  );

  const userInform = new UserInfo(profileName, profileQuote, profilePhotoEditButton);
  const getValidProfilePhotoEditForm = new FormValidator(configElementsValidation, profilePhotoEditForm);
  getValidProfilePhotoEditForm.enableValidation();
  const getValidProfileEditForm = new FormValidator(configElementsValidation, profileEditForm);
  getValidProfileEditForm.enableValidation();
  const getValidelementsAddForm = new FormValidator(configElementsValidation, elementsAddForm);
  getValidelementsAddForm.enableValidation();
// PROFILE PHOTO EDIT FORM
buttonProfilePhotoEdit.addEventListener('click', () => {
  profilePhotoEditPopup.open();
});
// PROFILE EDIT FORM
profileEditButton.addEventListener('click', () => {
  const { name, quote } = userInform.getUserInfo();
  nameInput.value = name;
  quoteInput.value = quote;
  profileEditPopup.open();
});
// ADD NEW CARDS FORM
elementsAddButton.addEventListener('click', () => {
  elementsAddPopup.open();
});
//ПОПАП РЕДАКТИРОВАНИЕ ФОТО ПРОФИЛЯ
const profilePhotoEditPopup = new PopupWithForm({
  selector: '.popup_type_photo',
  formSubmitHandler: data => {
    renderLoading(true, profilePhotoEditForm);
      api.patchProfilePhoto(data.input_photo)
        .then(res => {
          // userInform.setUserInfo(res);
          userInform.setUserAvatar(res);
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
  selector: '.popup_type_profile',
  formSubmitHandler: data => {
  renderLoading(true, profileEditForm);
  api.patchProfileInfo(data.input_name, data.input_quote)
      .then((res) => {
        userInform.setUserInfo(res);
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
  selector: '.popup_type_card-add',
  formSubmitHandler: data => {
  renderLoading(true, elementsAddForm);
  api.postNewCards(data.input_title, data.input_image)
      .then((res) => {
        const newCard = createCard(res, elementsTemplate, () => {
          imagePopup.open(res);
        }, userInform.userId, elementsLikeButtonActive, api);
        addInitialCards.prependItem(newCard);
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

