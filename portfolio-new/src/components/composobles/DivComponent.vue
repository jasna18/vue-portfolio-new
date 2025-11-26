<template>
    <div class="hidden sm:inline-block md:inline-block lg:inline-block text-xs md:text-sm lg:text-sm tracking-wide rounded-full 
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg 
                bg-white/30 text-[#000000] md:mb-6 transition duration-300 ease-in-out 
                 hover:bg-[#cfafa6] hover:shadow-lg inset-shadow-sm shadow-orange-500/50" :class="[width]" >
                  {{ text }}             
       </div>
</template>
<script setup>
 defineProps({ 
    width: String,   
    text: {
      type: String,
      default: "Click Me",
    },
  });
</script>