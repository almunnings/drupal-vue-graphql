<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { MediaAudio } from '@/services/drupal'
import vWysiwygLinks from '@/directives/v-wysiwyg-links'
import prettyBytes from 'pretty-bytes'

const props = defineProps({
  media: {
    type: Object as PropType<MediaAudio>,
    required: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  }
})

const size = computed(() => prettyBytes(props.media.audio.size))
</script>

<template>
  <figure class="figure d-block border p-3 rounded">
    <div class="d-md-flex justify-content-between align-items-center mb-2">
      <h4 v-if="title" class="mb-0">
        {{ title }}
      </h4>
      <div class="ms-md-2">
        <a :href="media.audio.url" download class="small text-nowrap">
          Download {{ size }}
        </a>
      </div>
    </div>

    <audio class="d-block lh-1 w-100" loading="lazy" preload="none" controls>
      <source :src="media.audio.url" :type="media.audio.mime || undefined" />
    </audio>

    <figcaption
      v-if="description"
      v-html="description"
      class="figure-caption mt-2"
      v-wysiwyg-links
    />
  </figure>
</template>
