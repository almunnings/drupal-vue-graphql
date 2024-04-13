import { defineAsyncComponent } from 'vue'
import type { File, MediaInterface } from '@/services/drupal'

export const getMediaComponent = (media: MediaInterface) => {
  switch (media.__typename) {
    case 'MediaAudio':
      return defineAsyncComponent(() => import('@/components/media/MediaAudio.vue'))
    case 'MediaDocument':
      return defineAsyncComponent(() => import('@/components/media/MediaDocument.vue'))
    case 'MediaImage':
      return defineAsyncComponent(() => import('@/components/media/MediaImage.vue'))
    case 'MediaRemoteVideo':
      return defineAsyncComponent(() => import('@/components/media/MediaRemoteVideo.vue'))
    case 'MediaVideo':
      return defineAsyncComponent(() => import('@/components/media/MediaVideo.vue'))
    default:
      return defineAsyncComponent(() => import('@/components/media/MediaUnknown.vue'))
  }
}

// Get a file extension.
export const getFileExtension = (file: File) => {
  const regex = /\.([a-zA-Z0-9]+)(?:[?#]|$)/
  const match = file.url.match(regex)

  return match ? match[1].toLowerCase() : undefined
}

// Get a file icon for font-awesome.
export const getFileIcon = (file: File) => {
  const fileExtension = getFileExtension(file)

  switch (fileExtension) {
    case 'csv':
    case 'tsv':
    case 'xls':
    case 'xlsx':
      return 'file-excel'

    case 'doc':
    case 'docx':
    case 'odt':
    case 'rtf':
      return 'file-word'

    case 'md':
    case 'txt':
    case 'markdown':
      return 'file-text'

    case 'pdf':
      return 'file-pdf'

    case 'zip':
    case 'rar':
    case '7z':
    case 'gz':
    case 'tar':
      return 'file-archive'

    case 'ppt':
    case 'pptx':
    case 'keynote':
      return 'file-powerpoint'

    default:
      return 'file'
  }
}
