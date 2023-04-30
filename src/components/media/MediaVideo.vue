<script setup lang="ts">
import type { PropType } from 'vue'
import type { MediaVideo } from '@/services/drupal'
import vWysiwygLinks from '@/directives/v-wysiwyg-links'

defineProps({
  media: {
    type: Object as PropType<MediaVideo>,
    required: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  }
})
</script>

<template>
  <figure
    class="figure d-block border border-dark p-3 rounded bg-black bg-opacity-25 col-lg-9 mx-auto"
  >
    <h3 v-if="title" class="h5">
      {{ title }}
    </h3>

    <div class="ratio ratio-16x9">
      <video class="w-100 rounded" loading="lazy" preload="auto" controls>
        <source :src="media.video.url" :type="media.video.mime || undefined" />
      </video>
    </div>

    <figcaption
      v-if="description"
      v-html="description"
      class="figure-caption mt-2"
      v-wysiwyg-links
    />
  </figure>
</template>
