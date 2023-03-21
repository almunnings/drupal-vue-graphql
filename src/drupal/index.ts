import { createClient } from './gen'

export * from './gen/schema'
export * from './fragments'

export const drupalClient = createClient({
  url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
  headers: {}
})
