import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import fontawesomePlugin from './plugins/fontawesome'

import '@/assets/scss/bootstrap.scss'
import '@/assets/scss/app.scss'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(fontawesomePlugin)

app.mount('#app')
