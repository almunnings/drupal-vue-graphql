<script setup lang="ts">
  import { computed } from 'vue'
  import { isRouteInternal, isTypeNodeInterface } from '@/genql'
  import { useRouteStore } from '@/stores/useRouteStore'

  // Get the currrent route from the store.
  const routeStore = useRouteStore()
  const currentRoute = routeStore.getCurrentRoute

  // Get the entity off the current route if it's internal.
  const entity = computed(() => currentRoute && isRouteInternal(currentRoute) ? currentRoute.entity : undefined)
</script>

<template>
  <h1>Sample vue app with ts, pinia, vue 3, genql, vite to Drupal GraphQL</h1>

  <h2>Route URL: {{ currentRoute?.url }}</h2>
  <p>Route URL: {{ currentRoute?.internal ? 'Internal' : 'External' }}</p>

  <template v-if="entity && isTypeNodeInterface(entity)">
    <ul class="list-group">
      <li class="list-group-item">UUID: {{ entity.id }}</li>
      <li class="list-group-item">Title: {{ entity.title }}</li>
      <li class="list-group-item">Type: {{ entity.__typename }}</li>
    </ul>
  </template>
</template>

