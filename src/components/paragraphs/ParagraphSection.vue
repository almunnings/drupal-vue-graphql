<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { getParagraphComponent, getLayoutComponent } from '.'

import type {
  ParagraphSection,
  TypeParagraphInterface
} from '@/services/drupal'

const props = defineProps({
  paragraph: {
    type: Object as PropType<ParagraphSection>,
    required: true
  },
  children: {
    type: Array as PropType<TypeParagraphInterface[]>,
    required: false
  }
})

const layout = computed(() => getLayoutComponent(props.paragraph))

const regions = computed(() => props.paragraph.composition.layout?.regions)

const getRegionChildren = (region: string) =>
  (props.children || []).filter((child) => {
    return child.composition.position?.region === region
  })
</script>

<template>
  <component
    :is="layout"
    v-if="children"
    class="border border-info rounded my-4 p-4"
  >
    <!-- Loop through each defined region on the paragraph -->
    <template #[region] v-for="region in regions" :key="region">
      <!-- Get each child assigned to this region -->
      <template v-for="child in getRegionChildren(region)" :key="child.id">
        <!-- Generate a dynamic component based on child __typename -->
        <component :is="getParagraphComponent(child)" :paragraph="child" />
      </template>
    </template>
  </component>
</template>
