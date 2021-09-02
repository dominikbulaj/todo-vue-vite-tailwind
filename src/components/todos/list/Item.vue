<template>
  <li class="text-left text-lg shadow rounded w-full py-2 px-4 space-x-8">
    <label>
      <input type="checkbox" :checked="todo.done" @click.stop="toggleTodo(todo.id)" />
      &nbsp; {{ todo.text }}
    </label>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    toggleTodo: {
      type: Function,
      required: true,
    },
  },
});
</script>
