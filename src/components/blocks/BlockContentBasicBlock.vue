<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlockContentBasicBlock } from '@/services/drupal'
import vWysiwygLinks from '@/directives/v-wysiwyg-links'

defineProps({
  blockContent: {
    type: Object as PropType<BlockContentBasicBlock>,
    required: true
  },
  title: {
    type: String as PropType<String | null>
  }
})
</script>

<template>
  <div class="block">
    <h3 class="h5" v-if="title">{{ title }}</h3>
    <div
      class="text-processed"
      v-html="blockContent.body?.processed"
      v-wysiwyg-links
    />
  </div>
</template>
