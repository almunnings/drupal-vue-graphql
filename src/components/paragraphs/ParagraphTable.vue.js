import { computed } from 'vue';
import ParagraphTableItem from './ParagraphTableItem.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    paragraph: {
        type: Object,
        required: true
    }
});
const caption = computed(() => props.paragraph.table.caption);
const rows = computed(() => Array.from(props.paragraph.table.rows || []));
const thead = computed(() => rows.value.slice(0, 1)[0] || undefined);
const tbody = computed(() => rows.value.slice(1, rows.value.length));
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
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.table;
    __VLS_intrinsicElements.table;
    __VLS_intrinsicElements.caption;
    __VLS_intrinsicElements.caption;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.thead;
    __VLS_intrinsicElements.thead;
    __VLS_components.ParagraphTableItem;
    __VLS_components.ParagraphTableItem;
    __VLS_components.ParagraphTableItem;
    __VLS_components.ParagraphTableItem;
    // @ts-ignore
    [ParagraphTableItem, ParagraphTableItem,];
    __VLS_intrinsicElements.tbody;
    __VLS_intrinsicElements.tbody;
    if (__VLS_ctx.paragraph.title) {
        {
            const __VLS_0 = __VLS_intrinsicElements["h3"];
            const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
            const __VLS_2 = __VLS_1({ ...{}, class: ("mb-0 h5"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ ...{}, class: ("mb-0 h5"), }));
            (__VLS_ctx.paragraph.title);
            (__VLS_3.slots).default;
            const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        }
        // @ts-ignore
        [paragraph, paragraph,];
    }
    {
        const __VLS_5 = __VLS_intrinsicElements["div"];
        const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
        const __VLS_7 = __VLS_6({ ...{}, class: ("table-responsive"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ ...{}, class: ("table-responsive"), }));
        {
            const __VLS_10 = __VLS_intrinsicElements["table"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, class: ("table table-striped table-hover"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: ("table table-striped table-hover"), }));
            if (__VLS_ctx.caption) {
                {
                    const __VLS_15 = __VLS_intrinsicElements["caption"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, }));
                    {
                        const __VLS_20 = __VLS_intrinsicElements["span"];
                        const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                        const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        ({}({ ...{}, }));
                        (__VLS_ctx.caption);
                        (__VLS_23.slots).default;
                        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    }
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                // @ts-ignore
                [caption, caption,];
            }
            if (__VLS_ctx.thead) {
                {
                    const __VLS_25 = __VLS_intrinsicElements["thead"];
                    const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                    const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, }));
                    {
                        const __VLS_30 = {}.ParagraphTableItem;
                        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, row: ((__VLS_ctx.thead)), format: ((__VLS_ctx.paragraph.table.format)), }));
                        ({}.ParagraphTableItem);
                        const __VLS_32 = __VLS_31({ ...{}, row: ((__VLS_ctx.thead)), format: ((__VLS_ctx.paragraph.table.format)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                        ({}({ ...{}, row: ((__VLS_ctx.thead)), format: ((__VLS_ctx.paragraph.table.format)), }));
                        const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                    }
                    (__VLS_28.slots).default;
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                // @ts-ignore
                [thead, thead, paragraph,];
            }
            {
                const __VLS_35 = __VLS_intrinsicElements["tbody"];
                const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                ({}({ ...{}, }));
                for (const [row, delta] of __VLS_getVForSourceType((__VLS_ctx.tbody))) {
                    {
                        const __VLS_40 = {}.ParagraphTableItem;
                        const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, key: ((delta)), row: ((row)), format: ((__VLS_ctx.paragraph.table.format)), }));
                        ({}.ParagraphTableItem);
                        const __VLS_42 = __VLS_41({ ...{}, key: ((delta)), row: ((row)), format: ((__VLS_ctx.paragraph.table.format)), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                        ({}({ ...{}, key: ((delta)), row: ((row)), format: ((__VLS_ctx.paragraph.table.format)), }));
                        const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                    }
                    // @ts-ignore
                    [tbody, paragraph,];
                }
                (__VLS_38.slots).default;
                const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        (__VLS_8.slots).default;
        const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            ParagraphTableItem: ParagraphTableItem,
            caption: caption,
            thead: thead,
            tbody: tbody,
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
