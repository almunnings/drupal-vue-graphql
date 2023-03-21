import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App'
import router from '@/router'

import '@/assets/scss/bootstrap.scss'
import '@/assets/scss/app.scss'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
