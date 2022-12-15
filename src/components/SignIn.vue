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
    //サーバーにuserId とパスワード
    let isVerified = true;
    if (isVerified) {
      this.$router.push({
        name: "userHome",
        params: { id: this.userId },
      });
    }
  }
}
</script>
