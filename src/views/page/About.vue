<script setup>
import { ref, watchEffect } from "vue";
import { usePageStore } from "../../stores/page";

const pageStore = usePageStore();
pageStore.getContentPage("about");

const pageContent = ref("");

watchEffect(() => {
  if (pageStore._page !== null) {
    pageContent.value = pageStore._page;
  }
}, [pageStore._page]);
</script>

<template>
  <template v-if="pageContent">
    <div class="page-content">
      <h1>{{ pageContent.title.rendered }}</h1>
      <div v-html="pageContent.content.rendered"></div>
      <div><img :src="pageContent.featured_image.src" alt="" /></div>
    </div>
    <!-- <pre>{{ pageContent }}</pre> -->
  </template>
  <template v-else>Loading...</template>
</template>
<style lang="scss" scoped>
h1 {
  font-size: 50px;
  margin-bottom: 50px;
}
img {
  max-width: 300px;
}
</style>