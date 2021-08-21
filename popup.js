let editButton = document.querySelector('.profile__edit-button');
let closeButtonPopup = document.querySelector('.popup__close-button');
let submitButtonPopup = document.querySelector('.popup__submit-button');

let popup = document.querySelector('.popup');

let profileName = document.querySelector('.profile__name');
let profileQuote = document.querySelector('.profile__quote');

let inputName = document.querySelector('.popup__input_type_name');
let inputQuote = document.querySelector('.popup__input_type_quote');


editButton.addEventListener('click', () => {
  popup.classList.add('popup_opened');
});

if (profileName.textContent === ('Жак-Ив Кусто')) {

  closeButtonPopup.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
    inputName.value = ('');
    inputQuote.value = ('');
    inputName.placeholder = profileName.textContent;
    inputQuote.placeholder = profileQuote.textContent;
  });

} else {
  popup.classList.remove('popup_opened');
}

submitButtonPopup.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
  profileName.textContent = (inputName.value);
  profileQuote.textContent = (inputQuote.value);
  inputName.value = ('');
  inputQuote.value = ('');
  inputName.placeholder = profileName.textContent;
  inputQuote.placeholder = profileQuote.textContent;
});






