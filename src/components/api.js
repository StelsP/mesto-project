import { config } from './var.js';

export class Api {
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
    .then(this.checkRes)
  }

  // GET CARDS DATA
  getInitialCards() {
    return fetch(`${this.config.baseUrl}/cards`, {
      headers: this.config.headers,
    })
    .then(this.checkRes)
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
    .then(this.checkRes)
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
    .then(this.checkRes)
  }

  // POST NEW CARD
  exporpostNewCards(name, link) {
    return fetch(`${this.config.baseUrl}/cards`, {
      method: 'POST',
      headers: this.config.headers,
      body: JSON.stringify({
        name: name.value,
        link: link.value,
      }),
    })
    .then(this.checkRes)
  }

  // DELETE CARD
  deleteCardHandler(cardId) {
    return fetch(`${this.config.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.config.headers,
    })
    .then(this.checkRes)
  }

  // PUT LIKE
  likeHandler(cardId, method) {
    return fetch(`${this.config.baseUrl}/cards/likes/${cardId}`, {
      method: method,
      headers: this.config.headers,
    })
    .then(this.checkRes)
  }

}




