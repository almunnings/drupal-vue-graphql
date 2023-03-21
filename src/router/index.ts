import { createRouter, createWebHistory } from 'vue-router'
import { useRouteStore } from '@/stores/useRouteStore'
import ContentView from '@/views/ContentView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: ContentView,

      beforeEnter: async (to, from, next) => {
        const routeStore = useRouteStore()

        // Prefetch the route before going to a url.
        await routeStore.fetchRoute(to.path)
        routeStore.setCurrentPath(to.path)

        next()
      }
    }
  ]
})

export default router
