<template>
  <div class="min-h-screen flex flex-col">
    <!-- header -->
     <PageHeader /> 

    <!-- main  -->
    <main class="grow pt-10 md:pt-12">
      <Home />
    </main>

    <!-- footer -->
    <PageFooter />
  </div>
</template>

<script setup>
import PageHeader from './components/Page/PageHeader.vue';
import PageFooter from './components/Page/PageFooter.vue';
import Home from './components/Page/Home.vue';
</script>
