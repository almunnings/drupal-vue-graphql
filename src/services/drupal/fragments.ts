import type {
  MenuGenqlSelection,
  MenuItemGenqlSelection,
  RouteGenqlSelection,
  NodePageGenqlSelection,
  NodeInterfaceGenqlSelection,
  ParagraphInterfaceGenqlSelection,
  LayoutParagraphsInterfaceGenqlSelection,
  LinkGenqlSelection
} from './generated'

/**
 * Custom fragments to use in queries.
 */

export const RouteFragment: RouteGenqlSelection = {
  __typename: true,
  url: true,
  internal: true
}

export const LinkFragment: LinkGenqlSelection = {
  url: true,
  title: true,
  route: {
    on_Route: RouteFragment
  }
}

export const ParagraphFragment: ParagraphInterfaceGenqlSelection = {
  __typename: true,
  id: true,
  on_ParagraphText: {
    text: {
      processed: true
    }
  },
  on_ParagraphQuote: {
    quote: {
      processed: true
    },
    citation: true,
    link: LinkFragment
  },
  on_ParagraphMedia: {
    title: true,
    description: {
      processed: true
    },
    media: {
      __typename: true,
      on_MediaInterface: {
        name: true
      },
      on_MediaAudio: {
        audio: {
          url: true,
          mime: true,
          size: true
        }
      },
      on_MediaDocument: {
        document: {
          url: true,
          mime: true,
          size: true
        }
      },
      on_MediaImage: {
        __typename: true,
        image: {
          url: true,
          width: true,
          height: true,
          alt: true,
          title: true,
          mime: true,

          variations: {
            __args: {
              styles: [
                'WIDE',
                'WIDE2X',
                'LARGE',
                'LARGE2X',
                'MEDIUM',
                'MEDIUM2X',
                'THUMBNAIL'
              ]
            },
            url: true,
            width: true,
            height: true,
            name: true
          }
        }
      },
      on_MediaRemoteVideo: {
        url: true
      },
      on_MediaVideo: {
        video: {
          url: true,
          mime: true
        }
      }
    }
  }
}

export const LayoutParagraphFragment: LayoutParagraphsInterfaceGenqlSelection =
  {
    __typename: true,
    composition: {
      layout: {
        id: true,
        regions: true
      },
      position: {
        parentId: true,
        region: true
      }
    }
  }

export const NodePageFragment: NodePageGenqlSelection = {
  __typename: true,
  content: {
    on_ParagraphInterface: ParagraphFragment,
    on_LayoutParagraphsInterface: LayoutParagraphFragment
  }
}

export const NodeFragment: NodeInterfaceGenqlSelection = {
  __typename: true,
  id: true,
  title: true,
  on_NodePage: NodePageFragment
}

export const MenuItemFragment: MenuItemGenqlSelection = {
  __typename: true,
  title: true,
  description: true,
  expanded: true,
  route: {
    on_Route: RouteFragment
  }
}

export const MenuFragment: MenuGenqlSelection = {
  __typename: true,
  name: true,
  items: MenuItemFragment
}
