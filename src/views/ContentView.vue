<script setup lang="ts">
import { computed } from 'vue'
import { isRouteInternal, isTypeNodeInterface } from '@/drupal'
import { useRouteStore } from '@/stores/route'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

// Get the currrent route from the store.
const route = useRoute()
const routeStore = useRouteStore()
const currentRoute = computed(() => routeStore.routes.get(route.path))
const currentError = computed(() => routeStore.errors.get(route.path))

// Get the entity off the current route if it's internal.
const entity = computed(() =>
  currentRoute.value && isRouteInternal(currentRoute.value)
    ? currentRoute.value.entity
    : undefined
)

// View isnt changing, but the data source is.
// So we need to fetch the data again.
onBeforeRouteUpdate(async (to, from) => {
  await routeStore.fetchRoute(to.path)
})
</script>

<template>
  <h1 class="mb-3">
    Sample vue app with ts, pinia, vue 3, genql, vite to Drupal GraphQL
  </h1>

  <!-- Test navigation -->

  <div class="my-3">
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <RouterLink
        to="/node/1"
        class="btn btn-outline-secondary"
        active-class="active"
      >
        Test link 1
      </RouterLink>
      <RouterLink
        to="/node/2"
        class="btn btn-outline-secondary"
        active-class="active"
      >
        Test link 2
      </RouterLink>
    </div>
  </div>

  <!-- Loading or Error -->

  <div v-if="currentError" class="alert alert-warning" role="alert">
    {{ currentError }}
  </div>

  <div v-if="routeStore.loading" class="alert alert-info" role="alert">
    Loading
  </div>

  <!-- Page details -->

  <ul class="my-3 list-group" v-if="currentRoute">
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

    <template v-if="entity && isTypeNodeInterface(entity)">
      <li class="list-group-item">UUID: {{ entity.id }}</li>
      <li class="list-group-item">Title: {{ entity.title }}</li>
      <li class="list-group-item">Type: {{ entity.__typename }}</li>
    </template>
  </ul>
</template>
