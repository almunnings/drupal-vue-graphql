import type {
  MenuItemGenqlSelection,
  RouteGenqlSelection,
  NodePageGenqlSelection,
  NodeInterfaceGenqlSelection,
  ParagraphInterfaceGenqlSelection,
  LayoutParagraphsInterfaceGenqlSelection,
  LinkGenqlSelection,
  ParagraphTextGenqlSelection,
  ParagraphMediaGenqlSelection,
  ParagraphAccordionGenqlSelection,
  ParagraphBlockGenqlSelection
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
  internal: true
}

export const ParagraphTextFragment: ParagraphTextGenqlSelection = {
  text: {
    processed: true
  }
}

export const ParagraphQuoteFragment: ParagraphQuoteGenqlSelection = {
  quote: {
    processed: true
  },
  citation: true,
  link: LinkFragment
}

export const ParagraphMediaFragment: ParagraphMediaGenqlSelection = {
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
        name: true,
        mime: true,
        size: true,
        description: true
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

export const ParagraphTableFragment: ParagraphTableGenqlSelection = {
  title: true,
  table: {
    caption: true,
    format: true,
    rows: {
      data: true,
      weight: true
    }
  }
}

export const ParagraphAccordionFragment: ParagraphAccordionGenqlSelection = {
  accordionTitle: true,
  items: {
    __typename: true,
    on_ParagraphText: ParagraphTextFragment,
    on_ParagraphQuote: ParagraphQuoteFragment,
    on_ParagraphMedia: ParagraphMediaFragment,
    on_ParagraphTable: ParagraphTableFragment
  }
}

export const ParagraphBlockFragment: ParagraphBlockGenqlSelection = {
  block: {
    __typename: true,
    on_Block: {
      id: true,
      title: true
    },
    on_BlockPlugin: {
      render: true
    },
    on_BlockContent: {
      entity: {
        __typename: true,
        on_BlockContentInterface: {
          id: true,
          title: true
        },
        on_BlockContentBasicBlock: {
          body: {
            processed: true
          }
        }
      }
    }
  }
}

export const ParagraphFragment: ParagraphInterfaceGenqlSelection = {
  __typename: true,
  id: true,
  on_ParagraphBlock: ParagraphBlockFragment,
  on_ParagraphText: ParagraphTextFragment,
  on_ParagraphQuote: ParagraphQuoteFragment,
  on_ParagraphMedia: ParagraphMediaFragment,
  on_ParagraphTable: ParagraphTableFragment,
  on_ParagraphAccordion: ParagraphAccordionFragment
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
  url: true,
  internal: true,
  attributes: {
    id: true,
    target: true,
    class: true
  }
}
