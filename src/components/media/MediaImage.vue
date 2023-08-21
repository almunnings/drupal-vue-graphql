<script setup lang="ts">
import { reactive, watch, ref } from 'vue'
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

    // Add src sets for variation.
    sources.value.push({
      name: 'wide',
      media: 'all and (min-width: 992px)',
      width: variations.get('WIDE')?.width || 0,
      height: variations.get('WIDE')?.height || 0,
      srcset: [
        `${variations.get('WIDE')?.url} 1x`,
        `${variations.get('WIDE2X')?.url} 2x`
      ].join(', ')
    })

    sources.value.push({
      name: 'large',
      media: 'all and (min-width: 420px)',
      width: variations.get('LARGE')?.width || 0,
      height: variations.get('LARGE')?.height || 0,
      srcset: [
        `${variations.get('LARGE')?.url} 1x`,
        `${variations.get('LARGE2X')?.url} 2x`
      ].join(', ')
    })

    sources.value.push({
      name: 'medium',
      media: 'all and (max-width: 420px)',
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
          v-for="source in sources"
          :key="source.name"
          :media="source.media"
          :srcset="source.srcset"
          :width="source.width"
          :height="source.height"
          :type="media.image.mime || undefined"
        />

        <img
          :src="variations.get('THUMBNAIL')?.url"
          :alt="media.image.alt || undefined"
          :type="media.image.mime || undefined"
          :title="media.image.title || media.image.alt || undefined"
          class="img-fluid rounded"
          loading="lazy"
        />
      </picture>
    </a>

    <figcaption
      v-if="description"
      v-html="description"
      class="figure-caption"
      v-wysiwyg-links
    />
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
