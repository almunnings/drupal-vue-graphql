import { computed } from 'vue';
import vWysiwygLinks from '@/directives/v-wysiwyg-links';
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
const iframeUrl = computed(() => {
    const youtube = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)&?/i;
    if (youtube.test(props.media.url)) {
        const match = props.media.url.match(youtube);
        if (match && match[1]) {
            return `https://www.youtube.com/embed/${match[1]}?rel=0`;
        }
    }
    const vimeo = /(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:|\/\?)/i;
    if (vimeo.test(props.media.url)) {
        const match = props.media.url.match(vimeo);
        if (match && match[3]) {
            return `https://player.vimeo.com/video/${match[3]}`;
        }
    }
    return undefined;
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
    __VLS_intrinsicElements.figure;
    __VLS_intrinsicElements.figure;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.iframe;
    __VLS_intrinsicElements.figcaption;
    {
        const __VLS_0 = __VLS_intrinsicElements["figure"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("figure d-block border border-dark p-3 rounded bg-black bg-opacity-25 col-lg-9 mx-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("figure d-block border border-dark p-3 rounded bg-black bg-opacity-25 col-lg-9 mx-auto"), }));
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
            const __VLS_12 = __VLS_11({ ...{}, class: ("ratio ratio-16x9"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: ("ratio ratio-16x9"), }));
            {
                const __VLS_15 = __VLS_intrinsicElements["iframe"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, src: ((__VLS_ctx.iframeUrl)), title: ((__VLS_ctx.media.name)), allowfullscreen: (true), class: ("w-100 rounded"), loading: ("lazy"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, src: ((__VLS_ctx.iframeUrl)), title: ((__VLS_ctx.media.name)), allowfullscreen: (true), class: ("w-100 rounded"), loading: ("lazy"), }));
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        if (__VLS_ctx.description) {
            {
                const __VLS_20 = __VLS_intrinsicElements["figcaption"];
                const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                const __VLS_22 = __VLS_21({ ...{}, class: ("figure-caption mt-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({ ...{}, class: ("figure-caption mt-2"), }));
                __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.description));
                __VLS_directiveFunction(__VLS_ctx.vWysiwygLinks)(undefined);
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
            }
            // @ts-ignore
            [iframeUrl, media, description, description,];
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
            iframeUrl: iframeUrl,
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
