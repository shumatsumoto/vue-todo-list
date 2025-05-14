<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="app">
    <nav class="p-4 bg-gray-100">
      <RouterLink to="/" class="mr-4">ホーム</RouterLink>
      <RouterLink to="/about" class="mr-4">About</RouterLink>
    </nav>
    <div class="p-4">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
