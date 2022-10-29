<template>
  <RedBookList :bookList="bookList" />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RedBookList from "../components/BookList.vue";
import { RedBook } from "../models/book";

@Component({
  components: {
    RedBookList,
  },
})
export default class HomeView extends Vue {
  private bookList!: Array<RedBook>;

  public created() {
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
