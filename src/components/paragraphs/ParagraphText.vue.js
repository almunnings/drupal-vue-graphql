import vWysiwygLinks from '@/directives/v-wysiwyg-links';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    paragraph: {
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
    __VLS_intrinsicElements.div;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("text-processed"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("text-processed"), }));
        __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.paragraph.text.processed));
        __VLS_directiveFunction(__VLS_ctx.vWysiwygLinks)(undefined);
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [paragraph,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            vWysiwygLinks: vWysiwygLinks,
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
