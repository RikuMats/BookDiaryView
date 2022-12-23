<template>
  <v-container>
    <EmailVerification :id="id" />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import EmailVerification from "../components/EmailVerification.vue";

@Component({
  components: {
    EmailVerification,
  },
})
export default class VerificationView extends Vue {
  @Prop()
  private id!: string;
  private userName = "name";

  fetchUserData() {
    //name, books,...
    return "name";
  }
}
</script>
