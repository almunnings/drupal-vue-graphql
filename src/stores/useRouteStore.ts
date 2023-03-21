import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

import genqlClient from '@/plugins/genql'
import type { Route } from '@/genql'

export const useRouteStore = defineStore('route', () => {
  const routes = reactive(new Map<string, Route>())
  const loading = ref(false)
  const error = ref()
  const currentPath = ref()

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

      const { route } = await genqlClient.query({
        route: {
          __typename: true,

          on_Route: {
            url: true,
            internal: true
          },

          on_RouteInternal: {
            entity: {
              __typename: true,

              on_TypeNodeInterface: {
                id: true,
                title: true
              }
            }
          },

          __args: {
            path
          }
        }
      })

      routes.set(path, route)
    } catch (error) {
      error.value = error
      console.error(error)
    } finally {
      loading.value = false
    }

    return routes.get(path)
  }

  /**
   * The current path.
   * @type {string}
   */
  const setCurrentPath = (path: string) => {
    currentPath.value = path
  }

  /**
   * The current routed object.
   */
  const getCurrentRoute = computed(() => routes.get(currentPath.value))

  return {
    routes,
    loading,
    error,
    fetchRoute,
    setCurrentPath,
    getCurrentRoute
  }
})
