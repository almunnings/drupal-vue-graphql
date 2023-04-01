import { defineAsyncComponent } from 'vue'

import { MediaInterface } from '@/services/drupal'

export const getMediaComponent = (media: MediaInterface) => {
  switch (media.__typename) {
    // case 'MediaAudio':
    //   return defineAsyncComponent(
    //     () => import('@/components/media/MediaAudio.vue')
    //   )
    // case 'MediaDocument':
    //   return defineAsyncComponent(
    //     () => import('@/components/media/MediaDocument.vue')
    //   )
    case 'MediaImage':
      return defineAsyncComponent(
        () => import('@/components/media/MediaImage.vue')
      )
    // case 'MediaRemoteVideo':
    //   return defineAsyncComponent(
    //     () => import('@/components/media/MediaRemoteVideo.vue')
    //   )
    // case 'MediaVideo':
    //   return defineAsyncComponent(
    //     () => import('@/components/media/MediaVideo.vue')
    //   )
    default:
      throw Error('Media type unknown.')
  }
}
