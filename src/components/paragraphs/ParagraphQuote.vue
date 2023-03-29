<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { ParagraphQuote } from '@/services/drupal'
import vWysiwygLinks from '@/directives/v-wysiwyg-links'
import RouteLink from '@/components/navigation/RouteLink.vue'

const props = defineProps({
  paragraph: {
    type: Object as PropType<ParagraphQuote>,
    required: true
  }
})

const link = computed(() => props.paragraph.link)
const route = computed(() => link.value?.route)
</script>

<template>
  <blockquote class="blockquote border border-secondary rounded p-3">
    <div
      class="text-processed"
      v-html="paragraph.quote.processed"
      v-wysiwyg-links
    ></div>

    <p v-if="paragraph.citation || paragraph.link" class="text-secondary small">
      {{ paragraph.citation }}

      <RouteLink v-if="link && route" :route="route" :title="link.title" />
    </p>
  </blockquote>
</template>
