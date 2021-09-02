// PROFILE EDIT

const profileEditForm = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('.popup__close-button');

const nameInput = document.querySelector('.popup__input_type_name');
const quoteInput = document.querySelector('.popup__input_type_quote');
const profileName = document.querySelector('.profile__name');
const profileQuote = document.querySelector('.profile__quote');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function clearProfilePlaceholder() {
  nameInput.placeholder = profileName.textContent;
  quoteInput.placeholder = profileQuote.textContent;
  nameInput.classList.remove('popup__input_error');
  quoteInput.classList.remove('popup__input_error');
}

profileEditButton.addEventListener('click', () => {
  openPopup(profileEditForm);
});

profileCloseButton.addEventListener('click', () => {
  closePopup(profileEditForm);
  clearProfilePlaceholder();
});

profileEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (nameInput.value !== '' && quoteInput.value !== '') {
    closePopup(profileEditForm);
    profileName.textContent = nameInput.value;
    profileQuote.textContent = quoteInput.value;
    clearProfilePlaceholder();
    } else {
      nameInput.classList.add('popup__input_error');
      quoteInput.classList.add('popup__input_error');
  }
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
  addCard(initialCards[i].name, initialCards[i].link);
}

function addCard(name, link) {
  const elementsCell = elementsTemplate.querySelector('.elements__cell').cloneNode(true);
  elementsCell.querySelector('.elements__image').src = link;
  elementsCell.querySelector('.elements__image').alt = 'Фото' + name;
  elementsCell.querySelector('.elements__name').textContent = name;
  elementsList.prepend(elementsCell);
  deleteCard(elementsCell);
  likeCard(elementsCell);
}


// ADD NEW CARDS

const elementsAddForm = document.querySelector('#popup-el');

const elementsAddButton = document.querySelector('.profile__add-button');
const elementsCloseButton = document.querySelector('#popup-el-close-btn');

const imageInput = document.querySelector('.popup__input_type_image');
const titleInput = document.querySelector('.popup__input_type_title');

function clearElementsPlaceholder() {
  titleInput.value = '';
  imageInput.value = '';
  titleInput.classList.remove('popup__input_error');
  imageInput.classList.remove('popup__input_error');
}

elementsAddButton.addEventListener('click', () => {
  openPopup(elementsAddForm);
});

elementsCloseButton.addEventListener('click', () => {
  closePopup(elementsAddForm);
  clearElementsPlaceholder();
});

elementsAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (titleInput.value !== '' && imageInput.value !== '') {
    closePopup(elementsAddForm);
    addCard(titleInput.value, imageInput.value);
    clearElementsPlaceholder();
    } else {
      titleInput.classList.add('popup__input_error');
      imageInput.classList.add('popup__input_error');
  }
});

// DELETE CARDS

function deleteCard(card) {
  const elementsDeleteButton = card.querySelector('.elements__delete-button');
  elementsDeleteButton.addEventListener('click', () => {
    card.remove();
  });
}

// LIKE CARDS

function likeCard(card) {
  const elementsLikeButton = card.querySelector('.elements__like-button')
  elementsLikeButton.addEventListener('click', () => {
    elementsLikeButton.classList.toggle('elements__like-button_active');
  });
}

//IMAGE POPUP

