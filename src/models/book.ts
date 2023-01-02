export class Book {
  constructor(
    private title: string,
    private author: string,
    private img_url: string
  ) {}
}

export class RedBook extends Book {
  constructor(
    title: string,
    author: string,
    img_url: string,
    private impression: string
  ) {
    super(title, author, img_url);
  }
}
