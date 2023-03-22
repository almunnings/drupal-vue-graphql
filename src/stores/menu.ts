import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { drupalClient, MenuFragment } from '@/services/drupal'
import type { Menu, MenuAvailable } from '@/services/drupal'

export const useMenuStore = defineStore('menu', () => {
  const menus = reactive(new Map<string, Menu>())
  const errors = reactive(new Map<string, Error>())
  const loading = reactive(new Map<string, boolean>())

  /**
   * Fetch a menu from the API.
   * @param path The path of the menu to fetch.
   * @returns The menu.
   */
  const fetchMenu = async (name: MenuAvailable) => {
    const cache = menus.get(name)
    if (cache) {
      return cache
    }

    try {
      loading.set(name, true)

      const { menu } = await drupalClient.query({
        menu: {
          __args: { name },
          ...MenuFragment
        }
      })

      if (!menu) {
        throw new Error(`Menu not found: ${name}`)
      }

      return menus.set(name, menu)
    } catch (e: Error) {
      return errors.set(name, e)
    } finally {
      loading.set(name, false)
    }
  }

  return {
    menus,
    errors,
    loading,
    fetchMenu
  }
})
