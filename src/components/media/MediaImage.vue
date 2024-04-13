<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { MediaImage, ImageStyleDerivative } from '@/services/drupal'
import vWysiwygLinks from '@/directives/v-wysiwyg-links'

const props = defineProps({
  media: {
    type: Object as PropType<MediaImage>,
    required: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  }
})

// Key variations by name.
const variations = computed(() => {
  const map = new Map<string, ImageStyleDerivative>()
  props.media.image.variations?.forEach((v) => {
    map.set(v.name, v)
  })
  return map
})

// Map type for <source> elements.
interface Source {
  name: string
  media: string
  height: number
  width: number
  srcset: string
}

// Add src sets for variations.
const srcsets = computed(() => {
  const srcsets: Array<Source> = []

  srcsets.push({
    name: 'wide',
    media: 'all and (min-width: 992px)',
    width: variations.value.get('WIDE')?.width || 0,
    height: variations.value.get('WIDE')?.height || 0,
    srcset: [
      `${variations.value.get('WIDE')?.url} 1x`,
      `${variations.value.get('WIDE2X')?.url} 2x`
    ].join(', ')
  })

  srcsets.push({
    name: 'large',
    media: 'all and (min-width: 420px)',
    width: variations.value.get('LARGE')?.width || 0,
    height: variations.value.get('LARGE')?.height || 0,
    srcset: [
      `${variations.value.get('LARGE')?.url} 1x`,
      `${variations.value.get('LARGE2X')?.url} 2x`
    ].join(', ')
  })

  srcsets.push({
    name: 'medium',
    media: 'all and (max-width: 420px)',
    width: variations.value.get('MEDIUM')?.width || 0,
    height: variations.value.get('MEDIUM')?.height || 0,
    srcset: [
      `${variations.value.get('MEDIUM')?.url} 1x`,
      `${variations.value.get('MEDIUM2X')?.url} 2x`
    ].join(', ')
  })

  return srcsets
})
</script>

<template>
  <figure class="figure">
    <h3 v-if="title" class="h5">{{ title }}</h3>

    <a
      :href="media.image.url"
      title="Open image in new tab"
      target="_blank"
      rel="noopener"
      class="figure-img d-inline-block m-0"
    >
      <picture class="figure-img d-inline-block">
        <source
          v-for="src in srcsets"
          :key="src.name"
          :media="src.media"
          :srcset="src.srcset"
          :width="src.width"
          :height="src.height"
          :type="media.image.mime || undefined"
        />

        <img
          :src="variations.get('THUMBNAIL')?.url"
          :alt="media.image.alt || undefined"
          :type="media.image.mime || undefined"
          :title="media.image.title || media.image.alt || undefined"
          :width="media.image.width"
          :height="media.image.height"
          class="img-fluid rounded"
          loading="lazy"
        />
      </picture>
    </a>

    <figcaption v-if="description" v-html="description" class="figure-caption" v-wysiwyg-links />
  </figure>
</template>

<style lang="scss" scoped>
a.figure-img {
  @include transition;
  opacity: 1;

  &:hover,
  &:focus {
    opacity: 0.85;
  }
}
</style>
