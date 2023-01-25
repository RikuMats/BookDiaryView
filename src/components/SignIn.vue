<template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title><h2>sign in</h2></v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          v-model="userId"
          :rules="userIdRules"
          :counter="6"
          label="user id"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          :counter="6"
          label="password"
          required
        ></v-text-field>
        <v-card-actions>
          <v-btn @click="signIn">ログイン</v-btn>
        </v-card-actions>
      </v-form>
      初めての方
      <router-link to="/signUp"> sign up </router-link>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SignIn extends Vue {
  private valid = false;
  private userId = "";
  private password = "";
  private userIdRules = [
    (v: string) => !!v || "user id is required",
    (v: string) => v.length <= 6 || "user id must be less than 6 characters",
  ];
  private passwordRules = [
    (v: string) => !!v || "password is required",
    (v: string) => v.length <= 6 || "password must be less than 6 characters",
  ];

  signIn() {
    let isVerified = false;
    let token = "token";
    let sendData = {
      password: this.password,
      userId: this.userId,
    };
    if (this.valid) {
      //サーバーにuserId とパスワード
      fetch("http://localhost:8080/signIn.php", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
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
          token = apiData["token"];
          console.log(token);
          // 受け取ったトークンの保存↓vuex勉強したらそれ使う？
          // https://engineering.webstudio168.jp/2022/04/javascript-session/
          window.sessionStorage.setItem("token", token);
          if (isVerified) {
            this.$router.push({
              name: "userHome",
              params: { id: this.userId },
            });
          }
        });
    }
  }
}
</script>
