import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import VueMeta from 'vue-meta'

import App from './App.vue'
import router from './router'

import './assets/scss/reset.scss';
import './assets/scss/common.scss';

const app = createApp(App)

app.use(router)
app.use(createPinia())
// app.use(VueMeta)

app.mount('#app')
