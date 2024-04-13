import { computed } from 'vue';
import vWysiwygLinks from '@/directives/v-wysiwyg-links';
import prettyBytes from 'pretty-bytes';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    media: {
        type: Object,
        required: true
    },
    title: {
        type: String
    },
    description: {
        type: String
    }
});
const size = computed(() => prettyBytes(props.media.audio.size));
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
    __VLS_intrinsicElements.figure;
    __VLS_intrinsicElements.figure;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.audio;
    __VLS_intrinsicElements.audio;
    __VLS_intrinsicElements.source;
    __VLS_intrinsicElements.figcaption;
    {
        const __VLS_0 = __VLS_intrinsicElements["figure"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("figure d-block border p-3 rounded"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("figure d-block border p-3 rounded"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: ("d-md-flex justify-content-between align-items-center mb-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: ("d-md-flex justify-content-between align-items-center mb-2"), }));
            if (__VLS_ctx.title) {
                {
                    const __VLS_10 = __VLS_intrinsicElements["h3"];
                    const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                    const __VLS_12 = __VLS_11({ ...{}, class: ("mb-0 h5"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                    ({}({ ...{}, class: ("mb-0 h5"), }));
                    (__VLS_ctx.title);
                    (__VLS_13.slots).default;
                    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
                }
                // @ts-ignore
                [title, title,];
            }
            {
                const __VLS_15 = __VLS_intrinsicElements["div"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, class: ("ms-md-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, class: ("ms-md-2"), }));
                {
                    const __VLS_20 = __VLS_intrinsicElements["a"];
                    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                    const __VLS_22 = __VLS_21({ ...{}, href: ((__VLS_ctx.media.audio.url)), download: (true), class: ("small text-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                    ({}({ ...{}, href: ((__VLS_ctx.media.audio.url)), download: (true), class: ("small text-nowrap"), }));
                    (__VLS_ctx.size);
                    (__VLS_23.slots).default;
                    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_25 = __VLS_intrinsicElements["audio"];
            const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
            const __VLS_27 = __VLS_26({ ...{}, class: ("d-block lh-1 w-100"), loading: ("lazy"), preload: ("none"), controls: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
            ({}({ ...{}, class: ("d-block lh-1 w-100"), loading: ("lazy"), preload: ("none"), controls: (true), }));
            {
                const __VLS_30 = __VLS_intrinsicElements["source"];
                const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                const __VLS_32 = __VLS_31({ ...{}, src: ((__VLS_ctx.media.audio.url)), type: ((__VLS_ctx.media.audio.mime || undefined)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                ({}({ ...{}, src: ((__VLS_ctx.media.audio.url)), type: ((__VLS_ctx.media.audio.mime || undefined)), }));
                const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            }
            (__VLS_28.slots).default;
            const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
        }
        if (__VLS_ctx.description) {
            {
                const __VLS_35 = __VLS_intrinsicElements["figcaption"];
                const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                const __VLS_37 = __VLS_36({ ...{}, class: ("figure-caption mt-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                ({}({ ...{}, class: ("figure-caption mt-2"), }));
                __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.description));
                __VLS_directiveFunction(__VLS_ctx.vWysiwygLinks)(undefined);
                const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
            }
            // @ts-ignore
            [media, size, media, media, description, description,];
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
            size: size,
        };
    },
    props: {
        media: {
            type: Object,
            required: true
        },
        title: {
            type: String
        },
        description: {
            type: String
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        media: {
            type: Object,
            required: true
        },
        title: {
            type: String
        },
        description: {
            type: String
        }
    },
});
