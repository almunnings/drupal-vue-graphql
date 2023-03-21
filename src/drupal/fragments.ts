import type {
  RouteGenqlSelection,
  TypeNodeInterfaceGenqlSelection
} from './gen'

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
