<script setup lang="ts">
import type { PropType } from 'vue'
import type { ParagraphQuote } from '@/services/drupal'
import vWysiwygLinks from '@/directives/v-wysiwyg-links'
import RouteLink from '@/components/navigation/RouteLink.vue'

defineProps({
  paragraph: {
    type: Object as PropType<ParagraphQuote>,
    required: true
  }
})
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

      <RouteLink
        v-if="paragraph.link && paragraph.link.route"
        :route="paragraph.link.route"
        :title="paragraph.link.title"
      />
    </p>
  </blockquote>
</template>
