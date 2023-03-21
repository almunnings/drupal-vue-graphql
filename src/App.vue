<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="container my-5">
    <RouterView :key="$route.path" />
  </main>
</template>

