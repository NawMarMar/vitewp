<script setup>
import { ref, watchEffect } from "vue";
import { usePostStore } from "../../stores/post";

const postStore = usePostStore();
postStore.getPosts("book")

const posts = ref("");

watchEffect(() => {
  if (postStore._posts !== null) {
    posts.value = postStore._posts;
  }
}, [postStore._posts]);
</script>

<template>
    <div>
    <h1>Book Posts</h1>
      <!-- <h1>{{ posts.title.rendered }}</h1>
      <div v-html="posts.content.rendered"></div> -->
      <pre>{{ posts }}</pre>
    </div>
</template>
<style lang="scss" scoped>
h1 {
  font-size: 50px;
  margin-bottom: 50px;
}
</style>