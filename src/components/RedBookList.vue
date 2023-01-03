<template>
  <v-data-table
    :headers="headers"
    :items="bookList"
    :items-per-page="5"
    class="elevation-1 my-3 mx-auto"
    hide-default-footer
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
      width: "20%",
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
      width: "50%",
    },
  ];
}
</script>
