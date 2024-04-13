import { Collapse } from 'bootstrap';
import { ref, onMounted } from 'vue';
import { getParagraphComponent } from '.';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    paragraph: {
        type: Object,
        required: true
    }
});
const collapse = ref(null);
onMounted(() => {
    if (collapse.value) {
        new Collapse(collapse.value, { toggle: false });
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("accordion"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("accordion"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: ("accordion-item"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: ("accordion-item"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["h2"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: ("accordion-header"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: ("accordion-header"), }));
                {
                    const __VLS_15 = __VLS_intrinsicElements["button"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, class: ("accordion-button collapsed"), type: ("button"), "aria-expanded": ("false"), "aria-controls": ((__VLS_ctx.paragraph.id)), "data-bs-toggle": ("collapse"), "data-bs-target": ((`#accordion-${__VLS_ctx.paragraph.id}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, class: ("accordion-button collapsed"), type: ("button"), "aria-expanded": ("false"), "aria-controls": ((__VLS_ctx.paragraph.id)), "data-bs-toggle": ("collapse"), "data-bs-target": ((`#accordion-${__VLS_ctx.paragraph.id}`)), }));
                    (props.paragraph.accordionTitle);
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_20 = __VLS_intrinsicElements["div"];
                const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                const __VLS_22 = __VLS_21({ ...{}, id: ((`accordion-${__VLS_ctx.paragraph.id}`)), ref: ("collapse"), class: ("accordion-collapse collapse"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({ ...{}, id: ((`accordion-${__VLS_ctx.paragraph.id}`)), ref: ("collapse"), class: ("accordion-collapse collapse"), }));
                // @ts-ignore
                (__VLS_ctx.collapse);
                {
                    const __VLS_25 = __VLS_intrinsicElements["div"];
                    const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                    const __VLS_27 = __VLS_26({ ...{}, class: ("accordion-body d-grid gap-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, class: ("accordion-body d-grid gap-3"), }));
                    for (const [child] of __VLS_getVForSourceType((__VLS_ctx.paragraph.items))) {
                        {
                            const __VLS_30 = (__VLS_ctx.getParagraphComponent(child));
                            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, paragraph: ((child)), key: ((child.id)), }));
                            const __VLS_32 = __VLS_31({ ...{}, paragraph: ((child)), key: ((child.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({}({ ...{}, paragraph: ((child)), key: ((child.id)), }));
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                        }
                        // @ts-ignore
                        [paragraph, paragraph, paragraph, collapse, paragraph, getParagraphComponent,];
                    }
                    (__VLS_28.slots).default;
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                (__VLS_23.slots).default;
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
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
            getParagraphComponent: getParagraphComponent,
            collapse: collapse,
        };
    },
    props: {
        paragraph: {
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
        paragraph: {
            type: Object,
            required: true
        }
    },
});
