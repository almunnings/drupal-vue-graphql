<script setup lang="ts"></script>

<template>
  <section>
    <header class="border rounded d-grid p-3 gap-3" v-if="$slots.top">
      <slot name="top"></slot>
    </header>

    <div class="row my-4" v-if="$slots.first || $slots.second">
      <div class="col" v-if="$slots.first">
        <div class="border rounded h-100">
          <div class="d-grid p-3 gap-3">
            <slot name="first"></slot>
          </div>
        </div>
      </div>
      <div class="col" v-if="$slots.second">
        <div class="border rounded h-100">
          <div class="d-grid p-3 gap-3">
            <slot name="second"></slot>
          </div>
        </div>
      </div>
    </div>

    <footer class="border rounded d-grid p-3 gap-3" v-if="$slots.bottom">
      <slot name="bottom"></slot>
    </footer>
  </section>
</template>
