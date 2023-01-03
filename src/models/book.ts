export class Book {
  constructor(
    private isbn: string,
    private title: string,
    private author: string,
    private img_url: string
  ) {}
}

export class RedBook extends Book {
  constructor(
    isbn: string,
    title: string,
    author: string,
    img_url: string,
    private impression: string
  ) {
    super(isbn, title, author, img_url);
  }
}
