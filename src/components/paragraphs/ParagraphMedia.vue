<script setup lang="ts">
import type { PropType } from 'vue'
import type { ParagraphMedia } from '@/services/drupal'
import { getMediaComponent } from '@/components/media'

defineProps({
  paragraph: {
    type: Object as PropType<ParagraphMedia>,
    required: true
  }
})
</script>

<template>
  <div class="media">
    <component
      :is="getMediaComponent(paragraph.media)"
      :media="paragraph.media"
      :title="paragraph.title"
      :description="paragraph.description?.processed"
    />
  </div>
</template>
