<script setup lang="ts">
import { ref } from "vue";

const todos = ref([
  { id: 1, title: "タイトル01", done: true },
  { id: 2, title: "タイトル02", done: false },
  { id: 3, title: "タイトル03", done: false },
]);

const newTodo = ref("");

const addTodo = () => {
  if (!validate()) {
    return;
  }
  const todo = {
    id: todos.value.length + 1,
    title: newTodo.value,
    done: false,
  };
  todos.value.push(todo);
  newTodo.value = "";
};

const validate = () => {
  if (newTodo.value.trim() === "") {
    alert("タスクを入力してください");
    return false;
  }
  return true;
};
</script>

<template>
  <div
    class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16"
  >
    <div class="px-4 py-2">
      <h1 class="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
    </div>
    <form class="w-full max-w-sm mx-auto px-4 py-2" @submit.prevent="addTodo">
      <div class="flex items-center border-b-2 border-teal-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Add a task"
          v-model="newTodo"
        />
        <button
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
    <ul class="divide-y divide-gray-200 px-4">
      <li class="py-4" v-for="todo in todos" :key="todo.id">
        <div class="flex items-center">
          <input
            id="todo1"
            name="todo1"
            type="checkbox"
            class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            :checked="todo.done"
          />
          <label
            for="todo1"
            class="ml-3 block text-gray-900"
            :class="{ 'line-through': todo.done }"
          >
            <span class="text-lg font-medium">{{ todo.title }}</span>
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>
