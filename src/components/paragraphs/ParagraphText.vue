<script setup lang="ts">
import type { PropType } from 'vue'
import type { ParagraphText } from '@/services/drupal'
import vWysiwygLinks from '@/directives/v-wysiwyg-links'

defineProps({
  paragraph: {
    type: Object as PropType<ParagraphText>,
    required: true
  }
})
</script>

<template>
  <div
    class="text-processed"
    v-html="paragraph.text.processed"
    v-wysiwyg-links
  />
</template>
