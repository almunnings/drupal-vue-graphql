<script setup lang="ts">
import { Collapse } from 'bootstrap'
import { computed, ref, onMounted } from 'vue'
import type { PropType } from 'vue'
import { useMenuStore } from '@/stores/menu'
import type { MenuAvailable } from '@/services/drupal'
import MainMenuItem from '@/components/navigation/MainMenuItem.vue'

const props = defineProps({
  name: {
    type: String as PropType<MenuAvailable>,
    required: true
  }
})

const collapse = ref<HTMLElement | null>(null)

onMounted(() => {
  if (collapse.value) {
    new Collapse(collapse.value)
  }
})

const menuStore = useMenuStore()
menuStore.fetchMenu(props.name)

const menu = computed(() => menuStore.menus.get(props.name))
const loading = computed(() => menuStore.loading.get(props.name))
</script>

<template>
  <nav v-if="loading" class="placeholder-glow">
    <span class="placeholder col-12 rounded" style="min-height: 3rem"></span>
  </nav>

  <nav v-else class="navbar navbar-expand-sm bg-body-tertiary rounded">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        ref="collapse"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav me-auto" v-if="menu">
          <MainMenuItem
            :item="item"
            v-for="item in menu?.items"
            :key="item.id"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>
