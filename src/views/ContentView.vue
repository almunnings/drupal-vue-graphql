<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { useRouteStore } from '@/stores/route'
import {
  isNodePage,
  isRouteInternal,
  isTypeNodeInterface,
  isParagraphSection,
  isLayoutParagraphsInterface
} from '@/services/drupal'

import type { TypeParagraphInterface } from '@/services/drupal'

import ParagraphSection from '@/components/paragraphs/ParagraphSection.vue'

// Get the currrent route from the store.
const route = computed(() => useRouteStore().routes.get(useRoute().path))

// Get the entity off the current route if it's internal.
const entity = computed(() =>
  route.value && isRouteInternal(route.value) ? route.value.entity : undefined
)

// Get the content field from the node content if its a node page.
const content = computed(() =>
  entity.value && isNodePage(entity.value) ? entity.value.content : undefined
)

// Get the section types from the content.
const sections = computed(
  () => content.value && content.value.filter(isParagraphSection)
)

// Get the children of a section.
const getParagraphChildren = (section: TypeParagraphInterface) =>
  content.value &&
  content.value
    .filter(isLayoutParagraphsInterface)
    .filter((item) => item.composition.position?.parentId === section.id)

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
        Route: {{ route.internal ? 'Internal' : 'External' }}
      </li>

      <template v-if="entity && isTypeNodeInterface(entity)">
        <li class="list-group-item">UUID: {{ entity.id }}</li>
        <li class="list-group-item">Title: {{ entity.title }}</li>
        <li class="list-group-item">Type: {{ entity.__typename }}</li>
      </template>
    </ul>

    <ParagraphSection
      v-for="section in sections"
      :key="section.id"
      :paragraph="section"
      :children="getParagraphChildren(section)"
    />
  </div>
</template>
