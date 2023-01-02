<template>
  <v-data-table
    :headers="headers"
    :items="bookList"
    :items-per-page="5"
    class="elevation-1 my-3 mx-auto"
  >
    <!-- サムネイル -->
    <template v-slot:[`item.img_url`]="{ item }">
      <v-img
        :src="item.img_url"
        :aspect-ratop="3 / 4"
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
import { RedBook } from "@/models/book";
@Component
export default class BookList extends Vue {
  @Prop()
  private bookList!: Array<RedBook>;
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
      text: "感想",
      sortable: false,
      value: "impression",
      width: "40%",
    },
  ];
  private image_url = "";
  //for test
  created() {
    console.log(this.bookList);
    // let request = new XMLHttpRequest();
    // let url =
    //   "https://www.googleapis.com/books/v1/volumes?q=inauthor:池井戸潤+intitle:銀翼のイカロス+inpublisher:ダイヤモンド社";
    // request.open("GET", url, true);
    // request.onload = function () {
    //   let data = this.response;
    //   data[1];
    // };
    // let bookList = [
    //   new Book("ikarosu", "ikeido jun", "bunshun", "isbn1"),
    //   new Book("neko", "natsume sousaku", "iwanami", "isbn2"),
    // ];
  }
}
</script>
