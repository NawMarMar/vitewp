import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'

import App from './App.vue'
import router from './router'

import './assets/scss/reset.scss';
import './assets/scss/common.scss';

const app = createApp(App)
const metaManager = createMetaManager();

app.use(router)
app.use(createPinia())
app.use(metaManager)

app.mount('#app')
