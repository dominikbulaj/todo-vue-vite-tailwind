<template>
  <p class="leading-loose text-4xl text-indigo-700 font-black">
    Todo list <span class="text-gray-400 font-light">({{ count }} <ItemsLabel :count="count" />)</span>
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemsLabel from "./ItemsLabel.vue";
export default defineComponent({
  name: "Header",
  components: {
    ItemsLabel,
  },
  props: {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
});
</script>
