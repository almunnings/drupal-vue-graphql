# Headless Drupal Vue 3, GenQL GraphQL, Pinia, Vite, Typescript

> This project is intended to be a starting point, a hint, an idea. Not a solution.

Live demo: http://gqlc.almunnings.com/

## GraphQL Compose

This example uses the Drupal [GraphQL Compose](https://www.drupal.org/project/graphql_compose) module to generate the GraphQL schema and types.

## Development

This example is setup to work with [almunnings/drupal-boilerplate](https://github.com/almunnings/drupal-boilerplate).

```bash
cp .env.example .env
npm ci
npm run genql
npm run dev
```

## Environment

See `.env.example` for environment variables. Create your own `.env` file locally or ensure env exists at deployment endpoint.
