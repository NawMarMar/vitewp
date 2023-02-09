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
    <div v-if="pageContent">
      <h1>{{ pageContent.title.rendered }}</h1>
      <div v-html="pageContent.content.rendered"></div>
      <pre>{{ pageContent }}</pre>
    </div>
</template>
<style lang="scss" scoped>
h1 {
  font-size: 50px;
  margin-bottom: 50px;
}
</style>