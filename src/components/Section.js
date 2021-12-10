export class Section {
  constructor(renderer, selector) {

    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }
  //Содержит публичный метод addItem,
  //который принимает DOM-элемент и
  //добавляет его в контейнер.
  addItem(element) {
    this._container.append(element);
  }
  //Содержит публичный метод, который
  //отвечает за отрисовку всех элементов.
  renderingItems(items) {
    items.forEach(card => {
      this._renderer(card);
    });
  }

  prependItem(element) {
    this._container.prepend(element);
  }
}


