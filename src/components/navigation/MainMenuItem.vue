<script setup lang="ts">
import { Dropdown } from 'bootstrap'
import { ref, onMounted } from 'vue'
import type { PropType } from 'vue'
import type { MenuItem } from '@/services/drupal'
import RouteLink from '@/components/navigation/RouteLink.vue'

defineProps({
  item: {
    type: Object as PropType<MenuItem>,
    required: true
  }
})

const dropdown = ref<HTMLElement | null>(null)

onMounted(() => {
  if (dropdown.value) {
    new Dropdown(dropdown.value)
  }
})
</script>

<template>
  <div class="btn-group" v-if="item">
    <RouteLink
      v-if="item.url"
      :url="item.url"
      :internal="item.internal"
      :title="item.title"
      class="btn btn-outline-secondary"
      :class="item.attributes.class"
      :target="item.attributes.target"
      :id="item.attributes.id"
    />

    <template v-if="item.children.length">
      <button
        type="button"
        class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        ref="dropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
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
    </template>
  </div>
</template>
