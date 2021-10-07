<template>
  <div class="flex justify-center">
    <div class="flex-col w-1/3">
      <Header :count="count" />
      <AddTodo :addTodo="addTodo" />
      <Filters :toggleDone="toggleDone" :showDone="showDone" :countDone="countDone" :deleteDone="deleteDone" />
      <List :todos="todosList" :toggleTodo="toggleTodo" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
import AddTodo from "./AddTodo.vue";
import List from "./list/List.vue";
import Filters from "./list/Filters.vue";
import { Todo, getTodoList, saveTodoList } from "../../utils";

export default defineComponent({
  name: "Todos",
  components: {
    Header,
    AddTodo,
    List,
    Filters,
  },
  data() {
    const todos = getTodoList();
    const nextId = todos.map((todo) => todo.id).reduce((max, id) => Math.max(max, id), 0) + 1;
    return {
      nextId,
      showDone: false,
      todos,
    };
  },
  computed: {
    count(): number {
      return this.todos.filter((t) => !t.done).length;
    },
    countDone(): number {
      return this.todos.filter((t) => t.done).length;
    },
    todosList(): Todo[] {
      return this.todos.filter((t) => (this.showDone ? true : !t.done));
    },
  },
  watch: {
    todos(value) {
      saveTodoList(value);
    },
  },
  methods: {
    addTodo(text: string) {
      const newTodo: Todo = {
        id: this.nextId,
        text,
        done: false,
      };
      this.nextId++;
      this.todos = [...this.todos, newTodo];
    },
    toggleTodo(id: number) {
      this.todos = this.todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
      // ux - uncheck show done when there are no any done left
      if (this.countDone === 0) {
        this.showDone = false;
      }
    },
    toggleDone() {
      this.showDone = !this.showDone;
    },
    deleteDone() {
      this.todos = this.todos.filter((t) => !t.done);
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
