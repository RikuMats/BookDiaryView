<template>
  <v-container>
    your e-mail is verified!
    <v-btn @click="toHome()">home</v-btn>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class OkView extends Vue {
  @Prop()
  private id!: string;
  toHome() {
    this.$router.push({
      name: "userHome",
      params: {
        id: this.id,
      },
    });
  }
}
</script>
