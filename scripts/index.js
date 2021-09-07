// PROFILE EDIT

const profileEditForm = document.querySelector('.popup_type_profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('.popup__close-button_type_profile');

const nameInput = document.querySelector('.popup__input_type_name');
const quoteInput = document.querySelector('.popup__input_type_quote');
const profileName = document.querySelector('.profile__name');
const profileQuote = document.querySelector('.profile__quote');

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  quoteInput.value = profileQuote.textContent;
  openPopup(profileEditForm);
});

profileCloseButton.addEventListener('click', () => {
  closePopup(profileEditForm);
});

profileEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    closePopup(profileEditForm);
    profileName.textContent = nameInput.value;
    profileQuote.textContent = quoteInput.value;
});

// ADD START 6 CARDS

const elementsTemplate = document.querySelector('#elements__template').content;
const elementsList = document.querySelector('.elements__list');
const image = document.querySelector('.popup_type_picture');

const cardData = {};

initialCards.forEach(function(item, i, initialCards) {
  cardData.name = initialCards[i].name;
  cardData.link = initialCards[i].link;
  elementsList.prepend(createCard(cardData));
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

function setImageClickEventListener(title, pic, card) {
  const imageLink = card.querySelector('.elements__image');
  imageLink.addEventListener('click', () => {
    openPopup(image);
    image.querySelector('.image__pic').src = pic;
    image.querySelector('.image__pic').alt = 'Фото' + ' ' + title;
    image.querySelector('.image__title').textContent = title;
  });
}

const imageCloseButton = document.querySelector('.popup__close-button_type_picture');
imageCloseButton.addEventListener('click', () => {
  closePopup(image);
});

// ADD NEW CARDS

const elementsAddForm = document.querySelector('.popup_type_card-add');

const elementsAddButton = document.querySelector('.profile__add-button');
const elementsCloseButton = document.querySelector('.popup__close-button_type_card-add');

const imageInput = document.querySelector('.popup__input_type_image');
const titleInput = document.querySelector('.popup__input_type_title');

function clearAddFormInputs() {
  titleInput.value = '';
  imageInput.value = '';
}

elementsAddButton.addEventListener('click', () => {
  openPopup(elementsAddForm);
});

elementsCloseButton.addEventListener('click', () => {
  closePopup(elementsAddForm);
});

elementsAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
    closePopup(elementsAddForm);
    cardData.name = titleInput.value;
    cardData.link = imageInput.value;
    elementsList.prepend(createCard(cardData));
    clearAddFormInputs();
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

// OPEN/CLOSE POPUP

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

