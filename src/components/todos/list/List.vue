<template>
  <ol>
    <Item v-for="todo in todos" :todo="todo" :key="todo.id" :toggleTodo="toggleTodo" />
  </ol>
  <div v-if="todos.length === 0" class="pt-8 text-lg text-gray-400">
    Your todo list is empty. Add something to the list...
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Item from "./Item.vue";
import type { Todo } from "../../../utils";

export default defineComponent({
  name: "List",
  components: {
    Item,
  },
  props: {
    todos: {
      type: Array as PropType<Todo[]>, // https://v3.vuejs.org/guide/typescript-support.html#annotating-props
      required: true,
    },
    toggleTodo: {
      type: Function,
      required: true,
    },
  },
});
</script>
