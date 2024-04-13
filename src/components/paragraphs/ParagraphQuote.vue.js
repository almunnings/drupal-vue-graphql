import vWysiwygLinks from '@/directives/v-wysiwyg-links';
import RouteLink from '@/components/navigation/RouteLink.vue';
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.figure;
    __VLS_intrinsicElements.figure;
    __VLS_intrinsicElements.blockquote;
    __VLS_intrinsicElements.blockquote;
    __VLS_intrinsicElements.figcaption;
    __VLS_intrinsicElements.figcaption;
    __VLS_intrinsicElements.cite;
    __VLS_intrinsicElements.cite;
    __VLS_components.RouteLink;
    __VLS_components.RouteLink;
    // @ts-ignore
    [RouteLink,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("quote"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("quote"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["figure"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: ("border border-secondary rounded p-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: ("border border-secondary rounded p-3"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["blockquote"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: ("blockquote"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: ("blockquote"), }));
                {
                    const __VLS_15 = __VLS_intrinsicElements["div"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, class: ("text-processed"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, class: ("text-processed"), }));
                    __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.paragraph.quote.processed));
                    __VLS_directiveFunction(__VLS_ctx.vWysiwygLinks)(undefined);
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            if (__VLS_ctx.paragraph.citation || __VLS_ctx.paragraph.link) {
                {
                    const __VLS_20 = __VLS_intrinsicElements["figcaption"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, class: ("blockquote-footer mb-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, class: ("blockquote-footer mb-0"), }));
                    if (__VLS_ctx.paragraph.citation) {
                        {
                            const __VLS_25 = __VLS_intrinsicElements["cite"];
                            const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                            const __VLS_27 = __VLS_26({ ...{}, class: ("me-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                            ({}({ ...{}, class: ("me-1"), }));
                            (__VLS_ctx.paragraph.citation);
                            (__VLS_28.slots).default;
                            const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                        }
                        // @ts-ignore
                        [paragraph, paragraph, paragraph, paragraph, paragraph,];
                    }
                    if (__VLS_ctx.paragraph.link && __VLS_ctx.paragraph.link.url) {
                        {
                            const __VLS_30 = {}.RouteLink;
                            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{}, url: ((__VLS_ctx.paragraph.link.url)), internal: ((__VLS_ctx.paragraph.link.internal)), title: ((__VLS_ctx.paragraph.link.title)), }));
                            ({}.RouteLink);
                            const __VLS_32 = __VLS_31({ ...{}, url: ((__VLS_ctx.paragraph.link.url)), internal: ((__VLS_ctx.paragraph.link.internal)), title: ((__VLS_ctx.paragraph.link.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({}({ ...{}, url: ((__VLS_ctx.paragraph.link.url)), internal: ((__VLS_ctx.paragraph.link.internal)), title: ((__VLS_ctx.paragraph.link.title)), }));
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                        }
                        // @ts-ignore
                        [paragraph, paragraph, paragraph, paragraph, paragraph,];
                    }
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
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
            vWysiwygLinks: vWysiwygLinks,
            RouteLink: RouteLink,
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
