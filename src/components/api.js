// GET USER DATA
export function addProfileInfo() {
  fetch('https://mesto.nomoreparties.co/v1/plus-cohort-3/users/me', {
  headers: {
    authorization: 'bb5f0ee9-ef64-4836-93fe-6fc2439d86be',
    'Content-Type': 'application/json; charset=UTF-8'
    }
  })
  .then(res => res.json())
  .then((res) => {
    profileName.textContent = res.name;
    profileQuote.textContent = res.about;
  });
}
const elementsDeleteButtons = Array.from(document.querySelectorAll('.elements__delete-button'));
// GET CARDS DATA
import { elementsList } from "./var";
import { createCard } from "./cards";
export function createInitialCards() {
  fetch('https://mesto.nomoreparties.co/v1/plus-cohort-3/cards', {
  headers: {
    authorization: 'bb5f0ee9-ef64-4836-93fe-6fc2439d86be',
    'Content-Type': 'application/json; charset=UTF-8'
  }
  })
  .then(res => res.json())
  .then((res) => {
    res.forEach(function(item) {
      elementsList.append(createCard(item));
    });
  })
}

// PATCH USER DATA
import { profileName, profileQuote } from './var.js'

export function patchProfileInfo(name, quote) {
  fetch('https://mesto.nomoreparties.co/v1/plus-cohort-3/users/me', {
    method: 'PATCH',
    headers: {
    authorization: 'bb5f0ee9-ef64-4836-93fe-6fc2439d86be',
    'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      name: name.value,
      about: quote.value
    })
  })
}

// POST NEW CARD
export function postNewCards(name, link) {
  fetch('https://mesto.nomoreparties.co/v1/plus-cohort-3/cards', {
    method: 'POST',
    headers: {
    authorization: 'bb5f0ee9-ef64-4836-93fe-6fc2439d86be',
    'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      name: name.value,
      link: link.value
    })
  })
  .then(res => res.json())
  .then((res) => {
    elementsList.append(createCard({
      name: res.name,
      link: res.link
    }));
  });
}


