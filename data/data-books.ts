export interface Book {
    author: String;
    title: String;
}

export class BookData {
  _books: Array<Book>;
  
  constructor() {
    this._books = data;
  }

  get books() {
    return this._books
  }
}

const data = [
    {
      "author": "Chinua Achebe",
      "title": "Things Fall Apart",
    },
    {
      "author": "Hans Christian Andersen",
      "title": "Fairy tales",
    },
    {
      "author": "Dante Alighieri",
      "title": "The Divine Comedy",
    },
    {
      "author": "Unknown",
      "title": "The Epic Of Gilgamesh",
    },
    {
      "author": "Unknown",
      "title": "The Book Of Job",
    }
  ]