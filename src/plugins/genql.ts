import { createClient } from '@/genql'

const genqlClient = createClient({
  url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
  headers: {},
})

export default genqlClient