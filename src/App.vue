<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRouteStore } from '@/stores/route'
import { useInfoStore } from '@/stores/info'
import { isRouteInternal } from '@/services/drupal'

import MainMenu from '@/components/navigation/MainMenu.vue'
import BreadcrumbMenu from '@/components/navigation/BreadcrumbMenu.vue'

const $route = useRoute()
const routeStore = useRouteStore()

const route = computed(() => routeStore.routes.get($route.path))
const error = computed(() => routeStore.errors.get($route.path))
const loading = computed(() => routeStore.loading.get($route.path))

// Get the entity off the current route if it's internal.
const entity = computed(() =>
  route.value && isRouteInternal(route.value) ? route.value.entity : undefined
)

const breadcrumbs = computed(() =>
  route.value && isRouteInternal(route.value) && route.value.breadcrumbs
    ? route.value.breadcrumbs
    : []
)

// Get site information like homepage url.
useInfoStore().fetchInfo()
</script>

<template>
  <div class="container py-2 py-md-5">
    <h1 class="mb-1">Drupal GraphQL, Vue 3, GenQL &amp; Vite</h1>

    <!-- Example menu -->
    <MainMenu class="my-3" name="MAIN" />

    <h2 :class="{ 'placeholder-glow': loading }">
      <span class="placeholder col-6" v-if="loading"></span>
      <template v-else>{{ entity?.title }}</template>
    </h2>

    <h3 class="h6 text-muted mb-4" :class="{ 'placeholder-glow': loading }">
      <span class="placeholder col-7" v-if="loading"></span>
      <template v-else>{{ entity?.id }}</template>
    </h3>

    <!-- Breadcrumbs -->
    <BreadcrumbMenu
      v-if="breadcrumbs.length"
      :links="breadcrumbs"
      :current="entity?.title"
    />

    <!-- Example content -->
    <main
      class="position-relative mt-3"
      :class="{ 'placeholder-glow': loading }"
    >
      <router-view v-slot="{ Component, route }">
        <transition name="fade">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>

    <!-- Example notifications -->
    <div v-if="error" class="alert alert-warning" role="alert">
      {{ error }}
    </div>
  </div>
</template>
