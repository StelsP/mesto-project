
//В elements__image.CSS НУЖНО РАСКИДАТЬ ЛИШНИИ СТИЛИ ПО БЭМ

const editButtonProfile = document.querySelector('.profile__edit-button');
const closeButtonProfile = document.querySelector('.popup__close-button');
const submitButtonProfile = document.querySelector('.popup__submit-button');

const popup = document.querySelector('.popup');

const profileName = document.querySelector('.profile__name');
const profileQuote = document.querySelector('.profile__quote');
const inputName = document.querySelector('.popup__input_type_name');
const inputQuote = document.querySelector('.popup__input_type_quote');

const popupElements = document.querySelector('.popup__elements');

const addButtonElements = document.querySelector('.profile__add-button');
const closeButtonElements = document.querySelector('.popup__close-button-cell');
const submitButtonElements = document.querySelector('.popup__submit-button-cell');
const elementsList = document.querySelector('.elements__list');

const inputTitle = document.querySelector('.popup__input_type_title');
const inputImage = document.querySelector('.popup__input_type_image');

const imagePopupLink = document.querySelector('.elements__image-popup-link');

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

// CREATE 6 CARDS
function addDefaultElementsCell() {
  for (let i = 0; i < initialCards.length; i++) {
    console.log( initialCards[i].name);
    console.log( initialCards[i].link);

  elementsList.insertAdjacentHTML('afterbegin', `
        <li class="elements__cell">
          <img src="${initialCards[i].link}" alt="Фото" class="elements__image-popup-link elements__image">
          <div class="elements__cell-container">
            <p class="elements__name">${initialCards[i].name}</p>
            <button type="button" class="elements__like-button"></button>
          </div>
        </li>
      `);
    }
}
addDefaultElementsCell();

// МОЖЕТ ЭТО НЕ НУЖНО
// (clear inputs + input.placeholder = profile.name + clear red alert)
function clearProfilePlaceholder() {
  inputName.value = '';
  inputQuote.value = '';
  inputName.placeholder = profileName.textContent;
  inputQuote.placeholder = profileQuote.textContent;
  inputName.classList.remove('popup__input_error');
  inputQuote.classList.remove('popup__input_error');
}

// PROFILE EDIT BUTTONS
editButtonProfile.addEventListener('click', () => {
  popup.classList.add('popup_opened');
});

closeButtonProfile.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
  clearProfilePlaceholder();
});

function formSubmitHandler (evt) {
  evt.preventDefault();

  if (inputName.value !== '' && inputQuote.value !== '') {
    popup.classList.remove('popup_opened');
    profileName.textContent = inputName.value;
    profileQuote.textContent = inputQuote.value;
    clearProfilePlaceholder();
    } else {
      inputName.classList.add('popup__input_error');
      inputQuote.classList.add('popup__input_error');
    }
}
popup.addEventListener('submit', formSubmitHandler);

// ELEMENTS EDIT BUTTONS
addButtonElements.addEventListener('click', () => {
  popupElements.classList.add('popup_opened');
});

closeButtonElements.addEventListener('click', () => {
  popupElements.classList.remove('popup_opened');
});

function formSubmitHandlerElements (evt) {
  evt.preventDefault();
    if (inputTitle.value !== '' && inputImage.value !== '') {
      popupElements.classList.remove('popup_opened');
      elementsList.insertAdjacentHTML('afterbegin', `
        <li class="elements__cell">
          <img src="${inputImage.value}" alt="Фото" class="elements__image-popup-link elements__image">
          <div class="elements__cell-container">
            <p class="elements__name">${inputTitle.value}</p>
            <button type="button" class="elements__like-button"></button>
          </div>
        </li>
      `);
      inputTitle.value = '';
      inputTitle.classList.remove('popup__input_error');
      inputImage.classList.remove('popup__input_error');
    } else {
      inputTitle.classList.add('popup__input_error');
      inputImage.classList.add('popup__input_error');
    }
}
popupElements.addEventListener('submit', formSubmitHandlerElements);


// ТУТ ОТКРЫТИЕ ПОПАП КАРТИНКИ ЕЛЕМЕНТА ПРИ КЛИКЕ
function openImagePopup() {

    elementsList.insertAdjacentHTML('afterbegin', `
          <section class="popup popup_opened">
          <img src="${inputImage.value}" alt="Фото" class="elements__image-popup-link elements__image elements__image-popup">
          <p class="elements__name elements__name-popup">${inputTitle.value}</p>
          </section>
      `); // ТУТ НУЖКЕ SRC VALUE НАВЕРНО
}
imagePopupLink.addEventListener('click', openImagePopup);











