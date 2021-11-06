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

export { openPopup, closePopup, submitPopup }
