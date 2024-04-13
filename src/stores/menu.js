import { reactive } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { drupalClient, MenuItemFragment } from '@/services/drupal';
export const useMenuStore = defineStore('menu', () => {
    const menus = reactive(new Map());
    const errors = reactive(new Map());
    const loading = reactive(new Map());
    /**
     * Fetch a menu from the API.
     * @param path The path of the menu to fetch.
     * @returns The menu.
     */
    const fetchMenu = async (name) => {
        const cache = menus.get(name);
        if (cache) {
            return cache;
        }
        try {
            loading.set(name, true);
            const { menu } = await drupalClient.query({
                menu: {
                    __args: { name },
                    __scalar: true,
                    items: {
                        ...MenuItemFragment,
                        children: MenuItemFragment
                    }
                }
            });
            if (!menu) {
                throw new Error(`Menu not found: ${name}`);
            }
            return menus.set(name, menu);
        }
        catch (e) {
            return errors.set(name, e instanceof Error ? e : new Error(String(e)));
        }
        finally {
            loading.set(name, false);
        }
    };
    return {
        menus,
        errors,
        loading,
        fetchMenu
    };
});
// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMenuStore, import.meta.hot));
}
