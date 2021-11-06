// OPEN/CLOSE/SUBMIT POPUP

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup, btn, event) {
  const isCloseButtonClicked = event.target.classList.contains(btn);
  const isOverlayClicked = event.target.classList.contains('popup');

  if (isCloseButtonClicked || isOverlayClicked) {
    submitPopup(popup);
  }
}
// (тут точно надо переименовывать или переделывать);
function submitPopup(popup) {
  popup.classList.remove('popup_opened');
}

const closeWithClick = (e) => {

}

const  closeWithEscape = (e) => {

}


export { openPopup, closePopup, submitPopup }

// ESC CLOSE POPUP (тут точно надо переделать);

// import { submitPopup } from './utils.js';
// import { profilePhotoEditForm,  profileEditForm, elementsAddForm, image} from './variables.js';

// document.addEventListener('keydown', function (evt) {
//   if (evt.key === 'Escape') {
//     submitPopup(profilePhotoEditForm);
//   }
// });

// document.addEventListener('keydown', function (evt) {
//   if (evt.key === 'Escape') {
//     submitPopup(profileEditForm);
//   }
// });

// document.addEventListener('keydown', function (evt) {
//   if (evt.key === 'Escape') {
//     submitPopup(elementsAddForm);
//   }
// });

// document.addEventListener('keydown', function (evt) {
//   if (evt.key === 'Escape') {
//     submitPopup(image);
//   }
// });
