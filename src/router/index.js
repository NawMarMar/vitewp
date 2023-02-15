import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/page/Home.vue";
import AboutPage from "@/views/page/About.vue";
import BlogPost from "@/views/archive/Blog.vue";
import BlogSingle from "@/views/single/BlogDetail.vue";
import NewsPost from "@/views/archive/News.vue";
import NewsSingle from "@/views/single/NewsDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogPost,
    },
    {
      path: "/blog/:id",
      name: "blogSingle",
      component: BlogSingle,
    },
    {
      path: "/news",
      name: "news",
      component: NewsPost,
    },
    {
      path: "/news/:id",
      name: "newsSingle",
      component: NewsSingle,
    },
  ],
});

export default router;
