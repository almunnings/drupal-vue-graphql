import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

import { drupalClient, Route, RouteFragment, TypeNodeFragment } from '@/drupal'

export const useRouteStore = defineStore('route', () => {
  const routes = reactive(new Map<string, Route>())
  const loading = ref(false)
  const error = ref()

  /**
   * Fetch a route from the API.
   * @param path The path of the route to fetch.
   * @returns The route.
   */
  const fetchRoute = async (path: string) => {
    const cache = routes.get(path)
    if (cache) {
      return cache
    }

    try {
      loading.value = true

      const { route } = await drupalClient.query({
        route: {
          __args: { path },
          on_Route: RouteFragment,
          on_RouteInternal: {
            entity: {
              on_TypeNodeInterface: TypeNodeFragment
            }
          }
        }
      })

      routes.set(path, route)
    } catch (error) {
      error.value = error
    } finally {
      loading.value = false
    }

    return routes.get(path)
  }

  return {
    routes,
    loading,
    error,
    fetchRoute
  }
})
