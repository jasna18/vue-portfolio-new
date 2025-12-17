<!-- included in Certificates.vue -->
<template>
  <!-- <div
    class="rounded-2xl border border-orange-400 bg-gradient-to-b
           from-orange-50 to-white transition hover:shadow-xl ml-5 mr-5
           p-4 sm:p-3 
          w-[40%] sm:w-[80%] lg:w-[88%]  mb-2
         min-h-[360px] sm:min-h-[280px] lg:min-h-[280px]
         flex flex-col  justify-between gap-1" 
  > -->
  <div
  class="rounded-xl border border-orange-400
         bg-gradient-to-b from-orange-50 to-white
         p-2 sm:p-3
         min-h-[200px] sm:min-h-[260px]
         flex flex-col justify-between
         transition hover:shadow-lg gap-2"
>
    <!-- Image -->
    <div
      class="rounded-xl border border-yellow-400 p-2 mb-4 overflow-hidden cursor-pointer"
      @click="emit('open', image)"
    >
      <img
        :src="image"
        :alt="title"
        loading="lazy"
        class="w-full aspect-[4/3] object-contain rounded-lg"
      />
    </div>

    <!-- Content -->
    <h3 class="font-semibold text-gray-800 text-sm lg:text-sm leading-snug mt-1">
      {{ title }}
    </h3>

    <p class="text-xs text-orange-400 mt-1">
      by {{ issuer }}
    </p>

    <!-- Footer -->
    <div class="flex justify-between mt-4 text-sm text-orange-400">
      <button
        @click="emit('open', image)"
        class="hover:underline flex items-center gap-1"
      >
        <span class="text-xs">👁 Preview</span>
      </button>

      <a
        :href="link"
        target="_blank"
        class="hover:underline flex items-center gap-1 text-xs"
      >
        🔗 Link
      </a>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  issuer: String,
  image: String,
  preview: String,
  link: String,
})

const emit = defineEmits(["open"])

import { ref } from "vue"

const showPreview = ref(false)
const selectedCert = ref(null)

const openPreview = (cert) => {
  selectedCert.value = cert
  showPreview.value = true
}

const closePreview = () => {
  showPreview.value = false
}
</script>
