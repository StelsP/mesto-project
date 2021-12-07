export class UserInfo {
  constructor(userName, userQuote) {
    //Принимает в конструктор объект с
    //селекторами (!!!!!!!!!!!) двух элементов
    // со слака: Данные пользователя  должны
    //браться или из DOM элементов или из поля класса
    this._userName = userName;
    this._userQuote = userQuote;
  }

  getUserInfo() {
    // который возвращает объект (!!!!!!) с данными пользователя.
    const userInfo = {
      name: this._userName.textContent,
      quote: this._userQuote.textContent,
    }
    return userInfo;
  }

  setUserInfo(name, quote) {
    this._userName.textContent = name;
    this._userQuote.textContent = quote;
  }
}
