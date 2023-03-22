import { createRouter, createWebHistory } from 'vue-router'
import { useRouteStore } from '@/stores/route'
import ContentView from '@/views/ContentView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: ContentView,

      beforeEnter: async (to, from, next) => {
        useRouteStore().fetchRoute(to.path)
        next()
      }
    }
  ]
})

export default router
