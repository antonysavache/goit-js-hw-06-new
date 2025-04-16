// Задача 2. Склад

class Storage {
  // Приватное свойство для хранения товаров
  #items;
  
  constructor(items) {
    this.#items = items;
  }
  
  // Метод для получения всех товаров
  getItems() {
    return this.#items;
  }
  
  // Метод для добавления товара
  addItem(newItem) {
    this.#items.push(newItem);
  }
  
  // Метод для удаления товара
  removeItem(itemToRemove) {
    const itemIndex = this.#items.indexOf(itemToRemove);
    if (itemIndex !== -1) {
      this.#items.splice(itemIndex, 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]