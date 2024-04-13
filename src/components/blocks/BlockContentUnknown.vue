<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlockContentInterface } from '@/services/drupal'

defineProps({
  blockContent: {
    type: Object as PropType<BlockContentInterface>,
    required: true
  }
})
</script>

<template>
  <div class="alert alert-warning" role="alert">
    Block content type <mark>{{ blockContent.__typename }}</mark> is not implemented in the block
    content resolver.
  </div>
</template>
