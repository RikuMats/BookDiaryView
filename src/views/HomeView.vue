<template>
  <v-container>
    <v-dialog v-model="newBookDialog" max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
          New Book
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Search Book</span>
        </v-card-title>
        <SearchBook></SearchBook>
      </v-card>
    </v-dialog>

    <SignIn></SignIn>
    <RedBookList :bookList="bookList" />
    <SearchBook />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RedBookList from "../components/RedBookList.vue";
import SearchBook from "../components/SearchBook.vue";
import SignIn from "../components/SignIn.vue";
import { RedBook } from "../models/book";

@Component({
  components: {
    RedBookList,
    SearchBook,
    SignIn,
  },
})
export default class HomeView extends Vue {
  private bookList!: Array<RedBook>;
  private newBookDialog = false;

  public created() {
    //最近読まれた本をサーバーから取得
    this.bookList = [
      new RedBook(
        "isbn1",
        "ikarosu",
        "ikeido jun",
        "http://books.google.com/books/content?id=09bcoQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "that's fun"
      ),
      new RedBook(
        "isbn1",
        "ikarosu",
        "ikeido jun",
        "http://books.google.com/books/content?id=09bcoQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "that's fun"
      ),
      new RedBook(
        "isbn1",
        "ikarosu",
        "ikeido jun",
        "http://books.google.com/books/content?id=09bcoQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "that's fun"
      ),
    ];
  }
}
</script>
