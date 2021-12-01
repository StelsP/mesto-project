export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }
  //Содержит публичный метод addItem,
  //который принимает DOM-элемент и
  //добавляет его в контейнер.
  addItem(element) {
        this._container.append(element);
  }
  //Содержит публичный метод, который
  //отвечает за отрисовку всех элементов.
  renderingItems() {
    this._renderedItems.forEach(card => {
      this._renderer(card);
    });
  }
}


