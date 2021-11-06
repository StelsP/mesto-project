// OPEN/CLOSE/SUBMIT POPUP

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('click', closePopupWidthOverlayClick);
  document.addEventListener('keydown', closePopupWidthEscape);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('click', closePopupWidthOverlayClick);
  document.removeEventListener('keydown', closePopupWidthEscape);
}

const closePopupWidthEscape = (e) => {
  if (e.key === "Escape") {
  const popup = document.querySelector('.popup_opened');
  closePopup(popup);
  }
}

const closePopupWidthOverlayClick = (e) => {

  const isCloseButtonClicked = e.target.classList.contains('.popup__close-button');
  const isOverlayClicked = e.target.classList.contains('.popup');

  if (isCloseButtonClicked || isOverlayClicked) {
    submitPopup(popup);
  }
}

