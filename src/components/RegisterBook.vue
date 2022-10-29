<template>
  <div>
    <input type="text" name="title" placeholder="書名" required /><br />
    <input type="text" name="author" placeholder="著者" required /><br />
    <input type="text" name="publisher" placeholder="出版社" /><br />
    <input type="file" name="img" /><br />
    <input type="button" value="登録" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class RegisterBook extends Vue {
  // register_new_book.php :POST
}
</script>
