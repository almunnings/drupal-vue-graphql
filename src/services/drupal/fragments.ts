import type {
  MenuGenqlSelection,
  MenuItemGenqlSelection,
  RouteGenqlSelection,
  TypeNodeInterfaceGenqlSelection
} from './generated'

/**
 * Custom fragments to use in queries.
 */

export const RouteFragment: RouteGenqlSelection = {
  __typename: true,
  url: true,
  internal: true
}

export const TypeNodeFragment: TypeNodeInterfaceGenqlSelection = {
  __typename: true,
  id: true,
  title: true
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
