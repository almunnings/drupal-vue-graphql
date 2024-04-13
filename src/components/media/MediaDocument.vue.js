import { computed } from 'vue';
import { getFileIcon, getFileExtension } from '@/components/media';
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
const size = computed(() => prettyBytes(props.media.document.size));
const extension = computed(() => getFileExtension(props.media.document));
const icon = computed(() => getFileIcon(props.media.document));
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.FontAwesomeIcon;
    __VLS_components.fontAwesomeIcon;
    // @ts-ignore
    [FontAwesomeIcon,];
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.h3;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    {
        const __VLS_0 = __VLS_intrinsicElements["figure"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ("d-block border p-3 rounded"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ("d-block border p-3 rounded"), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: ("d-flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: ("d-flex"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["div"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, class: ("align-self-start m-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, class: ("align-self-start m-2"), }));
                {
                    const __VLS_15 = {}.FontAwesomeIcon;
                    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, icon: ((__VLS_ctx.icon)), class: ("me-2 text-light"), size: ("xl"), }));
                    ({}.FontAwesomeIcon);
                    const __VLS_17 = __VLS_16({ ...{}, icon: ((__VLS_ctx.icon)), class: ("me-2 text-light"), size: ("xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, icon: ((__VLS_ctx.icon)), class: ("me-2 text-light"), size: ("xl"), }));
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            {
                const __VLS_20 = __VLS_intrinsicElements["div"];
                const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                const __VLS_22 = __VLS_21({ ...{}, class: ("align-self-center flex-grow-1 d-md-flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                ({}({ ...{}, class: ("align-self-center flex-grow-1 d-md-flex"), }));
                {
                    const __VLS_25 = __VLS_intrinsicElements["div"];
                    const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                    const __VLS_27 = __VLS_26({ ...{}, class: ("flex-grow-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, class: ("flex-grow-1"), }));
                    if (__VLS_ctx.title) {
                        {
                            const __VLS_30 = __VLS_intrinsicElements["h3"];
                            const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                            const __VLS_32 = __VLS_31({ ...{}, class: ("mb-0 h5"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({}({ ...{}, class: ("mb-0 h5"), }));
                            (__VLS_ctx.title);
                            (__VLS_33.slots).default;
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                        }
                        // @ts-ignore
                        [icon, title, title,];
                    }
                    {
                        const __VLS_35 = __VLS_intrinsicElements["a"];
                        const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                        const __VLS_37 = __VLS_36({ ...{}, href: ((__VLS_ctx.media.document.url)), type: ((__VLS_ctx.media.document.mime || undefined)), download: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                        ({}({ ...{}, href: ((__VLS_ctx.media.document.url)), type: ((__VLS_ctx.media.document.mime || undefined)), download: (true), }));
                        (__VLS_ctx.media.document.description || __VLS_ctx.media.document.name);
                        (__VLS_38.slots).default;
                        const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                    }
                    if (__VLS_ctx.description) {
                        {
                            const __VLS_40 = __VLS_intrinsicElements["div"];
                            const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
                            const __VLS_42 = __VLS_41({ ...{}, class: ("text-muted small"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                            ({}({ ...{}, class: ("text-muted small"), }));
                            __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.description));
                            __VLS_directiveFunction(__VLS_ctx.vWysiwygLinks)(undefined);
                            const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                        }
                        // @ts-ignore
                        [media, media, media, media, description, description,];
                    }
                    (__VLS_28.slots).default;
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                {
                    const __VLS_45 = __VLS_intrinsicElements["div"];
                    const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
                    const __VLS_47 = __VLS_46({ ...{}, class: ("text-muted small ms-md-2 text-nowrap"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                    ({}({ ...{}, class: ("text-muted small ms-md-2 text-nowrap"), }));
                    (__VLS_ctx.extension?.toUpperCase());
                    (__VLS_ctx.size);
                    (__VLS_48.slots).default;
                    const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                }
                (__VLS_23.slots).default;
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
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
    // @ts-ignore
    [extension, size,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            vWysiwygLinks: vWysiwygLinks,
            size: size,
            extension: extension,
            icon: icon,
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
