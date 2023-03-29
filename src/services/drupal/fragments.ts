import type {
  MenuGenqlSelection,
  MenuItemGenqlSelection,
  RouteGenqlSelection,
  NodePageGenqlSelection,
  TypeNodeInterfaceGenqlSelection,
  TypeParagraphInterfaceGenqlSelection,
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

export const TypeParagraphFragment: TypeParagraphInterfaceGenqlSelection = {
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
    on_TypeParagraphInterface: TypeParagraphFragment,
    on_LayoutParagraphsInterface: LayoutParagraphFragment
  }
}

export const TypeNodeFragment: TypeNodeInterfaceGenqlSelection = {
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
