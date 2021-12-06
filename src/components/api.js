import { config } from './var.js';

export class Api {
  constructor(config) {
    this.config = config;
  }

  // CHECK RESULT
  _checkRes(res) {
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
    .then(this._checkRes)
  }

  // GET CARDS DATA
  getInitialCards() {
    return fetch(`${this.config.baseUrl}/cards`, {
      headers: this.config.headers,
    })
    .then(this._checkRes)
  }

  // PATCH USER DATA
  patchProfileInfo(name, quote) {
    return fetch(`${this.config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.config.headers,
      body: JSON.stringify({
        name: name,
        about: quote,
      }),
    })
    .then(this._checkRes)
  }

  // PATCH USER AVATAR
  patchProfilePhoto(image) {
    return fetch(`${this.config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.config.headers,
      body: JSON.stringify({
        avatar: image,
      }),
    })
    .then(this._checkRes)
  }

  // POST NEW CARD
  postNewCards(name, link) {
    return fetch(`${this.config.baseUrl}/cards`, {
      method: 'POST',
      headers: this.config.headers,
      body: JSON.stringify({
        name: name.value,
        link: link.value,
      }),
    })
    .then(this._checkRes)
  }

  // DELETE CARD
  deleteCardHandler(cardId) {
    return fetch(`${this.config.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.config.headers,
    })
    .then(this._checkRes)
  }

  // PUT LIKE
  likeHandler(cardId, method) {
    return fetch(`${this.config.baseUrl}/cards/likes/${cardId}`, {
      method: method,
      headers: this.config.headers,
    })
    .then(this._checkRes)
  }

}
