<!-- included in certificates.vue -->
<template>
  <div
    class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    @click.self="emit('close')"
  >
    <div class="bg-white p-4 rounded-xl max-w-3xl w-full">
      <img :src="image" class="rounded-lg w-full h-auto aspect-[4/3]" />
      <button
      class="w-full max-w-sm  lg:max-w-none
           rounded-xl bg-transparent content-wrapper object-contain"
        @click="emit('close')"
      >
        Close
      </button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  image: String,
})

const emit = defineEmits(["close"])
</script>
