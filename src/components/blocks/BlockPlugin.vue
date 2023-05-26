<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlockPlugin } from '@/services/drupal'
import vWysiwygLinks from '@/directives/v-wysiwyg-links'

defineProps({
  block: {
    type: Object as PropType<BlockPlugin>,
    required: true
  }
})
</script>

<template>
  <div class="block">
    <div class="text-processed" v-html="block.render" v-wysiwyg-links />
  </div>
</template>
