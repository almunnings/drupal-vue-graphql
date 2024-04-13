import { defineAsyncComponent } from 'vue'
import { type BlockInterface, type BlockContentInterface } from '@/services/drupal'

export const getBlockComponent = (block: BlockInterface) => {
  switch (block.__typename) {
    case 'BlockContent':
      return defineAsyncComponent(() => import('@/components/blocks/BlockContent.vue'))
    case 'BlockPlugin':
      return defineAsyncComponent(() => import('@/components/blocks/BlockPlugin.vue'))
    default:
      return defineAsyncComponent(() => import('@/components/blocks/BlockUnknown.vue'))
  }
}

export const getBlockContentComponent = (block: BlockContentInterface) => {
  switch (block.__typename) {
    case 'BlockContentBasicBlock':
      return defineAsyncComponent(() => import('@/components/blocks/BlockContentBasicBlock.vue'))
    default:
      return defineAsyncComponent(() => import('@/components/blocks/BlockContentUnknown.vue'))
  }
}
