<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { useMenuStore } from '@/stores/menu'
import type { MenuAvailable } from '@/services/drupal'
import RouteLink from '@/components/navigation/RouteLink.vue'

const props = defineProps({
  name: {
    type: String as PropType<MenuAvailable>,
    required: true
  }
})

const menuStore = useMenuStore()
menuStore.fetchMenu(props.name)

const menu = computed(() => menuStore.menus.get(props.name))
</script>

<template>
  <div class="card" v-if="menu">
    <h5 class="card-header">{{ menu.name }}</h5>
    <div class="card-body">
      <div class="btn-group" role="group">
        <template v-for="item in menu.items" :key="item.id">
          <RouteLink
            v-if="item.route"
            :route="item.route"
            :title="item.title"
            class="btn btn-outline-secondary"
          />
        </template>
      </div>
    </div>
  </div>
</template>
