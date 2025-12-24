
<template>
  <!-- Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-1 md:gap-4 px-4 sm:px-8 lg:gap-4 mb-6">
    <!-- <div class="grid grid-cols- sm:grid-cols-2 lg:grid-cols-4 
            gap-4 sm:gap-3 lg:gap-8"> -->
    <techstackCard
      v-for="(lang, index) in languages"
      :key="index"
      v-bind="lang"
      @open="selectedImage = $event"
      data-aos="fade-up"
      :data-aos-duration="600"
      :data-aos-delay="400 + (index * 100)"
    />
  </div>

  <!-- Modal -->
  <ImageModal
    v-if="selectedImage"
    :image="selectedImage"
    @close="selectedImage = null"
  />
</template>
<script setup>
import { ref } from "vue"
import techstackCard from "../composobles/techstackCard.vue"
import ImageModal from "../Page/ImageModal.vue"

// Images
import lang1 from "../../assets/languages/pylo.png"
import lang2 from "../../assets/languages/phplo.png"
import lang3 from "../../assets/languages/laravelo.png"
import lang4 from "../../assets/languages/codeigniterlogo.png"
import lang5 from "../../assets/languages/js.png"
import lang6 from "../../assets/languages/vuejs.png"
import lang7 from "../../assets/languages/htmlogo.png"
import lang8 from "../../assets/languages/css.png"
import lang9 from "../../assets/languages/tcss.png"
import lang10 from "../../assets/languages/mysql.png"
import lang11 from "../../assets/languages/firebase.png"
import lang12 from "../../assets/languages/github.png"
import lang13 from "../../assets/languages/django.png"
import lang14 from "../../assets/languages/ibm.png"
import lang15 from "../../assets/languages/restapi.jpg"


const languages = [
  {
    title: "Python",
    image: lang1,
  },
  {
    title: "PHP",
    image: lang2,
  },
  {
    title: "Laravel",
    image: lang3,
  },
  {
    title: "CodeIgniter",
    image: lang4,
  },
  {
    title: "JavaScript",
    image: lang5,
  },
  {
    title: "Vue.js",
    image: lang6,
  },
  {
    title: "HTML5",
    image: lang7,
  },
  {
    title: "CSS3",
    image: lang8,
  },
  {
    title: "Tailwind CSS",
    image: lang9,
  },
  {
    title: "MySQL",
    image: lang10,
  },

  {
    title: "Firebase",
    image: lang11,
  },
  {
    title: "GitHub",
    image: lang12,
  },
  {
    title: "Django",
    image: lang13,
  },
  {
    title: "ibm watson machine learning",
    image: lang14,
  },
  {
    title: "REST API",
    image: lang15,
  },
];

const selectedImage = ref(null)
</script>