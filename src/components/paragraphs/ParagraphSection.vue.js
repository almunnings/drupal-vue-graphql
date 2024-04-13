import { computed } from 'vue';
import { getParagraphComponent } from '@/components/paragraphs';
import { getLayoutComponent } from '@/components/layouts';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    paragraph: {
        type: Object,
        required: true
    },
    children: {
        type: Array,
        required: false
    }
});
const layout = computed(() => getLayoutComponent(props.paragraph));
const regions = computed(() => props.paragraph.composition.layout?.regions);
const getRegionChildren = (region) => (props.children || []).filter((child) => {
    return child.composition.position?.region === region;
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
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    if (__VLS_ctx.children) {
        {
            const __VLS_0 = (__VLS_ctx.layout);
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, class: ("section border border-info rounded p-4"), }));
            const __VLS_2 = __VLS_1({ ...{}, class: ("section border border-info rounded p-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ ...{}, class: ("section border border-info rounded p-4"), }));
            for (const [region] of __VLS_getVForSourceType((__VLS_ctx.regions))) {
                {
                    const __VLS_5 = __VLS_intrinsicElements["template"];
                    const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
                    const __VLS_7 = __VLS_6({ ...{}, key: ((region)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                    ({}({ ...{}, key: ((region)), }));
                    {
                        (__VLS_3.slots)[region];
                        for (const [child] of __VLS_getVForSourceType((__VLS_ctx.getRegionChildren(region)))) {
                            {
                                const __VLS_9 = (__VLS_ctx.getParagraphComponent(child));
                                const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ ...{}, paragraph: ((child)), key: ((child.id)), }));
                                const __VLS_11 = __VLS_10({ ...{}, paragraph: ((child)), key: ((child.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
                                ({}({ ...{}, paragraph: ((child)), key: ((child.id)), }));
                                const __VLS_12 = __VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11);
                            }
                            // @ts-ignore
                            [children, layout, regions, getRegionChildren, getParagraphComponent,];
                        }
                    }
                }
            }
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
            getParagraphComponent: getParagraphComponent,
            layout: layout,
            regions: regions,
            getRegionChildren: getRegionChildren,
        };
    },
    props: {
        paragraph: {
            type: Object,
            required: true
        },
        children: {
            type: Array,
            required: false
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
        },
        children: {
            type: Array,
            required: false
        }
    },
});
