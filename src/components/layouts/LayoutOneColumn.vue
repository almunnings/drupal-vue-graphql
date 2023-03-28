<script setup lang="ts"></script>

<template>
  <section class="border border-info rounded my-4 p-4" v-if="$slots.content">
    <div class="border rounded d-grid p-3 gap-3">
      <slot name="content"></slot>
    </div>
  </section>
</template>
