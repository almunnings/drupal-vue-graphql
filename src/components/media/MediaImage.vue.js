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
// Key variations by name.
const variations = computed(() => {
    const map = new Map();
    props.media.image.variations?.forEach((v) => {
        map.set(v.name, v);
    });
    return map;
});
// Add src sets for variations.
const srcsets = computed(() => {
    const srcsets = [];
    srcsets.push({
        name: 'wide',
        media: 'all and (min-width: 992px)',
        width: variations.value.get('WIDE')?.width || 0,
        height: variations.value.get('WIDE')?.height || 0,
        srcset: [
            `${variations.value.get('WIDE')?.url} 1x`,
            `${variations.value.get('WIDE2X')?.url} 2x`
        ].join(', ')
    });
    srcsets.push({
        name: 'large',
        media: 'all and (min-width: 420px)',
        width: variations.value.get('LARGE')?.width || 0,
        height: variations.value.get('LARGE')?.height || 0,
        srcset: [
            `${variations.value.get('LARGE')?.url} 1x`,
            `${variations.value.get('LARGE2X')?.url} 2x`
        ].join(', ')
    });
    srcsets.push({
        name: 'medium',
        media: 'all and (max-width: 420px)',
        width: variations.value.get('MEDIUM')?.width || 0,
        height: variations.value.get('MEDIUM')?.height || 0,
        srcset: [
            `${variations.value.get('MEDIUM')?.url} 1x`,
            `${variations.value.get('MEDIUM2X')?.url} 2x`
        ].join(', ')
    });
    return srcsets;
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
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.picture;
    __VLS_intrinsicElements.picture;
    __VLS_intrinsicElements.source;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.figcaption;
    {
        const __VLS_0 = __VLS_intrinsicElements["figure"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("figure"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("figure"), }));
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
            const __VLS_10 = __VLS_intrinsicElements["a"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, href: ((__VLS_ctx.media.image.url)), title: ("Open image in new tab"), target: ("_blank"), rel: ("noopener"), class: ("figure-img d-inline-block m-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, href: ((__VLS_ctx.media.image.url)), title: ("Open image in new tab"), target: ("_blank"), rel: ("noopener"), class: ("figure-img d-inline-block m-0"), }));
            {
                const __VLS_15 = __VLS_intrinsicElements["picture"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, class: ("figure-img d-inline-block"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, class: ("figure-img d-inline-block"), }));
                for (const [src] of __VLS_getVForSourceType((__VLS_ctx.srcsets))) {
                    {
                        const __VLS_20 = __VLS_intrinsicElements["source"];
                        const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                        const __VLS_22 = __VLS_21({ ...{}, key: ((src.name)), media: ((src.media)), srcset: ((src.srcset)), width: ((src.width)), height: ((src.height)), type: ((__VLS_ctx.media.image.mime || undefined)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        ({}({ ...{}, key: ((src.name)), media: ((src.media)), srcset: ((src.srcset)), width: ((src.width)), height: ((src.height)), type: ((__VLS_ctx.media.image.mime || undefined)), }));
                        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    }
                    // @ts-ignore
                    [media, srcsets, media,];
                }
                {
                    const __VLS_25 = __VLS_intrinsicElements["img"];
                    const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                    const __VLS_27 = __VLS_26({ ...{}, src: ((__VLS_ctx.variations.get('THUMBNAIL')?.url)), alt: ((__VLS_ctx.media.image.alt || undefined)), type: ((__VLS_ctx.media.image.mime || undefined)), title: ((__VLS_ctx.media.image.title || __VLS_ctx.media.image.alt || undefined)), width: ((__VLS_ctx.media.image.width)), height: ((__VLS_ctx.media.image.height)), class: ("img-fluid rounded"), loading: ("lazy"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, src: ((__VLS_ctx.variations.get('THUMBNAIL')?.url)), alt: ((__VLS_ctx.media.image.alt || undefined)), type: ((__VLS_ctx.media.image.mime || undefined)), title: ((__VLS_ctx.media.image.title || __VLS_ctx.media.image.alt || undefined)), width: ((__VLS_ctx.media.image.width)), height: ((__VLS_ctx.media.image.height)), class: ("img-fluid rounded"), loading: ("lazy"), }));
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                (__VLS_18.slots).default;
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        if (__VLS_ctx.description) {
            {
                const __VLS_30 = __VLS_intrinsicElements["figcaption"];
                const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                const __VLS_32 = __VLS_31({ ...{}, class: ("figure-caption"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                ({}({ ...{}, class: ("figure-caption"), }));
                __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.description));
                __VLS_directiveFunction(__VLS_ctx.vWysiwygLinks)(undefined);
                const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            }
            // @ts-ignore
            [variations, media, media, media, media, media, media, description, description,];
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["figure"];
        __VLS_styleScopedClasses["h5"];
        __VLS_styleScopedClasses["figure-img"];
        __VLS_styleScopedClasses["d-inline-block"];
        __VLS_styleScopedClasses["m-0"];
        __VLS_styleScopedClasses["figure-img"];
        __VLS_styleScopedClasses["d-inline-block"];
        __VLS_styleScopedClasses["img-fluid"];
        __VLS_styleScopedClasses["rounded"];
        __VLS_styleScopedClasses["figure-caption"];
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            vWysiwygLinks: vWysiwygLinks,
            variations: variations,
            srcsets: srcsets,
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
