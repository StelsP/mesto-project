fetch('https://mesto.nomoreparties.co/v1/plus-cohort-3/users/me', {
  headers: {
    authorization: 'bb5f0ee9-ef64-4836-93fe-6fc2439d86be'
  }
})
  .then(res => res.json())
  .then((res) => {
    console.log(res);
  });
