export class UserInfo {
  constructor(userName, userQuote, userAvatar, userId) {
    //Принимает в конструктор объект с
    //селекторами (!!!!!!!!!!!) двух элементов
    // со слака: Данные пользователя  должны
    //браться или из DOM элементов или из поля класса
    this._userName = userName;
    this._userQuote = userQuote;
    this._userId = userId;
    this._userAvatar = userAvatar;
    console.log(userName)
  }

  getUserInfo() {
    // который возвращает объект (!!!!!!) с данными пользователя.
    const userInfo = {
      name: this._userName.textContent,
      quote: this._userQuote.textContent,
    }
    return userInfo;
  }

  setUserInfo(userData) {
    this._userName.textContent = userData.name;
    this._userQuote.textContent = userData.about;
    this._userId = userData._id;
    this._userAvatar.src = userData.avatar;
  }
}
