<script setup>

import { ref, watchEffect } from "vue";
import { usePostStore } from "../../stores/post";
import { useRoute } from 'vue-router';

const route = useRoute()

const postStore = usePostStore();
postStore.getPost("blog",route.params.id);


const post = ref("");

watchEffect(() => {
    post.value = postStore._post;
}, [postStore._posts]);

</script>

<template>
<!-- <pre>{{post}}</pre> -->
  <template v-if="post">
    <div class="page-content">
      <h1>{{ post.title.rendered }}</h1>
      <time>{{ new Date(post.date_gmt).toLocaleDateString("ja-JP") }}</time>
      <div v-html="post.content.rendered" class="content-txt"></div>
     <figure>
        <img
          v-if="post._links['wp:featuredmedia']"
          :src="post.featured_image"
          alt="feature image"
        />
      </figure>
      <p class="author-name">{{post.custom_fields.name}}</p>
      <p class="description">{{post.custom_fields.description}}</p>
    </div>
    
  </template>
  <template v-else>Loading...</template>
</template>

<style lang="scss" scoped>
.page-content {
  margin: 50px;
}
h1 {
  font-size: 50px;
  margin-bottom: 50px;
}
time {
  display: block;
  font-size: 12px;
  margin-bottom: 10px;
}
.content-txt,p {
  font-size: 16px;
}
a {
  display: inline-block;
  padding: 20px 0;
  color: red;
  font-size: 18px;
  text-decoration: underline;
}
figure {
  margin-top: 30px;
  width: 30%;
}
</style>