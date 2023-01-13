<template>
  <v-container>
    <v-row>
      welcome! {{ userName }}
      <br />
      your ID: {{ id }}
    </v-row>
    <v-row>
      <v-col>
        <BookList
          :bookList="bookList"
          @red-book="redBook"
          @add-book="addBook"
          :key="bookListKey"
      /></v-col>
      <v-col>
        <RedBookList :bookList="redBookList" :key="redBookListKey"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import BookList from "@/components/BookList.vue";
import RedBookList from "@/components/RedBookList.vue";
import { Book, RedBook } from "@/models/book";

@Component({
  components: {
    BookList,
    RedBookList,
  },
})
export default class HomeView extends Vue {
  @Prop()
  private id!: string;
  private userName!: string;
  private bookList!: Array<Book>;
  private redBookList!: Array<Book>;
  private bookListKey = 0;
  private redBookListKey = 0;
  fetchUserData() {
    //サーバにidを送り名前、未読の本、感想を書いた本を取得想定
    this.userName = "name";
    this.bookList = [
      new Book(
        "9784041117170",
        "民王シベリアの陰謀",
        "池井戸潤",
        "http://books.google.com/books/content?id=5IGKzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      ),
      new Book(
        "9784122064492",
        "花咲舞が黙ってない",
        "池井戸潤",
        "http://books.google.com/books/content?id=F-2CswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      ),
      new Book(
        "9784087716191",
        "陸王",
        "池井戸潤",
        "http://books.google.com/books/content?id=5y2DvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      ),
    ];
    this.redBookList = [
      new RedBook(
        "9784198942304",
        "アキラとあきら",
        "池井戸潤",
        "http://books.google.com/books/content?id=jo75swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "that's interesting"
      ),
      new RedBook(
        "9784167110116",
        "手紙",
        "東野圭吾",
        "http://books.google.com/books/content?id=_XH4PgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "that's fun"
      ),
    ];
  }
  created() {
    //画面作成時にデータ取得
    this.fetchUserData();
  }
  redBook(redBook: RedBook) {
    //感想が書かれたときに呼び出す
    this.redBookList.push(redBook);
    this.bookList = this.bookList.filter((v) => {
      return v.isbn !== redBook.isbn;
    });
    //強制的に再描画させるための処理（非推奨なためできれば修正）
    this.redBookListKey += 1;
    this.bookListKey += 1;
  }
  addBook(book: Book) {
    //本を検索して決定した時に呼び出し
    if (
      this.bookList.filter((v) => {
        v.isbn === book.isbn;
      }).length == 0
    ) {
      this.bookList.push(book);
    }
    this.bookListKey += 1;
  }
}
</script>
