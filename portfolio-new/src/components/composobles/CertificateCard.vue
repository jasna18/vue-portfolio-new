<!-- included in Certificates.vue and projects.vue with mode project -->
<template>
  <a v-if="mode === 'project'" :href="link" target="_blank"
    class="rounded-xl border border-orange-400 bg-gradient-to-b from-orange-50 to-white p-2 sm:p-3 min-h-[200px] sm:min-h-[260px] flex flex-col justify-between transition hover:shadow-lg gap-2 block no-underline text-inherit"
  >
    <!-- Image (stop propagation so preview/open still works) -->
    <div
      class="rounded-xl border border-yellow-400 mb-4 overflow-hidden cursor-pointer mt-1"
      @click.stop="emit('open', image)"
    >
      <img
        :src="image"
        :alt="title"
        loading="lazy"
        class="aspect-[3/4] sm:aspect-[16/9] md:aspect-[4/3]"
      />
    </div>

    <!-- Content -->
    <h3 class="font-semibold text-gray-800 text-sm lg:text-sm leading-snug mt-1">
      {{ title }}
    </h3>

    <p v-if="issuer" class="text-xs text-orange-400 mt-1">by {{ issuer }}</p>

    <!-- Footer -->
    <div class="flex justify-between mt-4 text-sm text-orange-400">
      <button @click.stop="emit('open', image)" class="hover:underline flex items-center gap-1">
        <span v-if="preview" class="text-xs">👁 Preview</span>
      </button>

      <span class="text-xs">&nbsp;</span>
    </div>
  </a>

  <div v-else class="rounded-xl border border-orange-400 bg-gradient-to-b from-orange-50 to-white p-2 sm:p-3 min-h-[200px] sm:min-h-[260px] flex flex-col justify-between transition hover:shadow-lg gap-2">
    <!-- Image [user clicks the card-vue send emit event+ image going to parent ]-->
    <div
      class="rounded-xl border border-yellow-400 mb-4 overflow-hidden cursor-pointer mt-1"
      @click="emit('open', image)"
    >
      <img
        :src="image"
        :alt="title"
        loading="lazy"
        class="aspect-[3/4] sm:aspect-[16/9] md:aspect-[4/3]"
      />
    </div>

    <!-- Content -->
    <h3 class="font-semibold text-gray-800 text-sm lg:text-sm leading-snug mt-1">
      {{ title }} 
    </h3>
    <p v-if="issuer" class="text-xs text-orange-400 mt-1">by {{ issuer }}</p>

    <!-- Footer -->
    <div class="flex justify-between mt-4 text-sm text-orange-400">
      <button @click="emit('open', image)" class="hover:underline flex items-center gap-1">
        <span v-if="preview" class="text-xs">👁 Preview</span>
      </button>

      <a v-if="mode === 'certificate'" :href="link" target="_blank" class="hover:underline flex items-center gap-1 text-xs">🔗 Link</a>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: String,
 issuer: {
    type: String,
    default: null,
  },
  image: String,
  preview: {
    type: String,
    default: null,
  },
  link: String,
  
  mode: {
    type: String,
    default: 'certificate'
  }
})
//i can send an event to parent component called open upward
const emit = defineEmits(["open"])
</script>
