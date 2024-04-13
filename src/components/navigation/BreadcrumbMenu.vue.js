import RouteLink from '@/components/navigation/RouteLink.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    links: {
        type: Array,
        required: true
    },
    current: {
        type: String,
        required: false
    }
});
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
    __VLS_intrinsicElements.nav;
    __VLS_intrinsicElements.nav;
    __VLS_intrinsicElements.ol;
    __VLS_intrinsicElements.ol;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_components.RouteLink;
    __VLS_components.RouteLink;
    // @ts-ignore
    [RouteLink,];
    {
        const __VLS_0 = __VLS_intrinsicElements["nav"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, "aria-label": ("breadcrumb"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, "aria-label": ("breadcrumb"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["ol"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: ("breadcrumb"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: ("breadcrumb"), }));
            for (const [link, delta] of __VLS_getVForSourceType((__VLS_ctx.links))) {
                {
                    const __VLS_10 = __VLS_intrinsicElements["li"];
                    const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                    const __VLS_12 = __VLS_11({ ...{}, class: ("breadcrumb-item"), key: ((delta)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                    ({}({ ...{}, class: ("breadcrumb-item"), key: ((delta)), }));
                    if (link.url) {
                        {
                            const __VLS_15 = {}.RouteLink;
                            const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, url: ((link.url)), internal: ((link.internal)), title: ((link.title)), }));
                            ({}.RouteLink);
                            const __VLS_17 = __VLS_16({ ...{}, url: ((link.url)), internal: ((link.internal)), title: ((link.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                            ({}({ ...{}, url: ((link.url)), internal: ((link.internal)), title: ((link.title)), }));
                            const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                        }
                        // @ts-ignore
                        [links,];
                    }
                    (__VLS_13.slots).default;
                    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
                }
            }
            if (__VLS_ctx.current) {
                {
                    const __VLS_20 = __VLS_intrinsicElements["li"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, class: ("breadcrumb-item active"), "aria-current": ("page"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, class: ("breadcrumb-item active"), "aria-current": ("page"), }));
                    (__VLS_ctx.current);
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                // @ts-ignore
                [current, current,];
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
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
            RouteLink: RouteLink,
        };
    },
    props: {
        links: {
            type: Array,
            required: true
        },
        current: {
            type: String,
            required: false
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        links: {
            type: Array,
            required: true
        },
        current: {
            type: String,
            required: false
        }
    },
});
