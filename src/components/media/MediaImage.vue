<script setup lang="ts">
import { reactive, watch, ref } from 'vue'
import type { PropType } from 'vue'
import type { MediaImage, ImageStyleDerivative } from '@/services/drupal'

const props = defineProps({
  media: {
    type: Object as PropType<MediaImage>,
    required: true
  }
})

// Map type for <source> elements.
interface Source {
  name: string
  media: string
  height: number
  width: number
  srcset: string
}

const sources = ref<Source[]>([])
const variations = reactive(new Map<string, ImageStyleDerivative>())

watch(
  () => props.media,
  (media) => {
    variations.clear()
    sources.value = []

    // Key variations by name.
    media.image.variations?.forEach((v) => {
      variations.set(v.name, v)
    })

    // Add srcsets for variation.
    sources.value.push({
      name: 'wide',
      media: 'all and (min-width: 1400px)',
      width: variations.get('WIDE')?.width || 0,
      height: variations.get('WIDE')?.height || 0,
      srcset: [
        `${variations.get('WIDE')?.url} 1x`,
        `${variations.get('WIDE2X')?.url} 2x`
      ].join(', ')
    })

    sources.value.push({
      name: 'large',
      media: 'all and (min-width: 768px)',
      width: variations.get('LARGE')?.width || 0,
      height: variations.get('LARGE')?.height || 0,
      srcset: [
        `${variations.get('LARGE')?.url} 1x`,
        `${variations.get('LARGE2X')?.url} 2x`
      ].join(', ')
    })

    sources.value.push({
      name: 'medium',
      media: 'all and (min-width: 480px)',
      width: variations.get('MEDIUM')?.width || 0,
      height: variations.get('MEDIUM')?.height || 0,
      srcset: [
        `${variations.get('MEDIUM')?.url} 1x`,
        `${variations.get('MEDIUM2X')?.url} 2x`
      ].join(', ')
    })
  },
  { immediate: true }
)
</script>

<template>
  <picture>
    <source
      v-for="source in sources"
      :key="source.name"
      :media="source.media"
      :srcset="source.srcset"
      :width="source.width"
      :height="source.height"
      :type="media.image.mime"
    />

    <img
      :src="variations.get('THUMBNAIL')?.url"
      :alt="media.image.alt"
      :type="media.image.mime"
      :title="media.image.title || media.image.alt"
      class="img-fluid d-block rounded"
      loading="lazy"
    />
  </picture>
</template>
