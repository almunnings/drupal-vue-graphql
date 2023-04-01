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
  <figure class="border border-secondary rounded p-3">
    <blockquote class="blockquote">
      <div
        class="text-processed"
        v-html="paragraph.quote.processed"
        v-wysiwyg-links
      />
    </blockquote>

    <figcaption
      class="blockquote-footer mb-0"
      v-if="paragraph.citation || paragraph.link"
    >
      <cite class="me-1" v-if="paragraph.citation">
        {{ paragraph.citation }}
      </cite>

      <RouteLink
        v-if="paragraph.link && paragraph.link.route"
        :route="paragraph.link.route"
        :title="paragraph.link.title"
      />
    </figcaption>
  </figure>
</template>
