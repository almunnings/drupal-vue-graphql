import { computed } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { useRouteStore } from '@/stores/route';
import { isNodePage, isRouteInternal, isNodeInterface, isParagraphSection, isLayoutParagraphsInterface } from '@/services/drupal';
import ParagraphSection from '@/components/paragraphs/ParagraphSection.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Get the current route from the store.
const $route = useRoute();
const routeStore = useRouteStore();
const route = computed(() => routeStore.routes.get($route.path));
// Get the entity off the current route if it's internal.
const entity = computed(() => route.value && isRouteInternal(route.value) ? route.value.entity : undefined);
// Get the content field from the node content if its a node page.
const content = computed(() => entity.value && isNodePage(entity.value) ? entity.value.content : undefined);
// Get the section types from the content.
const sections = computed(() => content.value && content.value.filter(isParagraphSection));
// Get the children of a section.
const getParagraphChildren = (section) => content.value &&
    content.value
        .filter(isLayoutParagraphsInterface)
        .filter((item) => item.composition.position?.parentId === section.id);
// View isn't changing, but the data source is.
// So we need to fetch the data again.
onBeforeRouteUpdate((to) => {
    useRouteStore().fetchRoute(to.path);
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
    __VLS_components.ParagraphSection;
    __VLS_components.ParagraphSection;
    // @ts-ignore
    [ParagraphSection,];
    if (__VLS_ctx.entity && __VLS_ctx.isNodeInterface(__VLS_ctx.entity)) {
        {
            const __VLS_0 = __VLS_intrinsicElements["div"];
            const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
            const __VLS_2 = __VLS_1({ ...{}, class: ("d-grid gap-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ ...{}, class: ("d-grid gap-4"), }));
            for (const [section] of __VLS_getVForSourceType((__VLS_ctx.sections))) {
                {
                    const __VLS_5 = {}.ParagraphSection;
                    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, key: ((section.id)), paragraph: ((section)), children: ((__VLS_ctx.getParagraphChildren(section))), }));
                    ({}.ParagraphSection);
                    const __VLS_7 = __VLS_6({ ...{}, key: ((section.id)), paragraph: ((section)), children: ((__VLS_ctx.getParagraphChildren(section))), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                    ({}({ ...{}, key: ((section.id)), paragraph: ((section)), children: ((__VLS_ctx.getParagraphChildren(section))), }));
                    const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
                }
                // @ts-ignore
                [entity, isNodeInterface, entity, sections, getParagraphChildren,];
            }
            (__VLS_3.slots).default;
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
            isNodeInterface: isNodeInterface,
            ParagraphSection: ParagraphSection,
            entity: entity,
            sections: sections,
            getParagraphChildren: getParagraphChildren,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
