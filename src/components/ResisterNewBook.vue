<template>
  <div>
    <input type="text" />
    <input
      type="text"
      placeholder="タイトル"
      v-model="book.title"
      required
    /><br />
    <input
      type="text"
      placeholder="著者"
      v-model="book.author"
      required
    /><br />
    <input type="text" placeholder="出版社" v-model="book.publisher" /><br />
    <!-- <input type="file" name="img" /><br /> -->
    <input type="button" value="登録" @click="resister()" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Book } from "@/models/book";
@Component
export default class NewBook extends Vue {
  private book!: Book;
  resister() {
    //post book
    return;
  }
}
</script>
