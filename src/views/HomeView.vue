<template>
  <v-container>
    <SignIn></SignIn>
    <RedBookList :bookList="bookList" />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RedBookList from "../components/RedBookList.vue";
import SignIn from "../components/SignIn.vue";
import { RedBook } from "../models/book";

@Component({
  components: {
    RedBookList,
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
}
</script>
