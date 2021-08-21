console.log('hello from popup.js');

let editButton = document.querySelector('.profile__edit-button');
console.log(editButton);

let popup = document.querySelector('.popup');
let closeButtonPopup = document.querySelector('.popup__close-button');

editButton.addEventListener('click', () => {
  popup.classList.add('popup_opened');
});

closeButtonPopup.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
});
