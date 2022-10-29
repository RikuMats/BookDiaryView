<template>
  <div class="hello">
    <table>
      <thead>
        <th>ISBN</th>
        <th>タイトル</th>
        <th>著者</th>
        <th>出版社</th>
      </thead>
      <tbody>
        <tr v-for="book in bookList" :key="book">
          <td>{{ book.ISBN }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.publisher }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Book } from "@/models/book";
@Component
export default class BookList extends Vue {
  @Prop()
  private bookList!: Array<Book>;
}
</script>
