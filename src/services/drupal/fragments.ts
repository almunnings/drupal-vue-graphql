import type {
  MenuGenqlSelection,
  MenuItemGenqlSelection,
  RouteGenqlSelection,
  NodePageGenqlSelection,
  TypeNodeInterfaceGenqlSelection,
  TypeParagraphInterfaceGenqlSelection
} from './generated'

/**
 * Custom fragments to use in queries.
 */

export const RouteFragment: RouteGenqlSelection = {
  __typename: true,
  url: true,
  internal: true
}

export const TypeParagraphFragment: TypeParagraphInterfaceGenqlSelection = {
  __typename: true,
  id: true,
  on_ParagraphText: {
    __typename: true,
    text: {
      processed: true
    }
  }
}

export const LayoutParagraphFragment: LayoutParagraphsInterfaceGenqlSelection =
  {
    __typename: true,
    composition: {
      layout: {
        __scalar: true
      },
      position: {
        __scalar: true
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
