<script setup lang="ts">
import { computed } from 'vue'
import { isRouteInternal, isTypeNodeInterface } from '@/drupal'
import { useRouteStore } from '@/stores/route'
import { useRoute } from 'vue-router'

// Get the currrent route from the store.
const route = useRoute()
const routeStore = useRouteStore()
const currentRoute = computed(() => routeStore.routes.get(route.path))

// Get the entity off the current route if it's internal.
const entity = computed(() => currentRoute.value && isRouteInternal(currentRoute.value)
  ? currentRoute.value.entity
  : undefined
)
</script>

<template>
  <h1>Sample vue app with ts, pinia, vue 3, genql, vite to Drupal GraphQL</h1>

  <ul class="list-group">
    <template v-if="currentRoute">
      <li class="list-group-item">URL: {{ currentRoute.url }}</li>
      <li class="list-group-item">
        Route Internal:
        <span
          class="badge"
          :class="{
            'bg-primary': currentRoute.internal,
            'bg-secondary': !currentRoute.internal
          }"
        >
        {{ currentRoute.internal ? 'Internal' : 'External' }}
        </span>

      </li>
    </template>
    <template v-if="entity && isTypeNodeInterface(entity)">
        <li class="list-group-item">UUID: {{ entity.id }}</li>
        <li class="list-group-item">Title: {{ entity.title }}</li>
        <li class="list-group-item">Type: {{ entity.__typename }}</li>
    </template>
  </ul>
</template>

