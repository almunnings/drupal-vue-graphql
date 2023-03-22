<script setup lang="ts">
import { computed } from 'vue'
import { isRouteInternal, isTypeNodeInterface } from '@/services/drupal'
import { useRouteStore } from '@/stores/route'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

// Get the currrent route from the store.
const $route = useRoute()
const routeStore = useRouteStore()
const route = computed(() => routeStore.routes.get($route.path))

// Get the entity off the current route if it's internal.
const entity = computed(() =>
  route.value && isRouteInternal(route.value) ? route.value.entity : undefined
)

// View isnt changing, but the data source is.
// So we need to fetch the data again.
onBeforeRouteUpdate((to) => {
  useRouteStore().fetchRoute(to.path)
})
</script>

<template>
  <div>
    <ul class="list-group" v-if="route">
      <li class="list-group-item">URL: {{ route.url }}</li>
      <li class="list-group-item">
        Route Internal:
        <span
          class="badge"
          :class="{
            'bg-primary': route.internal,
            'bg-secondary': !route.internal
          }"
        >
          {{ route.internal ? 'Internal' : 'External' }}
        </span>
      </li>

      <template v-if="entity && isTypeNodeInterface(entity)">
        <li class="list-group-item">UUID: {{ entity.id }}</li>
        <li class="list-group-item">Title: {{ entity.title }}</li>
        <li class="list-group-item">Type: {{ entity.__typename }}</li>
      </template>
    </ul>
  </div>
</template>
