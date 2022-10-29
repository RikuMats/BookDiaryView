<template>
  <div class="hello">
    <table>
      <thead>
        <th>ISBN</th>
        <th>タイトル</th>
        <th>感想</th>
      </thead>
      <tbody>
        <tr v-for="book in bookList" :key="book">
          <td>{{ book.ISBN }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.impression }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { RedBook } from "@/models/book";
@Component
export default class RedBookList extends Vue {
  @Prop()
  private bookList!: Array<RedBook>;
}
</script>
