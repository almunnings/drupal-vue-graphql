<script setup lang="ts">
import type { PropType } from 'vue'
import type { MenuItem } from '@/services/drupal'
import RouteLink from '@/components/navigation/RouteLink.vue'

const props = defineProps({
  item: {
    type: Object as PropType<MenuItem>,
    required: true
  }
})
</script>

<template>
  <li class="nav-item" v-if="item" :class="{ dropdown: item.children.length }">
    <RouteLink
      v-if="item.url && !item.children.length"
      :url="item.url"
      :internal="item.internal"
      :title="item.title"
      class="nav-link"
      :class="props.item.attributes.class"
      :target="item.attributes.target"
      :id="item.attributes.id"
    />

    <RouteLink
      url="#"
      :internal="false"
      :title="item.title"
      class="nav-link dropdown-toggle"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      v-else
    />

    <ul class="dropdown-menu" v-if="item.children.length">
      <li>
        <RouteLink
          v-if="item.url"
          :url="item.url"
          :internal="item.internal"
          :title="item.title"
          class="dropdown-item"
          :target="item.attributes.target"
        />
      </li>

      <li class="dropdown-divider"></li>

      <li v-for="(child, delta) in item.children" :key="delta">
        <RouteLink
          v-if="child.url"
          :url="child.url"
          :internal="child.internal"
          :title="child.title"
          class="dropdown-item"
          :class="child.attributes.class"
          :target="child.attributes.target"
          :id="child.attributes.id"
        />
      </li>
    </ul>
  </li>
</template>
