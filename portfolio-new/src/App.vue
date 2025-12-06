<template>
  <div class="min-h-screen flex flex-col">
    <!-- header -->
     <PageHeader /> 

    <!-- main  -->
    <main class="grow pt-10 md:pt-12">
      <Home />
      <AboutUs />
    </main>

    <!-- footer -->
    <PageFooter />
  </div>
</template>

<script setup>
import PageHeader from './components/Page/PageHeader.vue';
import PageFooter from './components/Page/PageFooter.vue';
import Home from './components/Page/Home.vue';
import AboutUs from './components/Page/AboutUs.vue';
import { watch } from "vue";
import { darkMode } from "./data/darkMode.js";

// Watch darkMode globally
watch(
  darkMode,
  (newVal) => {
    const bgColor = newVal ? "#1F2937" : "#A7C1A8";
    document.body.style.backgroundColor = bgColor;
  },
  { immediate: true }
);
</script>
