import router from '@/router'

/**
 * Usage:
 * v-wysiwyg-links
 *
 * Replace canonical entity links with a router link.
 */
const vWysiwygLinks = {
  mounted(el: HTMLElement) {
    el.addEventListener('click', (event: MouseEvent) => {
      let target = event.target as HTMLElement

      // Find the first link in the event path within this container.
      while (target && target.tagName !== 'A' && target !== el) {
        target = target.parentNode as HTMLElement
      }

      const href = target?.getAttribute('href')

      if (href?.startsWith('/') && target?.matches("[data-entity-substitution='canonical']")) {
        event.preventDefault()
        router.push({ path: href })
      }
    })
  }
}

export default vWysiwygLinks
