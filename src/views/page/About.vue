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
      <div v-html="pageContent.content.rendered" class="content-txt"></div>
      <figure><img :src="pageContent.featured_image.src" alt="" /></figure>
      <p>{{pageContent.custom_fields.custom_fields_test}}</p>
    </div>
    <!-- <pre>{{ pageContent }}</pre> -->
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
.content-txt,p {
  font-size: 16px;
}

figure {
  margin-top: 30px;
  max-width: 500px;
}
</style>