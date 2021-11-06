import './modal.js';
import './utils.js';
import './cards.js';
import { enableValidation } from './validate.js';

enableValidation();


// ESC CLOSE POPUP (тут точно надо переделать);

import { submitPopup } from './utils.js';
import { profilePhotoEditForm,  profileEditForm, elementsAddForm, image} from './variables.js';

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    submitPopup(profilePhotoEditForm);
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    submitPopup(profileEditForm);
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    submitPopup(elementsAddForm);
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    submitPopup(image);
  }
});



