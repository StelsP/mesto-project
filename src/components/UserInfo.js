export class UserInfo {
  constructor(userName, userQuote, userAvatar) {
    //Принимает в конструктор объект с
    //селекторами (!!!!!!!!!!!) двух элементов
    // со слака: Данные пользователя  должны
    //браться или из DOM элементов или из поля класса
    this._userName = userName;
    this._userQuote = userQuote;
    this._userAvatar = userAvatar;
  }

  getUserInfo() {
    // который возвращает объект (!!!!!!) с данными пользователя.
    const userInfo = {
      name: this._userName.textContent,
      quote: this._userQuote.textContent,
    }
    return userInfo;
  }

  setUserAvatar(userData) {
    this._userAvatar.src = userData.avatar;
  }

  setUserInfo(userData) {
    this._userName.textContent = userData.name;
    this._userQuote.textContent = userData.about;
    this.userId = userData._id;
  }
}
