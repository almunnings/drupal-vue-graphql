<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { RouteUnion } from '@/services/drupal'

const props = defineProps({
  route: {
    type: Object as PropType<RouteUnion>,
    required: true
  },
  title: {
    type: String,
    required: false
  }
})

// strip http, https, www from url
const title_url = computed(() =>
  props.route.url
    // Remove protocol://
    .replace(/(^\w+:|^)\/\//, '')
    // Remove www.
    .replace(/^www\./i, '')
    // Remove trailing slash.
    .replace(/\/$/, '')
)
</script>

<template>
  <router-link v-if="route.internal" :to="route.url" active-class="active">
    {{ title || title_url || 'Untitled' }}
  </router-link>
  <a v-else :href="route.url">
    {{ title || title_url || 'Untitled' }}
  </a>
</template>
