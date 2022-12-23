<template>
  <v-container>
    <SignIn></SignIn>
    <!-- <RedBookList :bookList="bookList" /> -->
    <router-link to="/signUp"> sign up </router-link>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RedBookList from "../components/BookList.vue";
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
    let l: Array<RedBook> = new Array<RedBook>();
    for (let i = 0; i < 10; ++i) {
      l.push(
        new RedBook(
          i.toString(),
          "title" + i.toString(),
          "author" + i.toString(),
          "publisher" + i.toString(),
          "impression" + i.toString(),
          new Date()
        )
      );
    }
    this.bookList = l;
  }
}
</script>
