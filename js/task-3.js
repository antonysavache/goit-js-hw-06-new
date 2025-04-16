// Задача 3. Конструктор строк

class StringBuilder {
  // Приватное свойство для хранения строки
  #value;
  
  constructor(initialValue) {
    this.#value = initialValue;
  }
  
  // Метод для получения текущего значения строки
  getValue() {
    return this.#value;
  }
  
  // Метод для добавления строки в конец
  padEnd(str) {
    this.#value = this.#value + str;
  }
  
  // Метод для добавления строки в начало
  padStart(str) {
    this.#value = str + this.#value;
  }
  
  // Метод для добавления строки в начало и в конец
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="