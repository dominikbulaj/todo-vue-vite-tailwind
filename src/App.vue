<template>
  <Todos />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Todos from "./components/todos/Todos.vue";

export default defineComponent({
  name: "App",
  components: {
    Todos,
  },
});
</script>
