<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import {
  ParagraphSection,
  isParagraphText,
  TypeParagraphInterface
} from '@/services/drupal'

import ParagraphText from './ParagraphText.vue'
import LayoutOneColumn from '../layouts/LayoutOneColumn.vue'
import LayoutTwoColumn from '../layouts/LayoutTwoColumn.vue'

const props = defineProps({
  paragraph: {
    type: Object as PropType<ParagraphSection>,
    required: true
  },
  children: {
    type: Array as PropType<TypeParagraphInterface[]>,
    required: true
  }
})

const layout = computed(() => {
  switch (props.paragraph.composition.layout?.id) {
    case 'layout_twocol':
      return LayoutTwoColumn
    default:
    case 'layout_onecol':
      return LayoutOneColumn
  }
})

// Get unique regions.
const regions = computed(() => {
  const regions = props.children.map(
    (child) => child.composition.position?.region || 'content'
  )

  return [...new Set(regions)]
})

const regionChildren = (region: string) => {
  return props.children.filter((child) => {
    return child.composition.position?.region === region
  })
}
</script>

<template>
  <component :is="layout">
    <template #[region] v-for="region in regions" :key="region">
      <template v-for="child in regionChildren(region)" :key="child.id">
        <ParagraphText v-if="isParagraphText(child)" :paragraph="child" />
      </template>
    </template>
  </component>
</template>
