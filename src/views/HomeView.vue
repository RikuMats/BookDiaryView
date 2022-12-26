<template>
  <v-container>
    <SignIn></SignIn>
    <BookList :bookList="bookList" />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BookList from "../components/BookList.vue";
import SignIn from "../components/SignIn.vue";
import { RedBook, Book } from "../models/book";

@Component({
  components: {
    BookList,
    SignIn,
  },
})
export default class HomeView extends Vue {
  private bookList!: Array<Book>;

  public created() {
    //最近読まれた本をサーバーから取得
    this.bookList = [
      new Book(
        "ikarosu",
        "ikeido jun",
        "bunshun",
        "isbn1",
        "http://books.google.com/books/content?id=09bcoQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
      ),
      new Book(
        "ikarosu",
        "ikeido jun",
        "bunshun",
        "isbn1",
        "http://books.google.com/books/content?id=09bcoQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
      ),
      new Book(
        "ikarosu",
        "ikeido jun",
        "bunshun",
        "isbn1",
        "http://books.google.com/books/content?id=09bcoQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
      ),
    ];
  }
}
</script>
