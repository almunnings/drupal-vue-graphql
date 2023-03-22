import type {
  MenuGenqlSelection,
  MenuItemGenqlSelection,
  RouteGenqlSelection,
  TypeNodeInterfaceGenqlSelection
} from './gen'

/**
 * Custom fragments to use in queries.
 */

const RouteFragment: RouteGenqlSelection = {
  __typename: true,
  url: true,
  internal: true
}

const TypeNodeFragment: TypeNodeInterfaceGenqlSelection = {
  __typename: true,
  id: true,
  title: true
}

const MenuItemFragment: MenuItemGenqlSelection = {
  __typename: true,
  title: true,
  description: true,
  expanded: true,
  route: {
    on_Route: RouteFragment
  }
}

const MenuFragment: MenuGenqlSelection = {
  __typename: true,
  name: true,
  items: MenuItemFragment
}

export { RouteFragment, TypeNodeFragment, MenuFragment, MenuItemFragment }
