<template>
  <v-container>
    <v-row>
      welcome! {{ userName }}
      <br />
      your ID: {{ id }}
    </v-row>
    <v-row>
      <v-col>
        <BookList
          :bookList="bookList"
          @red-book="redBook"
          @add-book="addBook"
          :key="bookListKey"
      /></v-col>
      <v-col>
        <RedBookList :bookList="redBookList" :key="redBookListKey"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import BookList from "@/components/BookList.vue";
import RedBookList from "@/components/RedBookList.vue";
import { Book, RedBook } from "@/models/book";

@Component({
  components: {
    BookList,
    RedBookList,
  },
})
export default class HomeView extends Vue {
  @Prop()
  private id!: string;
  private userName = "";
  private bookList: Array<Book> = [];
  private redBookList: Array<Book> = [];
  private bookListKey = 0;
  private redBookListKey = 0;
  fetchUserData() {
    let token = window.sessionStorage.getItem("token");
    let sendData = {
      userId: this.id,
      token: token,
    };
    let isVerified = false;
    fetch("http://localhost:8080/fetchUserData.php", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(sendData).toString(),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("エラーが発生しました", error);
      })
      .then((apiData) => {
        console.log(apiData);
        isVerified = apiData["isVerified"];
        if (isVerified) {
          this.userName = apiData["userName"];
          this.bookList = apiData["books"];
          this.redBookList = apiData["redBooks"];
        }
      });
  }
  created() {
    //画面作成時にデータ取得
    this.fetchUserData();
  }
  redBook(redBook: RedBook) {
    //感想が書かれたときに呼び出す
    this.redBookList.push(redBook);
    this.bookList = this.bookList.filter((v) => {
      return v.isbn !== redBook.isbn;
    });
    //強制的に再描画させるための処理（非推奨なためできれば修正）
    this.redBookListKey += 1;
    this.bookListKey += 1;
  }
  addBook(book: Book) {
    //本を検索して決定した時に呼び出し
    if (
      this.bookList.filter((v) => {
        v.isbn === book.isbn;
      }).length == 0
    ) {
      this.bookList.push(book);
    }
    this.bookListKey += 1;
  }
}
</script>
