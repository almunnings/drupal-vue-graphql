import RouteLink from '@/components/navigation/RouteLink.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    item: {
        type: Object,
        required: true
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
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_components.RouteLink;
    __VLS_components.RouteLink;
    __VLS_components.RouteLink;
    __VLS_components.RouteLink;
    __VLS_components.RouteLink;
    __VLS_components.RouteLink;
    __VLS_components.RouteLink;
    __VLS_components.RouteLink;
    // @ts-ignore
    [RouteLink, RouteLink, RouteLink, RouteLink,];
    __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.ul;
    if (__VLS_ctx.item) {
        {
            const __VLS_0 = __VLS_intrinsicElements["li"];
            const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
            const __VLS_2 = __VLS_1({ ...{}, class: ("nav-item"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ ...{}, class: ("nav-item"), }));
            ({ dropdown: __VLS_ctx.item.children.length });
            if (__VLS_ctx.item.url && !__VLS_ctx.item.children.length) {
                {
                    const __VLS_5 = {}.RouteLink;
                    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, url: ((__VLS_ctx.item.url)), internal: ((__VLS_ctx.item.internal)), title: ((__VLS_ctx.item.title)), class: ("nav-link"), target: ((__VLS_ctx.item.attributes.target)), id: ((__VLS_ctx.item.attributes.id)), }));
                    ({}.RouteLink);
                    const __VLS_7 = __VLS_6({ ...{}, url: ((__VLS_ctx.item.url)), internal: ((__VLS_ctx.item.internal)), title: ((__VLS_ctx.item.title)), class: ("nav-link"), target: ((__VLS_ctx.item.attributes.target)), id: ((__VLS_ctx.item.attributes.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                    ({}({ ...{}, url: ((__VLS_ctx.item.url)), internal: ((__VLS_ctx.item.internal)), title: ((__VLS_ctx.item.title)), class: ("nav-link"), target: ((__VLS_ctx.item.attributes.target)), id: ((__VLS_ctx.item.attributes.id)), }));
                    (props.item.attributes.class);
                    const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
                }
                // @ts-ignore
                [item, item, item, item, item, item, item, item, item,];
            }
            else {
                {
                    const __VLS_10 = {}.RouteLink;
                    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, url: ("#"), internal: ((false)), title: ((__VLS_ctx.item.title)), class: ("nav-link dropdown-toggle"), role: ("button"), dataBsToggle: ("dropdown"), "aria-expanded": ("false"), }));
                    ({}.RouteLink);
                    const __VLS_12 = __VLS_11({ ...{}, url: ("#"), internal: ((false)), title: ((__VLS_ctx.item.title)), class: ("nav-link dropdown-toggle"), role: ("button"), dataBsToggle: ("dropdown"), "aria-expanded": ("false"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                    ({}({ ...{}, url: ("#"), internal: ((false)), title: ((__VLS_ctx.item.title)), class: ("nav-link dropdown-toggle"), role: ("button"), dataBsToggle: ("dropdown"), "aria-expanded": ("false"), }));
                    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
                }
                // @ts-ignore
                [item,];
            }
            if (__VLS_ctx.item.children.length) {
                {
                    const __VLS_15 = __VLS_intrinsicElements["ul"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, class: ("dropdown-menu"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, class: ("dropdown-menu"), }));
                    {
                        const __VLS_20 = __VLS_intrinsicElements["li"];
                        const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                        const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        ({}({ ...{}, }));
                        if (__VLS_ctx.item.url) {
                            {
                                const __VLS_25 = {}.RouteLink;
                                const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, url: ((__VLS_ctx.item.url)), internal: ((__VLS_ctx.item.internal)), title: ((__VLS_ctx.item.title)), class: ("dropdown-item"), target: ((__VLS_ctx.item.attributes.target)), }));
                                ({}.RouteLink);
                                const __VLS_27 = __VLS_26({ ...{}, url: ((__VLS_ctx.item.url)), internal: ((__VLS_ctx.item.internal)), title: ((__VLS_ctx.item.title)), class: ("dropdown-item"), target: ((__VLS_ctx.item.attributes.target)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                                ({}({ ...{}, url: ((__VLS_ctx.item.url)), internal: ((__VLS_ctx.item.internal)), title: ((__VLS_ctx.item.title)), class: ("dropdown-item"), target: ((__VLS_ctx.item.attributes.target)), }));
                                const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                            }
                            // @ts-ignore
                            [item, item, item, item, item, item,];
                        }
                        (__VLS_23.slots).default;
                        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    }
                    {
                        const __VLS_30 = __VLS_intrinsicElements["li"];
                        const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                        const __VLS_32 = __VLS_31({ ...{}, class: ("dropdown-divider"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                        ({}({ ...{}, class: ("dropdown-divider"), }));
                        const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                    }
                    for (const [child, delta] of __VLS_getVForSourceType((__VLS_ctx.item.children))) {
                        {
                            const __VLS_35 = __VLS_intrinsicElements["li"];
                            const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                            const __VLS_37 = __VLS_36({ ...{}, key: ((delta)), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                            ({}({ ...{}, key: ((delta)), }));
                            if (child.url) {
                                {
                                    const __VLS_40 = {}.RouteLink;
                                    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, url: ((child.url)), internal: ((child.internal)), title: ((child.title)), class: ("dropdown-item"), target: ((child.attributes.target)), id: ((child.attributes.id)), }));
                                    ({}.RouteLink);
                                    const __VLS_42 = __VLS_41({ ...{}, url: ((child.url)), internal: ((child.internal)), title: ((child.title)), class: ("dropdown-item"), target: ((child.attributes.target)), id: ((child.attributes.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                                    ({}({ ...{}, url: ((child.url)), internal: ((child.internal)), title: ((child.title)), class: ("dropdown-item"), target: ((child.attributes.target)), id: ((child.attributes.id)), }));
                                    (child.attributes.class);
                                    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                                }
                                // @ts-ignore
                                [item,];
                            }
                            (__VLS_38.slots).default;
                            const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                        }
                    }
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
            }
            (__VLS_3.slots).default;
            const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        }
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
        item: {
            type: Object,
            required: true
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
});
