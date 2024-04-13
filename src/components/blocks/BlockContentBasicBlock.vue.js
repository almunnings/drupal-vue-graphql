import vWysiwygLinks from '@/directives/v-wysiwyg-links';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    blockContent: {
        type: Object,
        required: true
    },
    title: {
        type: String
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
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("block"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("block"), }));
        if (__VLS_ctx.title) {
            {
                const __VLS_5 = __VLS_intrinsicElements["h3"];
                const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
                const __VLS_7 = __VLS_6({ ...{}, class: ("h5"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{}, class: ("h5"), }));
                (__VLS_ctx.title);
                (__VLS_8.slots).default;
                const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            }
            // @ts-ignore
            [title, title,];
        }
        {
            const __VLS_10 = __VLS_intrinsicElements["div"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, class: ("text-processed"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: ("text-processed"), }));
            __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.blockContent.body?.processed));
            __VLS_directiveFunction(__VLS_ctx.vWysiwygLinks)(undefined);
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [blockContent,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            vWysiwygLinks: vWysiwygLinks,
        };
    },
    props: {
        blockContent: {
            type: Object,
            required: true
        },
        title: {
            type: String
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        blockContent: {
            type: Object,
            required: true
        },
        title: {
            type: String
        }
    },
});
