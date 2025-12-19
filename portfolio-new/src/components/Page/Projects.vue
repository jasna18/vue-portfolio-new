
<template>
     <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 
     sm:gap-1 md:gap-4 px-6 lg:gap-4 mb-6 hover:scale-[1.02] transition-transform
">
 <CertificateCard 
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :image="project.image"
        :link="project.link"
         mode="project"

        class="w-full object-cover rounded-lg overflow-hidden"

      />
</div>
</template>
<script setup>
  import { ref } from "vue"
  import CertificateCard from "../composobles/CertificateCard.vue"
  import { projects } from '../../data/project.js'
  import ImageModal from "../Page/ImageModal.vue"
  const selectedImage = ref(null)

</script>