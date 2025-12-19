<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
    <div
      v-for="(cert, index) in certificates"
      :key="index"
      class="rounded-2xl border border-purple-400 p-4 bg-gradient-to-b from-purple-50 to-white
             hover:shadow-lg transition"
    >
      <!-- Image -->
      <div class="rounded-xl border border-yellow-400 p-2 mb-4">
        <img
          :src="cert.image"
          :alt="cert.title"
          class="rounded-lg w-full h-auto"
        />
      </div>

      <!-- Title -->
      <h3 class="font-semibold text-gray-800 text-sm leading-snug">
        {{ cert.title }}
      </h3>

      <!-- Issuer -->
      <p class="text-sm text-purple-600 mt-1">
        by {{ cert.issuer }}
      </p>

      <!-- Footer -->
      <div class="flex justify-between mt-4 text-sm text-purple-600">
        <a
          :href="cert.preview"
          target="_blank"
          class="hover:underline flex items-center gap-1"
        >
          👁 Preview
        </a>
        <a
          :href="cert.link"
          target="_blank"
          class="hover:underline flex items-center gap-1"
        >
          🔗 Link
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
// Import images from src/assets

import cert1 from "../../assets/certificates/data-science-methodology.jpg"
import cert2 from "../../assets/certificates/python-for-datascience.png"
import cert3 from "../../assets/certificates/introduction-to-data-analytics.jpg"
import cert4 from "../../assets/certificates/excel-basics-for-data-analytics.jpg"
import cert5 from "../../assets/certificates/data-visualization.jpg"
import cert6 from "../../assets/certificates/python-ds-ai.jpg"

// Certificates data
const certificates = [
  {
    title: "data science methodology",
    issuer: "IBM",
    image: cert1,
    preview: "https://www.coursera.org/account/accomplishments/certificate/XQGDAGSLST7T",
    link: "https://www.coursera.org/account/accomplishments/certificate/XQGDAGSLST7T",
  },
  {
    title: "python for data science, ai & development",
    issuer: "IBM",
    image: cert2,
    preview: "https://www.coursera.org/account/accomplishments/certificate/SDNKX6YXCMTR",
    link: "https://www.coursera.org/account/accomplishments/certificate/SDNKX6YXCMTR",
  },
  {
    title: "introduction to data analytics",
    issuer: "IBM",
    image: cert3,
    preview: "https://www.coursera.org/account/accomplishments/certificate/5GR6N5WL2G4K",
    link: "https://www.coursera.org/account/accomplishments/certificate/5GR6N5WL2G4K",
  },
  {
    title: "excel essentials for data analysis",
    issuer: "IBM",
    image: cert4,
    preview: "https://www.coursera.org/account/accomplishments/certificate/6EB6DQ5484LZ",
    link: "https://www.coursera.org/account/accomplishments/certificate/6EB6DQ5484LZ",
  },
  {
    title: "data visualization with excel",
    issuer: "IBM",
    image: cert5,
    preview: "https://www.coursera.org/account/accomplishments/certificate/R9ZFCCDYUQ4X",
    link: "https://www.coursera.org/account/accomplishments/certificate/R9ZFCCDYUQ4X",
  },
  {
    title: "python project for data science",
    issuer: "IBM",
    image: cert6,
    preview: "https://www.coursera.org/account/accomplishments/certificate/SDNKX6YXCMTR",
    link: "https://www.coursera.org/account/accomplishments/certificate/SDNKX6YXCMTR",
  },
];
</script>