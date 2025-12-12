<template>
  <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl shadow-md">
    
    <!-- Icon + Title -->
    <div class="flex items-center gap-4 mb-3">
      <div class="text-4xl">{{ icon }}</div>
      <h3 class="text-sm md:text-md font-bold">{{ title }}</h3>
    </div>

    <p class="text-gray-700 text-xs font-medium md:text-md   mb-2">{{ description }}</p>
    <p class="text-sm text-center font-normal tracking-wide text-gray-600 mb-2">
      SKILLS
    </p>

    <!-- skill tags -->
    <div class="flex flex-wrap gap-2 justify-center">
      <span 
        v-for="skill in skills" 
        :key="skill"
        class="px-2 py-1 bg-white shadow rounded-lg text-xs font-medium"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  skills: Array,
  icon: String
});
</script>
