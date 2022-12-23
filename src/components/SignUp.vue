<template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title><h2>sign up</h2></v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          v-model="userName"
          :rules="userNameRules"
          :counter="6"
          label="user name"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          :counter="6"
          label="password"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="email"
          required
        ></v-text-field>
        <v-card-actions>
          <v-btn @click="signUp">サインアップ</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SignUp extends Vue {
  private valid = false;
  private userName = "";
  private password = "";
  private email = "";
  private userNameRules = [
    (v: string) => !!v || "user name is required",
    (v: string) => v.length <= 6 || "user name must be less than 6 characters",
  ];
  private passwordRules = [
    (v: string) => !!v || "password is required",
    (v: string) => v.length <= 6 || "password must be less than 6 characters",
  ];
  private emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
  ];

  signUp() {
    if (this.valid) {
      //サーバーにユーザ名 とパスワード とメールを送りidをもらう
      let userId = "aa";
      if (userId) {
        this.$router.push({
          name: "verification",
          params: { id: userId },
        });
      }
    }
  }
}
</script>
