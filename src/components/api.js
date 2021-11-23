import { config } from './var.js'

export default class Api {
  constructor(config) {
    this.config = config;
  }

  // CHECK RESULT
  checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status + " - " + res.statusText}`);
  }

  // GET USER DATA
  getProfileInfo() {
    return fetch(`${this.config.baseUrl}/users/me`, {
      headers: this.config.headers,
    })
    .then(checkRes)
  }

  // GET CARDS DATA
  getInitialCards() {
    return fetch(`${this.config.baseUrl}/cards`, {
      headers: this.config.headers,
    })
    .then(checkRes)
  }

  // PATCH USER DATA
  patchProfileInfo(name, quote) {
    return fetch(`${this.config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.config.headers,
      body: JSON.stringify({
        name: name.value,
        about: quote.value
      }),
    })
    .then(checkRes)
  }

  // PATCH USER AVATAR
  patchProfilePhoto(image) {
    return fetch(`${this.config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.config.headers,
      body: JSON.stringify({
        avatar: image.value,
      }),
    })
    .then(checkRes)
  }

  // POST NEW CARD
  exporpostNewCards(name, link) {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
        name: name.value,
        link: link.value,
      }),
    })
    .then(checkRes)
  }

  // DELETE CARD
  deleteCardHandler(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: config.headers,
    })
    .then(checkRes)
  }

  // PUT LIKE
  likeHandler(cardId, method) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: method,
      headers: config.headers,
    })
    .then(checkRes)
  }

}




