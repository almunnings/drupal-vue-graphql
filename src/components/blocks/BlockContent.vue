<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlockContent } from '@/services/drupal'
import { getBlockContentComponent } from '@/components/blocks'

defineProps({
  block: {
    type: Object as PropType<BlockContent>,
    required: true
  }
})
</script>

<template>
  <component
    v-if="block.entity"
    :is="getBlockContentComponent(block.entity)"
    :block-content="block.entity"
    :title="block.title"
  />
</template>
