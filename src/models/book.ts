export class Book {
  isbn: string;
  title: string;
  author: string;
  img_url: string;

  constructor(isbn: string, title: string, author: string, img_url: string) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.img_url = img_url;
  }
}

export class RedBook extends Book {
  impression: string;
  constructor(
    isbn: string,
    title: string,
    author: string,
    img_url: string,
    impression: string
  ) {
    super(isbn, title, author, img_url);
    this.impression = impression;
  }
  writeImpression(impression: string) {
    this.impression = impression;
  }
  static red(book: Book) {
    return new RedBook(book.isbn, book.title, book.author, book.img_url, "");
  }
}
