const editButton = document.querySelector('.profile__edit-button');
const closeButtonPopup = document.querySelector('.popup__close-button');
const submitButtonPopup = document.querySelector('.popup__submit-button');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileQuote = document.querySelector('.profile__quote');
const inputName = document.querySelector('.popup__input_type_name');
const inputQuote = document.querySelector('.popup__input_type_quote');


function clearProfilePlaceholder() {
  inputName.value = '';
  inputQuote.value = '';
  inputName.placeholder = profileName.textContent;
  inputQuote.placeholder = profileQuote.textContent;
  inputName.classList.remove('popup__input_error');
  inputQuote.classList.remove('popup__input_error');
}

function profileButtons() {
  editButton.addEventListener('click', () => {
    popup.classList.add('popup_opened');
  });

  closeButtonPopup.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
    clearProfilePlaceholder();
  });

  submitButtonPopup.addEventListener('click', () => {
    if (inputName.value !== '' && inputQuote.value !== '') {
      popup.classList.remove('popup_opened');
      profileName.textContent = inputName.value;
      profileQuote.textContent = inputQuote.value;
      clearProfilePlaceholder();
    } else {
      inputName.classList.add('popup__input_error');
      inputQuote.classList.add('popup__input_error');
    }
  });
}
profileButtons();

const popupElements = document.querySelector('.popup__elements');

function elementsButtons() {
  const addButtonElements = document.querySelector('.profile__add-button');
  const closeButtonElementsCell = document.querySelector('.popup__close-button-cell');

  addButtonElements.addEventListener('click', () => {
    popupElements.classList.add('popup_opened');
  });

  closeButtonElementsCell.addEventListener('click', () => {
    popupElements.classList.remove('popup_opened');
  });
}
elementsButtons();


function addElementsCell() {
  const elementsList = document.querySelector('.elements__list');
  const submitButtonElements = document.querySelector('.popup__submit-button-cell');
  const inputTitle = document.querySelector('.popup__input_type_title');
  const inputImage = document.querySelector('.popup__input_type_image');

  submitButtonElements.addEventListener('click', () => {
    if (inputTitle.value !== '') {
      popupElements.classList.remove('popup_opened');
      elementsList.insertAdjacentHTML('afterbegin', `
        <li class="elements__cell">
          <img src="${inputImage.value}" alt="фото Домбай" class="elements__image">
          <div class="elements__cell-container">
            <p class="elements__name">${inputTitle.value}</p>
            <button type="button" class="elements__like-button"></button>
          </div>
        </li>
      `);
      inputTitle.value = '';
      inputImage.value = '';
      inputTitle.classList.remove('popup__input_error');
      inputImage.classList.remove('popup__input_error');
    } else {
      inputTitle.classList.add('popup__input_error');
      inputImage.classList.add('popup__input_error');
    }
  });
}
addElementsCell();
