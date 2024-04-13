<script setup lang="ts">
import type { PropType } from 'vue'
import type { ParagraphInterface } from '@/services/drupal'
defineProps({
  paragraph: {
    type: Object as PropType<ParagraphInterface>,
    required: true
  }
})
</script>

<template>
  <div class="alert alert-warning" role="alert">
    Paragraph type <mark>{{ paragraph.__typename }}</mark> is not implemented in the paragraph
    resolver.
  </div>
</template>
