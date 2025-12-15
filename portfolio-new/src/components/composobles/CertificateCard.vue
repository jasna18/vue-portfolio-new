<!-- included in Certificates.vue -->
<template>
  <div
    class="rounded-2xl border border-orange-400 p-4 bg-gradient-to-b
           from-orange-50 to-white transition hover:shadow-xl ml-5 mr-5"
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
        class="rounded-lg w-full h-auto transition-transform duration-300 hover:scale-105"
      />
    </div>

    <!-- Content -->
    <h3 class="font-semibold text-gray-800 text-sm leading-snug">
      {{ title }}
    </h3>

    <p class="text-sm text-orange-400 mt-1">
      by {{ issuer }}
    </p>

    <!-- Footer -->
    <div class="flex justify-between mt-4 text-sm text-orange-400">
      <button
        @click="emit('open', image)"
        class="hover:underline flex items-center gap-1"
      >
        👁 Preview
      </button>

      <a
        :href="link"
        target="_blank"
        class="hover:underline flex items-center gap-1"
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
</script>
