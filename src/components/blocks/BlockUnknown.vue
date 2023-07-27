<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlockInterface } from '@/services/drupal'
defineProps({
  block: {
    type: Object as PropType<BlockInterface>,
    required: true
  }
})
</script>

<template>
  <div class="alert alert-warning" role="alert">
    Block type <mark>{{ block.__typename }}</mark> is not implemented in the
    block resolver.
  </div>
</template>
