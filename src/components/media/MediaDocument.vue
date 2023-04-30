<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { MediaDocument } from '@/services/drupal'
import { getFileIcon, getFileExtension } from '@/components/media'
import vWysiwygLinks from '@/directives/v-wysiwyg-links'
import prettyBytes from 'pretty-bytes'

const props = defineProps({
  media: {
    type: Object as PropType<MediaDocument>,
    required: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  }
})

const size = computed(() => prettyBytes(props.media.document.size))
const extension = computed(() => getFileExtension(props.media.document))
const icon = computed(() => getFileIcon(props.media.document))
</script>

<template>
  <div class="d-block border p-3 rounded">
    <div class="d-flex">
      <div class="align-self-start m-2">
        <font-awesome-icon :icon="icon" class="me-2 text-light" size="xl" />
      </div>
      <div class="align-self-center flex-grow-1 d-md-flex">
        <div class="flex-grow-1">
          <a
            :href="media.document.url"
            :type="media.document.mime || undefined"
            download
          >
            {{ title || media.name }}
          </a>

          <div
            v-if="description"
            v-html="description"
            class="text-muted small"
            v-wysiwyg-links
          />
        </div>
        <div class="text-muted small ms-md-2 text-nowrap">
          {{ extension?.toUpperCase() }}, {{ size }}
        </div>
      </div>
    </div>
  </div>
</template>
