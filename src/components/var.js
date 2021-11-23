import { Api } from './api.js';


// PROFILE PHOTO EDIT FORM
export const profilePhotoEditForm = document.querySelector('.popup_type_photo');
export const profilePhotoEditButton =  document.querySelector('.profile__photo');
export const profilePhotoCloseButton = document.querySelector('.popup__close-button_type_photo');
export const photoInput = document.querySelector('.popup__input_type_photo');
export const profilePhotoForm = document.querySelector('#popup__form_type_photo');
// PROFILE EDIT FORM
export const profileEditForm = document.querySelector('.popup_type_profile');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileCloseButton = document.querySelector('.popup__close-button_type_profile');
export const nameInput = document.querySelector('.popup__input_type_name');
export const quoteInput = document.querySelector('.popup__input_type_quote');
export const profileName = document.querySelector('.profile__name');
export const profileQuote = document.querySelector('.profile__quote');
// ADD START CARDS
export const elementsList = document.querySelector('.elements__list');
// CREATE START CARDS
export const elementsTemplate = document.querySelector('#elements__template').content;
export const elementsLikeButtonActive = ('elements__like-button_active');
// ADD NEW CARDS FORM
export const elementsAddForm = document.querySelector('.popup_type_card-add');
export const elementsAddButton = document.querySelector('.profile__add-button');
export const elementsCloseButton = document.querySelector('.popup__close-button_type_card-add');
export const imageInput = document.querySelector('.popup__input_type_image');
export const titleInput = document.querySelector('.popup__input_type_title');
export const elementsForm = document.querySelector('#popup__form_type_card-add');
// OPEN FULLSCREEN CARD IMAGE
export const image = document.querySelector('.popup_type_picture');
export const imageCloseButton = document.querySelector('.popup__close-button_type_picture');
// CLOSE FULLSCREEN CARD IMAGE
export const imagePic = document.querySelector('.image__pic');
export const imageTitle = document.querySelector('.image__title');
export const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-3',
  headers: {
    authorization: 'bb5f0ee9-ef64-4836-93fe-6fc2439d86be',
    'Content-Type': 'application/json'
  }
}
export const api = new Api(config);





