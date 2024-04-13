import { createRouter, createWebHistory } from 'vue-router';
import { useRouteStore } from '@/stores/route';
import ContentView from '@/views/ContentView.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: ContentView,
            beforeEnter: async (to, from, next) => {
                useRouteStore().fetchRoute(to.path);
                next();
            }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        else {
            return { top: 0, behavior: 'smooth' };
        }
    }
});
export default router;
