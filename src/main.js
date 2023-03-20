import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from '@/plugins/apollo'
import router from '@/router'
import App from './App'

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(createPinia())
  .use(router)
  .mount('#app')
