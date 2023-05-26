<script setup lang="ts">
import { type PropType } from 'vue'
import { getBlockComponent } from '@/components/blocks'
import type { ParagraphBlock } from '@/services/drupal'

defineProps({
  paragraph: {
    type: Object as PropType<ParagraphBlock>,
    required: true
  }
})
</script>

<template>
  <component
    v-if="paragraph.block"
    :is="getBlockComponent(paragraph.block)"
    :block="paragraph.block"
    class="border rounded p-3"
  />
</template>
