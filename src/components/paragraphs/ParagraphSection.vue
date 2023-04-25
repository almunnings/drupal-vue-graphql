<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

import { getParagraphComponent } from '@/components/paragraphs'
import { getLayoutComponent } from '@/components/layouts'

import type { ParagraphSection, ParagraphInterface } from '@/services/drupal'

const props = defineProps({
  paragraph: {
    type: Object as PropType<ParagraphSection>,
    required: true
  },
  children: {
    type: Array as PropType<ParagraphInterface[] | null>,
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
    <!-- Loop through each region on paragraph and inject into region slot -->
    <template #[region] v-for="region in regions" :key="region">
      <!-- Generate a dynamic component based on child __typename -->
      <component
        v-for="child in getRegionChildren(region)"
        :is="getParagraphComponent(child)"
        :paragraph="child"
        :key="child.id"
      />
    </template>
  </component>
</template>
