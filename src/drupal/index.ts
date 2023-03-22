import { createClient } from './gen'

export * from './gen/schema'
export * from './fragments'

const host = import.meta.env.VITE_DRUPAL_BASE_URL
const schema = import.meta.env.VITE_GRAPHQL_PATH

export const drupalClient = createClient({
  url: `${host}/${schema}`,
  headers: {}
})
