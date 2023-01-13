<template>
  <v-data-table
    :headers="headers"
    :items="bookList"
    :items-per-page="10"
    class="elevation-1 my-3 mx-auto"
  >
    <!-- header  -->
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Book Shelf</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <!-- add new book  -->
        <v-btn color="primary" dark class="mb-2" @click="newBookDialog = true">
          New Book
        </v-btn>
        <v-dialog v-model="newBookDialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Search Book</span>
            </v-card-title>
            <SearchBook @find-book="addBook"></SearchBook>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn small class="mr-2" @click="writeImpression(item)">
        <v-icon> mdi-pencil</v-icon>
      </v-btn>
      <v-dialog v-model="impressionWritingDialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Write Impression</span>
          </v-card-title>
          <v-card-text>
            <v-textarea
              outlined
              name="input-7-4"
              label="impression"
              v-model="impression"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="save">
              save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
    <!-- サムネイル -->
    <template v-slot:[`item.img_url`]="{ item }">
      <v-img
        :src="item.img_url"
        :aspect-ratio="3 / 4"
        height="12vw"
        min-height="120px"
        width="9vw"
        min-width="90px"
        class="ma-0 pa-0"
      ></v-img>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SearchBook from "@/components/SearchBook.vue";
import { Book, RedBook } from "@/models/book";
@Component({
  components: {
    SearchBook,
  },
})
export default class BookList extends Vue {
  private newBookDialog = false;
  private impressionWritingDialog = false;
  private impression = "";
  private redBook!: RedBook;
  @Prop()
  private bookList!: Array<Book>;
  private headers = [
    {
      text: "書影",
      align: "start",
      sortable: false,
      value: "img_url",
      width: "30%",
    },
    {
      text: "タイトル",
      sortable: false,
      value: "title",
      width: "30%",
    },
    {
      text: "著者",
      sortable: false,
      value: "author",
      width: "40%",
    },
    {
      value: "actions",
      sortable: false,
    },
  ];

  addBook(book: Book) {
    this.newBookDialog = false;
    this.$emit("add-book", book);
  }
  writeImpression(book: Book) {
    this.impressionWritingDialog = true;
    this.redBook = RedBook.red(book);
  }
  save() {
    this.impressionWritingDialog = false;
    this.redBook.writeImpression(this.impression);
    this.$emit("red-book", this.redBook);
  }
}
</script>
