<script setup lang="ts">
import { computed } from 'vue'
import { useInfoStore } from '@/stores/info'
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

// Convert homepage links into /
const url = computed(() =>
  props.route.url === useInfoStore().home ? '/' : props.route.url
)
</script>

<template>
  <router-link v-if="route.internal" :to="url" active-class="active">
    {{ title || title_url || 'Untitled' }}
  </router-link>
  <a v-else :href="url"> {{ title || title_url || 'Untitled' }}</a>
</template>
