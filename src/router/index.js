import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/page/Home.vue';
import AboutPage from '@/views/page/About.vue';
import BookPost from '@/views/post/Book.vue';

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
        component: AboutPage,
    },
    {
        path: '/book',
        name: 'book',
        component: BookPost,
    },
  ],
});

export default router;