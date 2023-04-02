<script setup lang="ts">
const grid = [
  'border',
  'rounded',
  'd-grid',
  'p-3',
  'gap-3',
  'align-content-start'
]
</script>

<template>
  <section class="grid">
    <header class="g-col-12" :class="grid" v-if="$slots.top">
      <slot name="top"></slot>
    </header>

    <div class="g-col-12 g-col-sm-6" :class="grid" v-if="$slots.first">
      <slot name="first"></slot>
    </div>

    <div class="g-col-12 g-col-sm-6" :class="grid" v-if="$slots.second">
      <slot name="second"></slot>
    </div>

    <footer class="g-col-12" :class="grid" v-if="$slots.bottom">
      <slot name="bottom"></slot>
    </footer>
  </section>
</template>
