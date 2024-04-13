<script setup lang="ts">
import type { PropType } from 'vue'
import type { Link } from '@/services/drupal'

import RouteLink from '@/components/navigation/RouteLink.vue'

defineProps({
  links: {
    type: Array as PropType<Link[]>,
    required: true
  },
  current: {
    type: String,
    required: false
  }
})
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item" v-for="(link, delta) in links" :key="delta">
        <RouteLink v-if="link.url" :url="link.url" :internal="link.internal" :title="link.title" />
      </li>
      <li v-if="current" class="breadcrumb-item active" aria-current="page">
        {{ current }}
      </li>
    </ol>
  </nav>
</template>
