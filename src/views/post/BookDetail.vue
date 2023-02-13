<script setup>
import { ref, watchEffect } from "vue";
import { usePostStore } from "../../stores/post";

const postStore = usePostStore();
postStore.getPosts("book")

const post = ref("");

watchEffect(() => {
  if (postStore._posts !== null) {
    post.value = postStore._posts;
  }
}, [postStore._posts]);

// VueMeta({
//   title: posts.title.rendered,
// });

</script>

<template>
  

  <template v-if="post">
    <h1>{{ post.title.rendered }}</h1>
    <div>{{ new Date(posts.date_gmt).toLocaleDateString() }}</div>
    <div v-html="post.content.rendered"></div>
  </template>
  <template v-else>Loading...</template>
  <!-- <pre>{{posts}}</pre> -->
</template>

<style lang="scss" scoped>
h1 {
  font-size: 50px;
  margin-bottom: 50px;
}
a {
  color: red;
  font-size: 18px;
  text-decoration: underline;
}
figure {
  width: 500px;
}
</style>