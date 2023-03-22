<script setup lang="ts">
import { computed, PropType } from 'vue'
import { useMenuStore } from '@/stores/menu'
import type { MenuAvailable } from '@/services/drupal'

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
        <template v-for="item in menu.items" :key="item.title">
          <router-link
            v-if="item.route.internal"
            :to="item.route.url"
            class="btn btn-outline-secondary"
            active-class="active"
          >
            {{ item.title || 'Untitled' }}
          </router-link>
          <a v-else :href="item.route.url" class="btn btn-outline-secondary">
            {{ item.title || 'Untitled' }}
          </a>
        </template>

        <router-link to="/force/error" class="btn btn-outline-secondary">
          Force error 1
        </router-link>

        <router-link to="/force/error2" class="btn btn-outline-secondary">
          Force error 2
        </router-link>
      </div>
    </div>
  </div>
</template>
