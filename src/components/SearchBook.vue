<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field v-model="title" label="title"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="author" label="author"></v-text-field>
      </v-col>
      <v-col>
        <v-btn @click="search()"><v-icon>mdi-magnify</v-icon></v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="resultList"
        :items-per-page="20"
        class="elevation-1 my-3 mx-auto"
        hide-default-footer
      >
        <!-- header -->
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn @click="findBook(item)">
            <v-icon small class="mr-2"> mdi-plus </v-icon>
          </v-btn>
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
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Book } from "@/models/book";
@Component
export default class SearchBook extends Vue {
  private resultList: Array<Book> = [];
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

  private title = "";
  private author = "";
  search() {
    this.resultList = [];
    //apiからデータ取得
    //forで順次配列に格納
    let url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${
      this.author
    }${this.title === "" ? "" : "+intitle:" + this.title}`;
    fetch(url)
      .then((res) => res.json())
      .then((apiData) => {
        let data = apiData["items"];
        for (let book of data) {
          if (!("volumeInfo" in book)) {
            continue;
          }
          let bookInfo = book["volumeInfo"];
          if (
            !("title" in bookInfo) ||
            !("authors" in bookInfo) ||
            !("imageLinks" in bookInfo) ||
            !("industryIdentifiers" in bookInfo)
          ) {
            continue;
          }
          let title = bookInfo["title"];
          let author = bookInfo["authors"][0];
          let img_url = bookInfo["imageLinks"]["thumbnail"];
          let identifiers = bookInfo["industryIdentifiers"].filter(
            (element) => element.type === "ISBN_13"
          );
          if (identifiers.length < 1) {
            continue;
          }
          let isbn13 = bookInfo["industryIdentifiers"][1]["identifier"];
          this.resultList.push(new Book(isbn13, title, author, img_url));
        }
      });
  }
  findBook(book: Book) {
    //本を決定
    //本の情報をサーバに送り
    //元の画面に送る
    this.$emit("find-book", book);
  }
}
</script>
