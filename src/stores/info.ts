import { ref } from 'vue'
import { defineStore } from 'pinia'
import { drupalClient } from '@/services/drupal'

export const useInfoStore = defineStore('info', () => {
  const home = ref<string | null>(null)

  /**
   * Fetch a menu from the API.
   * @param path The path of the menu to fetch.
   * @returns The menu.
   */
  const fetchInfo = async () => {
    const { info } = await drupalClient.query({
      info: {
        home: true
      }
    })

    home.value = info.home
    console.log(home)
  }

  return {
    home,
    fetchInfo
  }
})
