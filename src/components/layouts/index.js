import { defineAsyncComponent } from 'vue';
export const getLayoutComponent = (paragraph) => {
    switch (paragraph.composition.layout?.id) {
        case 'layout_twocol':
            return defineAsyncComponent(() => import('@/components/layouts/LayoutTwoColumn.vue'));
        case 'layout_onecol':
        default:
            return defineAsyncComponent(() => import('@/components/layouts/LayoutOneColumn.vue'));
    }
};
