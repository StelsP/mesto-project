// // GET USER DATA
// fetch('https://mesto.nomoreparties.co/v1/plus-cohort-3/users/me', {
//   headers: {
//     authorization: 'bb5f0ee9-ef64-4836-93fe-6fc2439d86be',
//     'Content-Type': 'application/json; charset=UTF-8'
//     }
// })
//   .then(res => res.json())
//   .then((res) => {
//      console.log(res);
//   });

// GET CARDS DATA
import { elementsList } from "./var";
import { createCard } from "./cards";
export function getInitialCards() {
  fetch('https://mesto.nomoreparties.co/v1/plus-cohort-3/cards', {
  headers: {
    authorization: 'bb5f0ee9-ef64-4836-93fe-6fc2439d86be',
    'Content-Type': 'application/json; charset=UTF-8'
  }
})
  .then(res => res.json())
  .then((res) => {
    res.forEach(function(item) {
      elementsList.prepend(createCard(item));
    });
  });
}

getInitialCards();



