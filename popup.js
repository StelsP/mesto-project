function addStartElements() {
  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  for (let i = 0; i < initialCards.length; i++) {
    const elementsList = document.querySelector('.elements__list');

    const elementsCell = document.createElement('li');
    elementsCell.classList.add('elements__cell');

    const elementsImage = document.createElement('img');
    elementsImage.classList.add('elements__image');
    elementsImage.setAttribute('src', initialCards[i].link);

    const elementsCellContainer = document.createElement('div');
    elementsCellContainer.classList.add('elements__cell-container');

    const elementsName = document.createElement('p');
    elementsName.classList.add('elements__name');
    elementsName.textContent = initialCards[i].name;

    const elementsLikeButton = document.createElement('button');
    elementsLikeButton.classList.add('elements__like-button');
    elementsLikeButton.setAttribute('type', 'button');

    elementsCellContainer.append(elementsName, elementsLikeButton);
    elementsCell.append(elementsImage, elementsCellContainer);
    elementsList.append(elementsCell);
  }
}
addStartElements();





