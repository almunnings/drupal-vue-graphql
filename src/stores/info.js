import { ref } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { drupalClient } from '@/services/drupal';
export const useInfoStore = defineStore('info', () => {
    const home = ref(null);
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
        });
        home.value = info.home;
    };
    return {
        home,
        fetchInfo
    };
});
// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useInfoStore, import.meta.hot));
}
