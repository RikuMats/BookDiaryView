export class Book {
  constructor(
    private title: string,
    private author: string,
    private publisher: string,
    private ISBN: string,
    private img_url: string
  ) {}
}

export class RedBook extends Book {
  constructor(
    ISBN: string,
    title: string,
    author: string,
    publisher: string,
    img_url: string,
    private impression: string,
    private date: Date
  ) {
    super(title, author, publisher, ISBN, img_url);
  }
}
