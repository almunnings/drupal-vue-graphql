<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { useRouteStore } from '@/stores/route'
import {
  isNodePage,
  isRouteInternal,
  isNodeInterface,
  isParagraphSection,
  isLayoutParagraphsInterface
} from '@/services/drupal'

import type { ParagraphInterface } from '@/services/drupal'

import BreadcrumbMenu from '@/components/navigation/BreadcrumbMenu.vue'
import ParagraphSection from '@/components/paragraphs/ParagraphSection.vue'

// Get the current route from the store.
const route = computed(() => useRouteStore().routes.get(useRoute().path))

// Get the entity off the current route if it's internal.
const entity = computed(() =>
  route.value && isRouteInternal(route.value) ? route.value.entity : undefined
)

const breadcrumbs = computed(() =>
  route.value && isRouteInternal(route.value) && route.value.breadcrumbs
    ? route.value.breadcrumbs
    : []
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
const getParagraphChildren = (section: ParagraphInterface) =>
  content.value &&
  content.value
    .filter(isLayoutParagraphsInterface)
    .filter((item) => item.composition.position?.parentId === section.id)

// View isn't changing, but the data source is.
// So we need to fetch the data again.
onBeforeRouteUpdate((to) => {
  useRouteStore().fetchRoute(to.path)
})
</script>

<template>
  <div v-if="entity && isNodeInterface(entity)">
    <h2>{{ entity.title }}</h2>

    <!-- Breadcrumbs -->
    <BreadcrumbMenu
      v-if="breadcrumbs.length"
      :links="breadcrumbs"
      :current="entity?.title"
    />

    <!-- Section content -->
    <ParagraphSection
      v-for="section in sections"
      :key="section.id"
      :paragraph="section"
      :children="getParagraphChildren(section)"
    />
  </div>
</template>
