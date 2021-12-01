export let userId;
let data;
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
  elementsTemplate,
  configElementsValidation,
  } from '../components/var.js';
import { enableValidation } from '../components/validate.js';
import './index.css';
import { Card } from '../components/cards.js';
import { Section } from '../components/section.js';
import {FormValidator} from '../components/validate';

// GET PROFILE/CARDS INFO
Promise.all([api.getProfileInfo(), api.getInitialCards()])
.then(([userData, cardData]) => {
  profilePhotoEditButton.src = userData.avatar;
  profileName.textContent = userData.name;
  profileQuote.textContent = userData.about;
  userId = userData._id;

  const addInitialCards = new Section({
    items: cardData,
    renderer: (item) => {
      const card = new Card(item, elementsTemplate);
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
imageCloseButton.addEventListener('click', () => {
  imagePopup.closePopup(image);
});

// PROFILE PHOTO EDIT FORM
profilePhotoEditButton.addEventListener('click', () => {
  const getValidProfilePhotoEditForm = new FormValidator(configElementsValidation, profilePhotoEditForm);
  getValidProfilePhotoEditForm.enableValidation();
  console.log(getValidProfilePhotoEditForm);
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
        const newCard = new Card(res, elementsTemplate);
        elementsList.prepend(newCard.generateCard());
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





