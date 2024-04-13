import { createClient } from './generated';
export * from './generated/schema';
export * from './fragments';
const host = import.meta.env.VITE_DRUPAL_BASE_URL;
const schema = import.meta.env.VITE_GRAPHQL_PATH;
export const drupalClient = createClient({
    url: `${host}/${schema}`,
    headers: {}
});
