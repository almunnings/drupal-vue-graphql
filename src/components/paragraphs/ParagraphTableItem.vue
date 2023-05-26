<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { TableRow } from '@/services/drupal'
import vWysiwygLinks from '@/directives/v-wysiwyg-links'

const props = defineProps({
  row: {
    type: Object as PropType<TableRow | null>,
    required: true
  },
  format: {
    type: String as PropType<String | null>
  }
})

const columns = computed(() => {
  return props.row?.data || []
})

const element = computed(() => {
  return props.row?.weight === 0 ? 'th' : 'td'
})

const isHtml = computed(() => {
  switch (props.format) {
    case 'basic_html':
    case 'full_html':
    case 'restricted_html':
      return true
    default:
      return false
  }
})
</script>

<template>
  <tr>
    <component :is="element" v-for="(column, delta) in columns" :key="delta">
      <div v-if="isHtml" v-html="column" v-wysiwyg-links />
      <template v-else>
        {{ column }}
      </template>
    </component>
  </tr>
</template>
