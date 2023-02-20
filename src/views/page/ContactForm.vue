<script setup>
import { ref, watchEffect } from "vue";
import { usePageStore } from "../../stores/page";

const pageStore = usePageStore();
pageStore.getContentPage("contact");

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
    </div>
    <!-- <pre>{{ pageContent }}</pre> -->
  </template>
  <template v-else>Loading...</template>
</template>


<style lang="scss">
.page-content {
  margin: 50px;
  h1 {
    font-size: 50px;
    margin-bottom: 50px;
  }
}

.content-txt,
p {
  font-size: 16px;
}
input {
  width: 300px;
  height: 40px;
  border: 1px solid #000;
  padding: 10px !important;
  box-sizing: border-box;
  margin: 10px 0 !important;
}
input[type="file"] {
  border: 0px !important;
}
select {
  margin: 10px 0 !important;
  appearance: auto !important;
  width: 100px;
  border: 1px solid #000;
  padding: 5px !important;
  box-sizing: border-box;
}
textarea {
  margin: 10px 0 !important;
  width: 300px;
  border: 1px solid #000;
  padding: 10px !important;
  box-sizing: border-box;
}
input[type="submit"] {
  margin-top: 10px;
  width: 100px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #000;
  text-align: center;
}
</style>