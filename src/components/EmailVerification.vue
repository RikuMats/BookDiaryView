<template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title><h2>Email verification</h2></v-card-title>
    your id is {{ id }}.
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          v-model="verificationCode"
          :rules="verificationCodeRules"
          :counter="6"
          label="verification code"
          required
        ></v-text-field>
        <v-card-actions>
          <v-btn @click="verification">verification</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class EmailVerification extends Vue {
  private valid = false;
  private verificationCode = "";
  private verificationCodeRules = [
    (v: string) => !!v || "verification code is required",
    (v: string) =>
      v.length <= 6 || "verification code must be less than 6 characters",
  ];
  @Prop()
  private id!: string;
  verification() {
    if (this.valid) {
      //サーバにidとverificationCodeを送り問題ないか結果をもらう
      let valid = true;
      if (valid) {
        this.$router.push({
          name: "ok",
          params: { id: this.id },
        });
      }
    }
  }
}
</script>
