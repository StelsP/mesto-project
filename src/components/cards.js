import { elementsTemplate, imagePic, imageTitle, image } from '../components/var.js';
import { openPopup } from './modal.js';
import { likeHandler, deleteHandler, getProfileInfo } from './api.js';
getProfileInfo()
  .then((res) => {
    console.log(res._id);
  })
// CREATE START CARDS
export function createCard(cardData) {
  const elementsCell = elementsTemplate.querySelector('.elements__cell').cloneNode(true);
  const elementsImage = elementsCell.querySelector('.elements__image');
  const elementsName = elementsCell.querySelector('.elements__name');


  elementsImage.src = cardData.link;
  elementsImage.alt = 'Фото' + ' ' + cardData.name;
  elementsName.textContent = cardData.name;

  if (cardData.likes.some((el) => el._id != cardData.owner._id)) {
    elementsCell.querySelector('.elements__delete-button').style.display = "none";
  }

  setDeleteCardEventListener(elementsCell);
  setLikeCardEventListener(cardData, elementsCell);
  setImageClickEventListener(cardData.name, cardData.link, elementsCell);

  return elementsCell;
};

// DELETE CARDS
function setDeleteCardEventListener(card) {
  const elementsDeleteButton = card.querySelector('.elements__delete-button');
  elementsDeleteButton.addEventListener('click', () => {
    card.remove();
  });
};

// LIKE CARDS
function setLikeCardEventListener(cardData, card) {
  const elementsLikeCounter = card.querySelector('.elements__like-counter');
  const elementsLikeButton = card.querySelector('.elements__like-button');
  elementsLikeCounter.textContent = cardData.likes.length.toString();
  if (cardData.likes.some((el) => el._id == cardData.owner._id)) {
    elementsLikeButton.classList.add('elements__like-button_active');
  }

  elementsLikeButton.addEventListener('click', () => {
    if (!elementsLikeButton.classList.contains('elements__like-button_active')) {
      likeHandler(cardData._id)
      .then((res) => {
        elementsLikeButton.classList.add('elements__like-button_active');
        cardData.likes = res.likes;
        elementsLikeCounter.textContent = cardData.likes.length.toString();

      })
    } else {
      deleteHandler(cardData._id)
      .then((res) => {
        elementsLikeButton.classList.remove('elements__like-button_active');
        cardData.likes = res.likes;
        elementsLikeCounter.textContent = cardData.likes.length.toString();

      })
    }
  });
};


// OPEN FULLSCREEN CARD IMAGE
function setImageClickEventListener(name, link, card) {
  const imageLink = card.querySelector('.elements__image');
  imageLink.addEventListener('click', () => {
    openPopup(image);
    imagePic.src = link;
    imagePic.alt = 'Фото' + ' ' + name;
    imageTitle.textContent = name;
  });
};





