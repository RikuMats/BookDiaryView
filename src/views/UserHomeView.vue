<template>
  <v-container>
    {{ id }}
    {{ userName }}
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class HomeView extends Vue {
  @Prop()
  private id!: string;
  private userName = "name";

  fetchUserData() {
    //name, books,...
    return "name";
  }
}
</script>
