import { computed } from 'vue';
import { useInfoStore } from '@/stores/info';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    url: {
        type: String,
        required: true
    },
    internal: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        required: false
    }
});
// strip http, https, www from url
const title_url = computed(() => props.url
    // Remove protocol://
    .replace(/(^\w+:|^)\/\//, '')
    // Remove www.
    .replace(/^www\./i, '')
    // Remove trailing slash.
    .replace(/\/$/, ''));
// Convert homepage links into /
const url = computed(() => (props.url === useInfoStore().home ? '/' : props.url));
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
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    if (__VLS_ctx.internal) {
        {
            const __VLS_0 = {}.RouterLink;
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, to: ((__VLS_ctx.url)), activeClass: ("active"), }));
            ({}.RouterLink);
            ({}.RouterLink);
            const __VLS_2 = __VLS_1({ ...{}, to: ((__VLS_ctx.url)), activeClass: ("active"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ ...{}, to: ((__VLS_ctx.url)), activeClass: ("active"), }));
            (__VLS_ctx.title || __VLS_ctx.title_url || 'Untitled');
            (__VLS_3.slots).default;
            const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        }
        // @ts-ignore
        [internal, url, title, title_url,];
    }
    else {
        {
            const __VLS_5 = __VLS_intrinsicElements["a"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, href: ((__VLS_ctx.url)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, href: ((__VLS_ctx.url)), }));
            (__VLS_ctx.title || __VLS_ctx.title_url || 'Untitled');
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        // @ts-ignore
        [url, title, title_url,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            title_url: title_url,
            url: url,
        };
    },
    props: {
        url: {
            type: String,
            required: true
        },
        internal: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: false
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        url: {
            type: String,
            required: true
        },
        internal: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: false
        }
    },
});
