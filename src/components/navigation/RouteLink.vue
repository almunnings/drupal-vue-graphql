<script setup lang="ts">
import { computed } from 'vue'
import { useInfoStore } from '@/stores/info'
import type { PropType } from 'vue'

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  internal: {
    type: Boolean,
    required: true
  },
  title: {
    type: String as PropType<String | null>,
    required: false
  }
})

// strip http, https, www from url
const title_url = computed(() =>
  props.url
    // Remove protocol://
    .replace(/(^\w+:|^)\/\//, '')
    // Remove www.
    .replace(/^www\./i, '')
    // Remove trailing slash.
    .replace(/\/$/, '')
)

// Convert homepage links into /
const url = computed(() => (props.url === useInfoStore().home ? '/' : props.url))
</script>

<template>
  <router-link v-if="internal" :to="url" active-class="active">
    {{ title || title_url || 'Untitled' }}
  </router-link>
  <a v-else :href="url"> {{ title || title_url || 'Untitled' }}</a>
</template>
