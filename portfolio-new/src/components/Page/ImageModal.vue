<template>
  <!-- Overlay -->
  <div
    class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    @click.self="emit('close')"
  >
    <!-- Modal -->
    <div class="bg-white p-4 rounded-xl max-w-3xl  mx-4">

      <!-- Image wrapper (relative) -->
      <div class="relative">
        <!-- Close button INSIDE image -->
        <button
          class="absolute top-2 right-2
                 bg-black/70 text-white
                 w-8 h-8 rounded-full
                 flex items-center justify-center
                 hover:bg-black transition z-10"
          @click="emit('close')"
        >
          ✕
        </button>

        <!-- Image -->
        <img
          :src="image"
          class="rounded-lg w-full h-auto
                 aspect-[1/1] sm:aspect-[4/3]
                 object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
})

const emit = defineEmits(["close"])
</script>
