<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { MediaRemoteVideo } from '@/services/drupal'
import vWysiwygLinks from '@/directives/v-wysiwyg-links'

const props = defineProps({
  media: {
    type: Object as PropType<MediaRemoteVideo>,
    required: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  }
})

const iframeUrl = computed(() => {
  const youtube =
    /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)&?/i

  if (youtube.test(props.media.url)) {
    const match = props.media.url.match(youtube)
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?rel=0`
    }
  }

  const vimeo =
    /(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:|\/\?)/i

  if (vimeo.test(props.media.url)) {
    const match = props.media.url.match(vimeo)
    if (match && match[3]) {
      return `https://player.vimeo.com/video/${match[3]}`
    }
  }

  return undefined
})
</script>

<template>
  <figure
    class="figure d-block border border-dark p-3 rounded bg-black bg-opacity-25 col-lg-9 mx-auto"
  >
    <h4 v-if="title">
      {{ title }}
    </h4>

    <div class="ratio ratio-16x9">
      <iframe
        :src="iframeUrl"
        :title="media.name"
        allowfullscreen
        class="w-100 rounded"
        loading="lazy"
      />
    </div>

    <figcaption
      v-if="description"
      v-html="description"
      class="figure-caption mt-2"
      v-wysiwyg-links
    />
  </figure>
</template>
