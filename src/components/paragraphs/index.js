import { defineAsyncComponent } from 'vue';
export const getParagraphComponent = (paragraph) => {
    switch (paragraph.__typename) {
        case 'ParagraphBlock':
            return defineAsyncComponent(() => import('@/components/paragraphs/ParagraphBlock.vue'));
        case 'ParagraphAccordion':
            return defineAsyncComponent(() => import('@/components/paragraphs/ParagraphAccordion.vue'));
        case 'ParagraphTable':
            return defineAsyncComponent(() => import('@/components/paragraphs/ParagraphTable.vue'));
        case 'ParagraphText':
            return defineAsyncComponent(() => import('@/components/paragraphs/ParagraphText.vue'));
        case 'ParagraphQuote':
            return defineAsyncComponent(() => import('@/components/paragraphs/ParagraphQuote.vue'));
        case 'ParagraphMedia':
            return defineAsyncComponent(() => import('@/components/paragraphs/ParagraphMedia.vue'));
        default:
            return defineAsyncComponent(() => import('@/components/paragraphs/ParagraphUnknown.vue'));
    }
};
