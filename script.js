const editButton = document.querySelector('.profile__edit-button');
const closeButtonPopup = document.querySelector('.popup__close-button');
const submitButtonPopup = document.querySelector('.popup__submit-button');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileQuote = document.querySelector('.profile__quote');
const inputName = document.querySelector('.popup__input_type_name');
const inputQuote = document.querySelector('.popup__input_type_quote');

function clearProfilePlaceholder () {
  inputName.value = '';
  inputQuote.value = '';
  inputName.placeholder = profileName.textContent;
  inputQuote.placeholder = profileQuote.textContent;
  inputName.classList.remove('popup__input_error');
  inputQuote.classList.remove('popup__input_error');
}

function addProfileInfo () {
  profileName.textContent = inputName.value;
  profileQuote.textContent = inputQuote.value;
}

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
    addProfileInfo ();
    clearProfilePlaceholder();
  } else {
    inputName.classList.add('popup__input_error');
    inputQuote.classList.add('popup__input_error');
  }
});

function addElementsCell() {

  const elementsList = document.querySelector('.elements__list');
  const addElementsCellButton = document.querySelector('.profile__add-button');

  addElementsCellButton.addEventListener('click', () => {

    elementsList.insertAdjacentHTML('afterbegin', `
      <li class="elements__cell">
        <img src="./images/elements__photo-3.jpg" alt="фото Домбай" class="elements__image">
        <div class="elements__cell-container">
          <p class="elements__name">Домбай</p>
          <button type="button" class="elements__like-button"></button>
        </div>
      </li>
    `);
  });
}

addElementsCell();
