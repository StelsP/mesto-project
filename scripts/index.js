// PROFILE EDIT

const profileEditForm = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('.popup__close-button');

const nameInput = document.querySelector('.popup__input_type_name');
const quoteInput = document.querySelector('.popup__input_type_quote');
const profileName = document.querySelector('.profile__name');
const profileQuote = document.querySelector('.profile__quote');

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  quoteInput.value = profileQuote.textContent;
  openPopup(profileEditForm);
});

profileCloseButton.addEventListener('click', () => {
  closePopup(profileEditForm);
});

profileEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    closePopup(profileEditForm);
    profileName.textContent = nameInput.value;
    profileQuote.textContent = quoteInput.value;
});

// ADD START 6 CARDS

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elementsTemplate = document.querySelector('#elements__template').content;
const elementsList = document.querySelector('.elements__list');

for (let i = 0; i < initialCards.length; i++) {
  createCard(initialCards[i].name, initialCards[i].link);
  // addCard();
}

function createCard(name, link) {
  const elementsCell = elementsTemplate.querySelector('.elements__cell').cloneNode(true);

  elementsCell.querySelector('.elements__image').src = link;
  elementsCell.querySelector('.elements__image').alt = 'Фото' + ' ' + name;
  elementsCell.querySelector('.elements__name').textContent = name;
  elementsList.prepend(elementsCell);

  setDeleteCardEventListener(elementsCell);
  setLikeCardEventListener(elementsCell);
  setImageClickEventListener(name, link);
}

// OPEN/CLOSE CARD IMAGE

function setImageClickEventListener(title, pic) {
  const image = elementsTemplate.querySelector('.image');
  image.querySelector('.image__pic').src = pic;
  image.querySelector('.image__pic').alt = 'Фото' + ' ' + title;
  image.querySelector('.image__title').textContent = title;

  const imageLink = document.querySelector('.elements__image');
  imageLink.addEventListener('click', () => {
    elementsList.append(image);
  });
  removeImageClickEventListener(image);
}

function removeImageClickEventListener(image) {
  const imageCloseButton = image.querySelector('.image__close-button');
  imageCloseButton.addEventListener('click', () => {
    image.remove();
  });
}

// ADD NEW CARDS

const elementsAddForm = document.querySelector('#popup-el');

const elementsAddButton = document.querySelector('.profile__add-button');
const elementsCloseButton = document.querySelector('#popup-el-close-btn');

const imageInput = document.querySelector('.popup__input_type_image');
const titleInput = document.querySelector('.popup__input_type_title');

function clearAddFormInputs() {
  titleInput.value = '';
  imageInput.value = '';
}

elementsAddButton.addEventListener('click', () => {
  openPopup(elementsAddForm);
});

elementsCloseButton.addEventListener('click', () => {
  closePopup(elementsAddForm);
});

elementsAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    closePopup(elementsAddForm);
    createCard(titleInput.value, imageInput.value);
    clearAddFormInputs();
});

// DELETE CARDS

function setDeleteCardEventListener(card) {
  const elementsDeleteButton = card.querySelector('.elements__delete-button');
  elementsDeleteButton.addEventListener('click', () => {
    card.remove();
  });
}

// LIKE CARDS

function setLikeCardEventListener(card) {
  const elementsLikeButton = card.querySelector('.elements__like-button')
  elementsLikeButton.addEventListener('click', () => {
    elementsLikeButton.classList.toggle('elements__like-button_active');
  });
}

// OPEN/CLOSE POPUP

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

