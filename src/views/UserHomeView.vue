<template>
  <v-container>
    <v-row>
      welcome! {{ userName }}
      <br />
      your ID: {{ id }}
    </v-row>
    <v-row>
      <v-col><BookList :bookList="bookList" /></v-col>
      <v-col><RedBookList :bookList="redBookList" /></v-col>
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
  fetchUserData() {
    //name, books,...
    this.userName = "name";
    console.log(this.userName);
    this.bookList = [
      new Book(
        "ikarosu",
        "ikeido jun",
        "http://books.google.com/books/content?id=09bcoQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
      ),
      new Book(
        "ikarosu",
        "ikeido jun",
        "http://books.google.com/books/content?id=09bcoQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
      ),
      new Book(
        "ikarosu",
        "ikeido jun",
        "http://books.google.com/books/content?id=09bcoQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
      ),
    ];
    this.redBookList = [
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
  created() {
    this.fetchUserData();
  }
}
</script>
