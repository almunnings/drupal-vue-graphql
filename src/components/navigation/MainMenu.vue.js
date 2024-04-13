import { Collapse } from 'bootstrap';
import { computed, ref, onMounted } from 'vue';
import { useMenuStore } from '@/stores/menu';
import MainMenuItem from '@/components/navigation/MainMenuItem.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    name: {
        type: String,
        required: true
    }
});
const collapse = ref(null);
onMounted(() => {
    if (collapse.value) {
        new Collapse(collapse.value);
    }
});
const menuStore = useMenuStore();
menuStore.fetchMenu(props.name);
const menu = computed(() => menuStore.menus.get(props.name));
const loading = computed(() => menuStore.loading.get(props.name));
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
    __VLS_intrinsicElements.nav;
    __VLS_intrinsicElements.nav;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.ul;
    __VLS_components.MainMenuItem;
    __VLS_components.MainMenuItem;
    // @ts-ignore
    [MainMenuItem,];
    if (__VLS_ctx.loading) {
        {
            const __VLS_0 = __VLS_intrinsicElements["nav"];
            const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
            const __VLS_2 = __VLS_1({ ...{}, class: ("placeholder-glow"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ ...{}, class: ("placeholder-glow"), }));
            {
                const __VLS_5 = __VLS_intrinsicElements["span"];
                const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
                const __VLS_7 = __VLS_6({ ...{}, class: ("placeholder col-12 rounded"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{}, class: ("placeholder col-12 rounded"), style: ({}), }));
                const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            }
            (__VLS_3.slots).default;
            const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        }
        // @ts-ignore
        [loading,];
    }
    else {
        {
            const __VLS_10 = __VLS_intrinsicElements["nav"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, class: ("navbar navbar-expand-sm bg-body-tertiary rounded"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: ("navbar navbar-expand-sm bg-body-tertiary rounded"), }));
            {
                const __VLS_15 = __VLS_intrinsicElements["div"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, class: ("container-fluid"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, class: ("container-fluid"), }));
                {
                    const __VLS_20 = __VLS_intrinsicElements["button"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, class: ("navbar-toggler"), type: ("button"), "data-bs-toggle": ("collapse"), "data-bs-target": ("#mainNav"), "aria-controls": ("mainNav"), "aria-expanded": ("false"), "aria-label": ("Toggle navigation"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, class: ("navbar-toggler"), type: ("button"), "data-bs-toggle": ("collapse"), "data-bs-target": ("#mainNav"), "aria-controls": ("mainNav"), "aria-expanded": ("false"), "aria-label": ("Toggle navigation"), }));
                    {
                        const __VLS_25 = __VLS_intrinsicElements["span"];
                        const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                        const __VLS_27 = __VLS_26({ ...{}, class: ("navbar-toggler-icon"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                        ({}({ ...{}, class: ("navbar-toggler-icon"), }));
                        const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                    }
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                {
                    const __VLS_30 = __VLS_intrinsicElements["div"];
                    const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                    const __VLS_32 = __VLS_31({ ...{}, class: ("collapse navbar-collapse"), id: ("mainNav"), ref: ("collapse"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                    ({}({ ...{}, class: ("collapse navbar-collapse"), id: ("mainNav"), ref: ("collapse"), }));
                    // @ts-ignore
                    (__VLS_ctx.collapse);
                    if (__VLS_ctx.menu) {
                        {
                            const __VLS_35 = __VLS_intrinsicElements["ul"];
                            const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                            const __VLS_37 = __VLS_36({ ...{}, class: ("navbar-nav me-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                            ({}({ ...{}, class: ("navbar-nav me-auto"), }));
                            for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menu?.items))) {
                                {
                                    const __VLS_40 = {}.MainMenuItem;
                                    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, item: ((item)), key: ((item.id)), }));
                                    ({}.MainMenuItem);
                                    const __VLS_42 = __VLS_41({ ...{}, item: ((item)), key: ((item.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                                    ({}({ ...{}, item: ((item)), key: ((item.id)), }));
                                    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                                }
                                // @ts-ignore
                                [collapse, menu, menu,];
                            }
                            (__VLS_38.slots).default;
                            const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                        }
                    }
                    (__VLS_33.slots).default;
                    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
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
            MainMenuItem: MainMenuItem,
            collapse: collapse,
            menu: menu,
            loading: loading,
        };
    },
    props: {
        name: {
            type: String,
            required: true
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        name: {
            type: String,
            required: true
        }
    },
});
