// OPEN/CLOSE POPUP

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('mousedown', closePopupWidthOverlayClick);
  document.addEventListener('keydown', closePopupWidthEscape);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('mousedown', closePopupWidthOverlayClick);
  document.removeEventListener('keydown', closePopupWidthEscape);
}

const closePopupWidthEscape = (e) => {
  if (e.key === "Escape") {
  const popup = document.querySelector('.popup_opened');
  closePopup(popup);
  }
}

const closePopupWidthOverlayClick = (e) => {
  if (e.target.classList.contains('popup')) {
    closePopup(e.target);
  }
}




