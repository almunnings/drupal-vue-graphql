import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useRouteStore } from '@/stores/route';
import { useInfoStore } from '@/stores/info';
import { isRouteInternal } from '@/services/drupal';
import MainMenu from '@/components/navigation/MainMenu.vue';
import BreadcrumbMenu from '@/components/navigation/BreadcrumbMenu.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const $route = useRoute();
const routeStore = useRouteStore();
const route = computed(() => routeStore.routes.get($route.path));
const error = computed(() => routeStore.errors.get($route.path));
const loading = computed(() => routeStore.loading.get($route.path));
// Get the entity off the current route if it's internal.
const entity = computed(() => route.value && isRouteInternal(route.value) ? route.value.entity : undefined);
const breadcrumbs = computed(() => route.value && isRouteInternal(route.value) && route.value.breadcrumbs
    ? route.value.breadcrumbs
    : []);
// Get site information like homepage url.
useInfoStore().fetchInfo();
let __VLS_modelEmitsType;
const __VLS_componentsOption = {};
let __VLS_name;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h1;
    __VLS_components.MainMenu;
    __VLS_components.MainMenu;
    // @ts-ignore
    [MainMenu,];
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    __VLS_components.BreadcrumbMenu;
    __VLS_components.BreadcrumbMenu;
    // @ts-ignore
    [BreadcrumbMenu,];
    __VLS_intrinsicElements.main;
    __VLS_intrinsicElements.main;
    __VLS_components.RouterView;
    __VLS_components.routerView;
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView, RouterView,];
    __VLS_components.Transition;
    __VLS_components.transition;
    __VLS_components.Transition;
    __VLS_components.transition;
    // @ts-ignore
    [Transition, Transition,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("container py-2 py-md-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("container py-2 py-md-5"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["h1"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: ("mb-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: ("mb-1"), }));
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = {}.MainMenu;
            const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, class: ("my-3"), name: ("MAIN"), }));
            ({}.MainMenu);
            const __VLS_12 = __VLS_11({ ...{}, class: ("my-3"), name: ("MAIN"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: ("my-3"), name: ("MAIN"), }));
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        {
            const __VLS_15 = __VLS_intrinsicElements["h2"];
            const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
            const __VLS_17 = __VLS_16({ ...{}, class: (({ 'placeholder-glow': __VLS_ctx.loading })), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
            ({}({ ...{}, class: (({ 'placeholder-glow': __VLS_ctx.loading })), }));
            if (__VLS_ctx.loading) {
                {
                    const __VLS_20 = __VLS_intrinsicElements["span"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, class: ("placeholder col-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, class: ("placeholder col-6"), }));
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                // @ts-ignore
                [loading, loading,];
            }
            else {
                (__VLS_ctx.entity?.title);
                // @ts-ignore
                [entity,];
            }
            (__VLS_18.slots).default;
            const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
        }
        {
            const __VLS_25 = __VLS_intrinsicElements["h3"];
            const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
            const __VLS_27 = __VLS_26({ ...{}, class: ("h6 text-muted mb-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
            ({}({ ...{}, class: ("h6 text-muted mb-4"), }));
            ({ 'placeholder-glow': __VLS_ctx.loading });
            if (__VLS_ctx.loading) {
                {
                    const __VLS_30 = __VLS_intrinsicElements["span"];
                    const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                    const __VLS_32 = __VLS_31({ ...{}, class: ("placeholder col-7"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                    ({}({ ...{}, class: ("placeholder col-7"), }));
                    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                }
                // @ts-ignore
                [loading, loading,];
            }
            else {
                (__VLS_ctx.entity?.id);
                // @ts-ignore
                [entity,];
            }
            (__VLS_28.slots).default;
            const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
        }
        if (__VLS_ctx.breadcrumbs.length) {
            {
                const __VLS_35 = {}.BreadcrumbMenu;
                const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ ...{}, links: ((__VLS_ctx.breadcrumbs)), current: ((__VLS_ctx.entity?.title)), }));
                ({}.BreadcrumbMenu);
                const __VLS_37 = __VLS_36({ ...{}, links: ((__VLS_ctx.breadcrumbs)), current: ((__VLS_ctx.entity?.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                ({}({ ...{}, links: ((__VLS_ctx.breadcrumbs)), current: ((__VLS_ctx.entity?.title)), }));
                const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
            }
            // @ts-ignore
            [breadcrumbs, breadcrumbs, entity,];
        }
        {
            const __VLS_40 = __VLS_intrinsicElements["main"];
            const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
            const __VLS_42 = __VLS_41({ ...{}, class: ("position-relative mt-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
            ({}({ ...{}, class: ("position-relative mt-3"), }));
            ({ 'placeholder-glow': __VLS_ctx.loading });
            {
                const __VLS_45 = {}.RouterView;
                const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, }));
                ({}.RouterView);
                ({}.RouterView);
                const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                ({}({ ...{}, }));
                {
                    const [{ Component, route }] = __VLS_getSlotParams((__VLS_48.slots).default);
                    {
                        const __VLS_50 = {}.transition;
                        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, name: ("fade"), }));
                        ({}.transition);
                        ({}.transition);
                        const __VLS_52 = __VLS_51({ ...{}, name: ("fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                        ({}({ ...{}, name: ("fade"), }));
                        {
                            const __VLS_55 = (Component);
                            const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{}, key: ((route.path)), }));
                            const __VLS_57 = __VLS_56({ ...{}, key: ((route.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                            ({}({ ...{}, key: ((route.path)), }));
                            const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
                        }
                        (__VLS_53.slots).default;
                        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                    }
                    __VLS_48.slots['' /* empty slot name completion */]
                    // @ts-ignore
                    [loading, ];
                }
                const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
            }
            (__VLS_43.slots).default;
            const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
        }
        if (__VLS_ctx.error) {
            {
                const __VLS_60 = __VLS_intrinsicElements["div"];
                const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
                const __VLS_62 = __VLS_61({ ...{}, class: ("alert alert-warning"), role: ("alert"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                ({}({ ...{}, class: ("alert alert-warning"), role: ("alert"), }));
                (__VLS_ctx.error);
                (__VLS_63.slots).default;
                const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
            }
            // @ts-ignore
            [error, error,];
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            MainMenu: MainMenu,
            BreadcrumbMenu: BreadcrumbMenu,
            error: error,
            loading: loading,
            entity: entity,
            breadcrumbs: breadcrumbs,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
