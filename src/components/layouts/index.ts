import { defineAsyncComponent } from 'vue'

import type { ParagraphInterface } from '@/services/drupal'

export const getLayoutComponent = (paragraph: ParagraphInterface) => {
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
