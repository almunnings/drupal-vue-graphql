<script setup lang="ts">
import { computed } from 'vue'
import {
  isNodePage,
  isRouteInternal,
  isTypeNodeInterface,
  isParagraphSection,
  isTypeParagraphUnion
} from '@/services/drupal'
import { useRouteStore } from '@/stores/route'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

import ParagraphSection from '@/components/paragraphs/ParagraphSection.vue'

// Get the currrent route from the store.
const $route = useRoute()
const routeStore = useRouteStore()
const route = computed(() => routeStore.routes.get($route.path))

// Get the entity off the current route if it's internal.
const entity = computed(() =>
  route.value && isRouteInternal(route.value) ? route.value.entity : undefined
)

const paragraphContent = computed(() =>
  entity.value && isNodePage(entity.value) ? entity.value.content || [] : []
)

const contentSections = computed(() =>
  paragraphContent.value.filter(isParagraphSection)
)

const sectionChildren = (id: string) => {
  return paragraphContent.value
    .filter(isTypeParagraphUnion)
    .filter((item) => item.composition.position?.parentId === id)
}

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

    <ParagraphSection
      v-for="section in contentSections"
      :key="section.id"
      :paragraph="section"
      :children="sectionChildren(section.id)"
    />
  </div>
</template>
