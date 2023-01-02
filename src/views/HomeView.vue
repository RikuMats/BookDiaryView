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

  public created() {
    //最近読まれた本をサーバーから取得
    this.bookList = [
      new RedBook(
        "ikarosu",
        "ikeido jun",
        "http://books.google.com/books/content?id=09bcoQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "that's fun"
      ),
      new RedBook(
        "ikarosu",
        "ikeido jun",
        "http://books.google.com/books/content?id=09bcoQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "that's fun"
      ),
      new RedBook(
        "ikarosu",
        "ikeido jun",
        "http://books.google.com/books/content?id=09bcoQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "that's fun"
      ),
    ];
  }
}
</script>
