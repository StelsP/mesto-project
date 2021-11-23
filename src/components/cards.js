import { elementsTemplate, imagePic, imageTitle, image, elementsLikeButtonActive, api, imagePopup } from '../components/var.js';
import { userId } from '../pages/index.js';
import { Popup } from './popup.js';


// CREATE START CARDS
export function createCard(cardData) {
  const elementsCell = elementsTemplate.querySelector('.elements__cell').cloneNode(true);
  const elementsImage = elementsCell.querySelector('.elements__image');
  const elementsName = elementsCell.querySelector('.elements__name');

  elementsImage.src = cardData.link;
  elementsImage.alt = 'Фото' + ' ' + cardData.name;
  elementsName.textContent = cardData.name;

  if (cardData.owner._id != userId) {
    elementsCell.querySelector('.elements__delete-button').style.display = "none";
  }

  setDeleteCardEventListener(cardData, elementsCell);
  setLikeCardEventListener(cardData, elementsCell);
  setImageClickEventListener(cardData.name, cardData.link, elementsCell);

  return elementsCell;
};

// DELETE CARDS
function setDeleteCardEventListener(cardData, card) {
  const elementsDeleteButton = card.querySelector('.elements__delete-button');
  elementsDeleteButton.addEventListener('click', () => {
    api.deleteCardHandler(cardData._id)
      .then(() => {
        card.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

// LIKE CARDS
function setLikeCardEventListener(cardData, card) {
  const elementsLikeCounter = card.querySelector('.elements__like-counter');
  const elementsLikeButton = card.querySelector('.elements__like-button');
  elementsLikeCounter.textContent = cardData.likes.length.toString();
  if (cardData.likes.some((el) => el._id == userId)) {
    elementsLikeButton.classList.add(elementsLikeButtonActive);
  }
  elementsLikeButton.addEventListener('click', () => {
    if (!elementsLikeButton.classList.contains(elementsLikeButtonActive)) {
      api.likeHandler(cardData._id, 'PUT')
        .then((res) => {
          elementsLikeButton.classList.add(elementsLikeButtonActive);
          cardData.likes = res.likes;
          elementsLikeCounter.textContent = res.likes.length.toString();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api.likeHandler(cardData._id, 'DELETE')
        .then((res) => {
          elementsLikeButton.classList.remove(elementsLikeButtonActive);
          cardData.likes = res.likes;
          elementsLikeCounter.textContent = res.likes.length.toString();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};

// OPEN FULLSCREEN CARD IMAGE
function setImageClickEventListener(name, link, card) {
  const imageLink = card.querySelector('.elements__image');
  imageLink.addEventListener('click', () => {
    imagePopup.openPopup(image);
    imagePic.src = link;
    imagePic.alt = 'Фото' + ' ' + name;
    imageTitle.textContent = name;
  });
};





