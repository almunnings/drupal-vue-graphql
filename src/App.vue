<script setup lang="ts"></script>

<template>
  <main class="container my-5">
    <RouterView :key="$route.path" />
  </main>
</template>
