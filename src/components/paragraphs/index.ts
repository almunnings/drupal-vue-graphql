import { defineAsyncComponent } from 'vue'

import type { TypeParagraphInterface } from '@/services/drupal'

export const getLayoutComponent = (paragraph: TypeParagraphInterface) => {
  switch (paragraph.composition.layout?.id) {
    case 'layout_twocol':
      return defineAsyncComponent(
        () => import('@/components/layouts/LayoutTwoColumn.vue')
      )
    case 'layout_onecol':
    default:
      return defineAsyncComponent(
        () => import('@/components/layouts/LayoutOneColumn.vue')
      )
  }
}

export const getParagraphComponent = (paragraph: TypeParagraphInterface) => {
  switch (paragraph.__typename) {
    case 'ParagraphText':
      return defineAsyncComponent(
        () => import('@/components/paragraphs/ParagraphText.vue')
      )
    case 'ParagraphQuote':
      return defineAsyncComponent(
        () => import('@/components/paragraphs/ParagraphQuote.vue')
      )
    default:
      return defineAsyncComponent(
        () => import('@/components/paragraphs/ParagraphUnknown.vue')
      )
  }
}
