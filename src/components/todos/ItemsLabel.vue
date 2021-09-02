<template>
  <span>item{{ count > 1 ? "s" : "" }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ItemsLabel",
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
});
</script>
