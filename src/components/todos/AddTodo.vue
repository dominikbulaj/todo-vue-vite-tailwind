<template>
  <form class="flex w-full mx-auto space-x-3">
    <input
      class="
        flex-1
        appearance-none
        border border-transparent
        w-full
        py-2
        px-4
        bg-white
        text-gray-700
        placeholder-gray-400
        shadow-md
        rounded-lg
        text-base
        focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent
      "
      v-model="todo"
      placeholder="New todo"
    />
    <button
      class="
        flex-shrink-0
        bg-blue-600
        text-white text-base
        font-semibold
        py-2
        px-4
        rounded-lg
        shadow-md
        hover:bg-blue-700
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-blue-200
        disabled:opacity-50
      "
      type="button"
      @click.stop="onSave"
      :disabled="disableSave"
    >
      Add item
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AddTodo",
  props: {
    addTodo: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      todo: "",
      disableSave: true,
    };
  },
  watch: {
    todo(value) {
      this.disableSave = this.todo.trim().length < 2;
    },
  },
  methods: {
    onSave() {
      this.addTodo(this.todo.trim());
      this.todo = ""; // reset input value after save
    },
  },
});
</script>
