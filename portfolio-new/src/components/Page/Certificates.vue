
<template>
  <!-- Grid -->
  <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-1 md:gap-4 px-4 lg:gap-4 mb-6">
    <!-- <div class="grid grid-cols- sm:grid-cols-2 lg:grid-cols-4 
            gap-4 sm:gap-3 lg:gap-8"> -->
    <CertificateCard
      v-for="(cert, index) in certificates"
      :key="index"
      v-bind="cert"
      @open="selectedImage = $event"
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
import CertificateCard from "../composobles/CertificateCard.vue"
import ImageModal from "../Page/ImageModal.vue"

// Images
import cert1 from "../../assets/certificates/data-science-methodology.jpg"
import cert2 from "../../assets/certificates/python-for-datascience.png"
import cert3 from "../../assets/certificates/introduction-to-data-analytics.jpg"
import cert4 from "../../assets/certificates/excel-basics-for-data-analytics.jpg"
import cert5 from "../../assets/certificates/data-visualization.jpg"
import cert6 from "../../assets/certificates/python-ds-ai.jpg"

// Certificates data
const certificates = [
  {
    title: "Data Science Methodology",
    issuer: "IBM",
    image: cert1,
    preview: "https://www.coursera.org/account/accomplishments/certificate/XQGDAGSLST7T",
    link: "https://www.coursera.org/account/accomplishments/certificate/XQGDAGSLST7T",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    image: cert2,
    preview: "https://www.coursera.org/account/accomplishments/certificate/SDNKX6YXCMTR",
    link: "https://www.coursera.org/account/accomplishments/certificate/SDNKX6YXCMTR",
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "IBM",
    image: cert3,
    preview: "https://www.coursera.org/account/accomplishments/certificate/5GR6N5WL2G4K",
    link: "https://www.coursera.org/account/accomplishments/certificate/5GR6N5WL2G4K",
  },
  {
    title: "Excel Essentials for Data Analysis",
    issuer: "IBM",
    image: cert4,
    preview: "https://www.coursera.org/account/accomplishments/certificate/6EB6DQ5484LZ",
    link: "https://www.coursera.org/account/accomplishments/certificate/6EB6DQ5484LZ",
  },
  {
    title: "Data Visualization with Excel",
    issuer: "IBM",
    image: cert5,
    preview: "https://www.coursera.org/account/accomplishments/certificate/R9ZFCCDYUQ4X",
    link: "https://www.coursera.org/account/accomplishments/certificate/R9ZFCCDYUQ4X",
  },
  {
    title: "Python Project for Data Science",
    issuer: "IBM",
    image: cert6,
    preview: "https://www.coursera.org/account/accomplishments/certificate/SDNKX6YXCMTR",
    link: "https://www.coursera.org/account/accomplishments/certificate/SDNKX6YXCMTR",
  },
];

const selectedImage = ref(null)
</script>