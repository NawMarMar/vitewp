<script setup>
import { RouterView } from "vue-router";

// layout
import Header from "@/views/layout/Header.vue";
import Footer from "@/views/layout/Footer.vue";
</script>

<template>
  <div id="content">
    <Header></Header>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition name="fade">
          <KeepAlive>
            <Suspense>
              <!-- main content -->
              <component :is="Component"></component>

              <!-- loading state -->
              <template #fallback> Loading... </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>
    <Footer></Footer>
  </div>
</template>

<style scoped>
</style>
