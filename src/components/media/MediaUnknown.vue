<script setup lang="ts">
import type { PropType } from 'vue'
import type { MediaInterface } from '@/services/drupal'
defineProps({
  media: {
    type: Object as PropType<MediaInterface>,
    required: true
  }
})
</script>

<template>
  <div class="alert alert-warning" role="alert">
    Media type <mark>{{ media.__typename }}</mark> is not implemented in the media resolver.
  </div>
</template>
