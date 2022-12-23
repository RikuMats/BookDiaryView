<template>
  <v-container>
    <SignUp></SignUp>
    <!-- <RedBookList :bookList="bookList" /> -->
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SignUp from "../components/SignUp.vue";

@Component({
  components: {
    SignUp,
  },
})
export default class SignUpView extends Vue {}
</script>
