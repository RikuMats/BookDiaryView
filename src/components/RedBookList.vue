<template>
  <v-data-table
    :headers="headers"
    :items="bookList"
    :items-per-page="5"
    class="elevation-1 my-3 mx-auto"
  >
    <!-- <template v-slot:[`item.thumbnail`]="{ item }">
      <v-img
        :src="item.thumbnail"
        :aspect-ratop="16 / 9"
        height="9vw"
        min-height="100px"
        width="16vw"
        min-width="160px"
        class="ma-0 pa-0"
      ></v-img>
    </template> -->
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
      text: "ISBN",
      align: "start",
      value: "ISBN",
    },
    { text: "書籍名", value: "title" },
    { text: "著者", value: "author" },
    { text: "出版社", value: "publisher" },
    { text: "感想", value: "impression" },
    { text: "最後に読まれた日", value: "date" },
  ];
}
</script>
