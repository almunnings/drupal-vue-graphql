import { getBlockContentComponent } from '@/components/blocks';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    block: {
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
    if (__VLS_ctx.block.entity) {
        {
            const __VLS_0 = (__VLS_ctx.getBlockContentComponent(__VLS_ctx.block.entity));
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, blockContent: ((__VLS_ctx.block.entity)), title: ((__VLS_ctx.block.title)), }));
            const __VLS_2 = __VLS_1({ ...{}, blockContent: ((__VLS_ctx.block.entity)), title: ((__VLS_ctx.block.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ ...{}, blockContent: ((__VLS_ctx.block.entity)), title: ((__VLS_ctx.block.title)), }));
            const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        }
        // @ts-ignore
        [block, getBlockContentComponent, block, block, block,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            getBlockContentComponent: getBlockContentComponent,
        };
    },
    props: {
        block: {
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
        block: {
            type: Object,
            required: true
        }
    },
});
