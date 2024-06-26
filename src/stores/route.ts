import { reactive } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { drupalClient, RouteFragment, NodeFragment } from '@/services/drupal'
import type { Route } from '@/services/drupal'

export const useRouteStore = defineStore('route', () => {
  const routes = reactive(new Map<string, Route>())
  const errors = reactive(new Map<string, Error>())
  const loading = reactive(new Map<string, boolean>())

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
      loading.set(path, true)

      const { route } = await drupalClient.query({
        route: {
          __args: { path },
          on_Route: RouteFragment,
          on_RouteInternal: {
            breadcrumbs: {
              __scalar: true
            },
            entity: {
              on_NodeInterface: NodeFragment
            }
          }
        }
      })

      if (!route) {
        throw new Error(`Route not found: ${path}`)
      }

      return routes.set(path, route)
    } catch (e: unknown) {
      return errors.set(path, e instanceof Error ? e : new Error(String(e)))
    } finally {
      loading.set(path, false)
    }
  }

  return {
    routes,
    errors,
    loading,
    fetchRoute
  }
})

// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRouteStore, import.meta.hot))
}
