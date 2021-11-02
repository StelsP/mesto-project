enableValidation();

// PROFILE PHOTO EDIT

const profilePhotoEditForm = document.querySelector('.popup_type_photo');
const profilePhotoEditButton = document.querySelector('.profile__photo');

const photoInput = document.querySelector('.popup__input_type_photo');

profilePhotoEditButton.addEventListener('click', () => {
  openPopup(profilePhotoEditForm);
});

profilePhotoEditForm.addEventListener('click', (event) => {
  closePopup(profilePhotoEditForm, `${'popup__close-button_type_photo'}`, event);
});

profilePhotoEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    submitPopup(profilePhotoEditForm);
    profilePhotoEditButton.src = photoInput.value;
});

// ESC CLOSE POPUP (тут точно надо переделать);

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

// PROFILE EDIT

const profileEditForm = document.querySelector('.popup_type_profile');
const profileEditButton = document.querySelector('.profile__edit-button');

const nameInput = document.querySelector('.popup__input_type_name');
const quoteInput = document.querySelector('.popup__input_type_quote');
const profileName = document.querySelector('.profile__name');
const profileQuote = document.querySelector('.profile__quote');

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  quoteInput.value = profileQuote.textContent;
  openPopup(profileEditForm);
});

profileEditForm.addEventListener('click', (event) => {
  closePopup(profileEditForm, `${'popup__close-button_type_profile'}`, event);
});

profileEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    submitPopup(profileEditForm);
    profileName.textContent = nameInput.value;
    profileQuote.textContent = quoteInput.value;
});

// ADD START 6 CARDS

const elementsTemplate = document.querySelector('#elements__template').content;
const elementsList = document.querySelector('.elements__list');
const image = document.querySelector('.popup_type_picture');

initialCards.forEach(function(item) {
  elementsList.prepend(createCard(item));
});

function createCard(cardData) {
  const elementsCell = elementsTemplate.querySelector('.elements__cell').cloneNode(true);

  elementsCell.querySelector('.elements__image').src = cardData.link;
  elementsCell.querySelector('.elements__image').alt = 'Фото' + ' ' + cardData.name;
  elementsCell.querySelector('.elements__name').textContent = cardData.name;

  setDeleteCardEventListener(elementsCell);
  setLikeCardEventListener(elementsCell);
  setImageClickEventListener(cardData.name, cardData.link, elementsCell);

  return elementsCell;
}

// OPEN/CLOSE CARD IMAGE

function setImageClickEventListener(name, link, card) {
  const imageLink = card.querySelector('.elements__image');
  imageLink.addEventListener('click', () => {
    openPopup(image);
    image.querySelector('.image__pic').src = link;
    image.querySelector('.image__pic').alt = 'Фото' + ' ' + name;
    image.querySelector('.image__title').textContent = name;
  });
}

image.addEventListener('click', (event) => {
  closePopup(image, `${'popup__close-button_type_picture'}`, event);
});

// ADD NEW CARDS

const elementsAddForm = document.querySelector('.popup_type_card-add');
const elementsAddButton = document.querySelector('.profile__add-button');
const imageInput = document.querySelector('.popup__input_type_image');
const titleInput = document.querySelector('.popup__input_type_title');

elementsAddButton.addEventListener('click', () => {
  openPopup(elementsAddForm);
});

elementsAddForm.addEventListener('click', (event) => {
  closePopup(elementsAddForm, `${'popup__close-button_type_card-add'}`, event);
});

elementsAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    submitPopup(elementsAddForm);
    elementsList.prepend(createCard({
      name: titleInput.value,
      link: imageInput.value
    }));
  document.querySelector('#popup__form_type_card-add').reset();
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


