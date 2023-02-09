import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/page/Home.vue';
import AboutPage from '@/views/page/About.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    },
  ],
});

export default router;