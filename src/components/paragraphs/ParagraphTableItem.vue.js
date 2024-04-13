import { computed } from 'vue';
import vWysiwygLinks from '@/directives/v-wysiwyg-links';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    row: {
        type: Object,
        required: true
    },
    format: {
        type: String
    }
});
const columns = computed(() => {
    return props.row?.data || [];
});
const element = computed(() => {
    return props.row?.weight === 0 ? 'th' : 'td';
});
const isHtml = computed(() => {
    switch (props.format) {
        case 'basic_html':
        case 'full_html':
        case 'restricted_html':
            return true;
        default:
            return false;
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
    __VLS_intrinsicElements.tr;
    __VLS_intrinsicElements.tr;
    __VLS_intrinsicElements.div;
    {
        const __VLS_0 = __VLS_intrinsicElements["tr"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        for (const [column, delta] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
            {
                const __VLS_5 = (__VLS_ctx.element);
                const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, key: ((delta)), }));
                const __VLS_7 = __VLS_6({ ...{}, key: ((delta)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{}, key: ((delta)), }));
                if (__VLS_ctx.isHtml) {
                    {
                        const __VLS_10 = __VLS_intrinsicElements["div"];
                        const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                        const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                        ({}({ ...{}, }));
                        __VLS_directiveFunction(__VLS_ctx.vHtml)((column));
                        __VLS_directiveFunction(__VLS_ctx.vWysiwygLinks)(undefined);
                        const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
                    }
                    // @ts-ignore
                    [columns, element, isHtml,];
                }
                else {
                    (column);
                }
                (__VLS_8.slots).default;
                const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            }
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
            vWysiwygLinks: vWysiwygLinks,
            columns: columns,
            element: element,
            isHtml: isHtml,
        };
    },
    props: {
        row: {
            type: Object,
            required: true
        },
        format: {
            type: String
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        row: {
            type: Object,
            required: true
        },
        format: {
            type: String
        }
    },
});
