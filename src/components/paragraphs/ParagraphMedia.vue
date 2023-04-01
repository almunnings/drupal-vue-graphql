<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { ParagraphMedia } from '@/services/drupal'
import { getMediaComponent } from '@/components/media'
import vWysiwygLinks from '@/directives/v-wysiwyg-links'

const props = defineProps({
  paragraph: {
    type: Object as PropType<ParagraphMedia>,
    required: true
  }
})

// Which items should be in a <figure> element.
const useFigureTypes = [
  'MediaImage',
  'MediaVideo',
  'MediaAudio',
  'MediaRemoteVideo'
]

const useFigure = computed(() =>
  useFigureTypes.includes(props.paragraph.media.__typename)
)

const mediaComponent = getMediaComponent(props.paragraph.media)
</script>

<template>
  <div class="media">
    <figure v-if="useFigure" class="figure">
      <h4 v-if="paragraph.title">{{ paragraph.title }}</h4>

      <component
        :is="mediaComponent"
        :media="paragraph.media"
        class="d-inline-block figure-img"
      />

      <figcaption
        v-if="paragraph.description"
        v-html="paragraph.description.processed"
        class="figure-caption"
        v-wysiwyg-links
      />
    </figure>
    <component v-else :is="mediaComponent" :media="paragraph.media" />
  </div>
</template>
