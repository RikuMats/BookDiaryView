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
      <BookList :bookList="resultList" v-if="isSearching"></BookList>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookList from "@/components/BookList.vue";
import { Book } from "@/models/book";
@Component({
  components: {
    BookList,
  },
})
export default class SearchBook extends Vue {
  private resultList: Array<Book> = [];
  private title = "";
  private author = "";
  private isSearching = false;
  search() {
    //apiからデータ取得
    //forで順次配列に格納
    //isSearching
    let url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${
      this.author
    }${this.title === "" ? "" : "+intitle:" + this.title}`;
    fetch(url)
      .then((res) => res.json())
      .then((apiData) => {
        // console.log(apiData["items"]);
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
    this.isSearching = true;
  }
  decide() {
    //本を決定
    //本の情報をサーバに送り
    //元の画面に送る
  }
  created() {
    // //for test 後で消す
    // let url =
    //   "https://www.googleapis.com/books/v1/volumes?q=inauthor:池井戸潤+intitle:銀翼のイカロス";
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((apiData) => {
    //     // console.log(apiData["items"]);
    //     let data = apiData["items"];
    //     for (let book of data) {
    //       if (!("volumeInfo" in book)) {
    //         console.log("not found volumeInfo");
    //         continue;
    //       }
    //       let bookInfo = book["volumeInfo"];
    //       if (
    //         !("title" in bookInfo) ||
    //         !("authors" in bookInfo) ||
    //         !("imageLinks" in bookInfo) ||
    //         !("industryIdentifiers" in bookInfo)
    //       ) {
    //         continue;
    //       }
    //       let title = bookInfo["title"];
    //       let author = bookInfo["authors"][0];
    //       let img_url = bookInfo["imageLinks"]["thumbnail"];
    //       let identifiers = bookInfo["industryIdentifiers"].filter(
    //         (element) => element.type === "ISBN_13"
    //       );
    //       console.log("identifiers");
    //       console.log(identifiers);
    //       if (identifiers.length < 1) {
    //         continue;
    //       }
    //       let isbn13 = bookInfo["industryIdentifiers"][1]["identifier"];
    //       this.resultList.push(new Book(isbn13, title, author, img_url));
    //     }
    //   });
    // this.isSearching = true;
  }
}
</script>
