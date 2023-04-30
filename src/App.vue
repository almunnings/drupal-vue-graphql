<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRouteStore } from '@/stores/route'
import { useInfoStore } from '@/stores/info'
import { isRouteInternal } from '@/services/drupal'

import MainMenu from '@/components/navigation/MainMenu.vue'

const routeStore = useRouteStore()
const $route = useRoute()

const error = computed(() => routeStore.errors.get($route.path))
const loading = computed(() => routeStore.loading.get($route.path))
const route = computed(() => routeStore.routes.get($route.path))

// Get site information like homepage url.
useInfoStore().fetchInfo()

// Get the entity off the current route if it's internal.
const entity = computed(() =>
  route.value && isRouteInternal(route.value) ? route.value.entity : undefined
)
</script>

<template>
  <div class="container py-5">
    <h1 class="mb-1">
      Vue 3 with TS, Pinia, GenQL &amp; Vite to Drupal GraphQL
    </h1>

    <h2 class="h5 text-muted mb-4" :class="{ 'placeholder-glow': loading }">
      <span v-if="loading" class="placeholder col-2"></span>
      <span v-else>{{ entity?.id || 'No entity title' }}</span>
    </h2>

    <!-- Example menu -->
    <main-menu class="my-3" name="MAIN" />

    <!-- Example notifications -->
    <div v-if="error" class="alert alert-warning" role="alert">
      {{ error }}
    </div>

    <div v-if="loading" class="alert alert-info" role="alert">
      Loading route
      <em>{{ $route.path }}</em>
    </div>

    <!-- Example content -->
    <main class="position-relative mt-3">
      <router-view v-slot="{ Component, route }">
        <transition name="fade">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
  </div>
</template>
