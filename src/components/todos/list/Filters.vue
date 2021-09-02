<template>
  <div class="flex pt-2 pb-2">
    <strong>Filters:</strong>&nbsp;&nbsp;
    <label>
      <input type="checkbox" @click.stop="handleToggle" :checked="showDone" :disabled="!countDone" />
      show done
    </label>
    <span v-if="countDone"
      >&nbsp;&middot;&nbsp;<a href="#" class="text-red-400" @click.stop="handleDelete"
        >delete done ({{ countDone }} <ItemLabel :count="countDone" />)</a
      >
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemLabel from "../ItemsLabel.vue";
export default defineComponent({
  name: "Filters",
  components: { ItemLabel },
  props: {
    toggleDone: {
      type: Function,
      required: true,
    },
    showDone: Boolean,
    countDone: Number,
    deleteDone: {
      type: Function,
      required: true,
      default: 0,
    },
  },
  methods: {
    handleToggle() {
      this.toggleDone();
    },
    handleDelete(event: Event) {
      event.preventDefault();
      if (confirm("Are you sure you want to delete done items?")) {
        this.deleteDone();
      }
    },
  },
});
</script>
