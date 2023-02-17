<script setup>
import { ref, watchEffect } from "vue";
import { usePostStore } from "../../stores/post";

const postStore = usePostStore();
postStore.getPosts("blog");

const posts = ref("");

watchEffect(() => {
  if (postStore._posts !== null) {
    posts.value = postStore._posts;
  }
}, [postStore._posts]);
</script>

<template>
  <template v-if="posts">
    <div v-for="post in posts" class="page-content">
    <article v-bind:id="'post-' + post.id">
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
      <div class="custom-fields">
      <figure>
        <img :src="post.custom_fields.image_url" alt="">
      </figure>
      </div>
      <RouterLink :to="{name:'blogSingle',params: {id:post.id}}">Read More</RouterLink>
    </article>
    </div>
  </template>
  <template v-else>Loading...</template>
  <!-- <pre>{{posts}}</pre> -->
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
  width: 130px;
}
</style>