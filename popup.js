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
  const elementsCell = elementsTemplate.querySelector('.elements__cell').cloneNode(true);
  elementsCell.querySelector('.elements__image').src = initialCards[i].link;
  elementsCell.querySelector('.elements__name').textContent = initialCards[i].name;
  elementsList.append(elementsCell);
}

// PROFILE EDIT

const profileEditForm = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('.popup__close-button');

const nameInput = document.querySelector('.popup__input_type_name');
const quoteInput = document.querySelector('.popup__input_type_quote');
const profileName = document.querySelector('.profile__name');
const profileQuote = document.querySelector('.profile__quote');

function clearProfilePlaceholder() {
  nameInput.value = '';
  quoteInput.value = '';
  nameInput.placeholder = profileName.textContent;
  quoteInput.placeholder = profileQuote.textContent;
  nameInput.classList.remove('popup__input_error');
  quoteInput.classList.remove('popup__input_error');
}
profileEditButton.addEventListener('click', () => {
  profileEditForm.classList.add('popup_opened');
});
profileCloseButton.addEventListener('click', () => {
  profileEditForm.classList.remove('popup_opened');
  clearProfilePlaceholder();
});
profileEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (nameInput.value !== '' && quoteInput.value !== '') {
    profileEditForm.classList.remove('popup_opened');
    profileName.textContent = nameInput.value;
    profileQuote.textContent = quoteInput.value;
    clearProfilePlaceholder();
    } else {
      nameInput.classList.add('popup__input_error');
      quoteInput.classList.add('popup__input_error');
    }
});

// ADD NEW CARDS

const elementsAddForm = document.querySelector('#popup-el');
const elementsAddButton = document.querySelector('.profile__add-button');
const elementsCloseButton = document.querySelector('#popup-el-close-btn');

const titleInput = document.querySelector('.popup__input_type_title');
const imageInput = document.querySelector('.popup__input_type_image');

function clearElementsPlaceholder() {
  titleInput.value = '';
  imageInput.value = '';
  titleInput.classList.remove('popup__input_error');
  imageInput.classList.remove('popup__input_error');
}
elementsAddButton.addEventListener('click', () => {
  elementsAddForm.classList.add('popup_opened');
});
elementsCloseButton.addEventListener('click', () => {
  elementsAddForm.classList.remove('popup_opened');
  clearElementsPlaceholder();
});
elementsAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (titleInput.value !== '' && imageInput.value !== '') {
    elementsAddForm.classList.remove('popup_opened');

    const elementsCell = elementsTemplate.querySelector('.elements__cell').cloneNode(true);
    elementsCell.querySelector('.elements__image').src = imageInput.value;
    elementsCell.querySelector('.elements__name').textContent = titleInput.value;
    elementsList.prepend(elementsCell);

    clearElementsPlaceholder();
  } else {
    titleInput.classList.add('popup__input_error');
    imageInput.classList.add('popup__input_error');
  }
});








