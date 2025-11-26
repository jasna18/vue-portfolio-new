<template>
  <section
    id="hero"
    :style="{
      // backgroundColor: darkMode ? '#1F2937' : '#A7C1A8',
      color: darkMode ? 'white' : 'black'
    }"
    class="w-full relative min-h-screen flex flex-col items-center
           px-2 py-4 p-4
           sm:pr-24  sm:pl-8  /* This was for content box spacing */
           md:px-16  md:gap-2 md:p-0  md:pl-16 /* This was for content box spacing */
           lg:gap-6 lg:flex-row
           transition-colors duration-500 
           overflow-x-hidden
           h-full min-w-0 bg-orange-100
          ">
  <div class="w-full flex flex-col items-start md:flex-row  pt-4 md:pt-4 md:mt-4 lg:pt-2 px-2 md:mx-2 mb-2 my-0 bg-yellow-100 ">
    <!-- left section -->
      <!-- this div for the text content wrapper, removed flex-1 to w-full -->
        <div class="w-full lg:w-2/3 xl:w-12/5 flex flex-col md:ml-2 md:mr-2 md:mb-2 items-center md:items-start p-2 md:p-8 bg-blue-100
        min-w-0 sm:text-center mb-2 gap-2 md:gap-4 md:text-center  
        md:w-[98%]   /* Optional: Slightly reduce the wrapper's overall width to prevent stretching */
            "> 
      
        <div class="text-sm md:text-md mb-4 mt-2 text-center  md:mb-4 md:ml-2 rounded-full 
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-2 bg-white/30 text-[#000000]
              inset-shadow-lg shadow-orange-500/50 md:text-center md:item-center">
        🌟 Ready to Innovate
      </div>

      <div class="text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-300 md:ml-2 mb-0 md:mt-0">
        Full Stack Developer
        <!-- <AnimatedHeading /> -->
      </div>
       <div class="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 md:ml-2 mb-6 md:mt-0">
        <AnimatedHeading />
      </div>
      <!-- text section box -->
  <div
        class="w-full max-w-md bg-white/30 dark:bg-gray-800/40 backdrop-blur-md md:w-[120%]
               p-6 md:px-4 rounded-xl shadow-lg md:ml-1 inset-shadow-sm shadow-orange-500/50"
        :class="[
          'transition-all duration-1000 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <h4 class="text-md md:text-2xl mb-4 sm:hidden md:text-left">Hi, I'm Jasna 👩‍💻</h4>
        <p class="text-md sm:text-sm mt-3 mb-0  md:text-md lg:text-lg leading-relaxed wrap-break-word">
          "Developing intelligent, responsive, and
          reliable applications by blending design,
          logic, and hands-on coding expertise"
        </p>
      </div>


         <!-- button section revised, removed flex-1 to w-full-->
  <!-- <div class="w-full flex flex-row md:flex-row md:items-start gap-5 pl-4 md:pl-0 ml-4 md:ml-2 mt-12 mb-2 md:justify-start justify-center "> -->
<div class="w-full flex flex-row gap-5 lg:flex-wrap sm:justify-center sm:mt-8 md:flex-row md:items-start md:justify-start 
           md:pl-0 ml-2 md:ml-2 mt-12 mb-2 justify-center md:w-full">
      <DivComponent text="Laravel" width="px-1" class=""/>
      <DivComponent text="Codeigniter" width="px-1"/>
      <DivComponent text="Python" width="px-1"/>
      <DivComponent text="Vuejs" width="px-4"/>
      <DivComponent text="sql" width="px-4"/>

  </div>
</div>
</div>
      <!-- ref="content" → Vue ref, so you can access this element in your script (maybe for intersection observer to trigger animation). -->
   <div class="w-full md:flex-row md:w-[98%] md:mb-2 lg:w-2/3 xl:w-7/5 flex justify-center min-w-0 sm:mt-8 bg-emerald-100 ">
      <img 
    ref="content"
    :src="girlSittingImg"
    alt="Typing code illustration"
    class="w-full max-w-sm md:max-w-none md:w-100 lg:w-120 xl:w-3xl
           rounded-xl bg-transparent content-wrapper"
    :class="{ 'animate-in': isImageVisible }"
/>
    </div>


  </section>
</template>

<script setup>
import AnimatedHeading from '../composobles/AnimateHeading.vue';

import DivComponent from '../composobles/DivComponent.vue';
import{ darkMode } from '../../data/darkMode.js';
import { ref, onMounted,watch} from 'vue';
import girlSittingImg from '../../assets/girl-sitting.png';


// for intersection  observer in hero section animation for slide-in left text-box and image-girl sitting
// If isVisible === true, it adds the animate-in class.

// 1. Text Box (Controls slide-up) - TRUTH
     const isVisible = ref(false);

//2.  NEW: State for the delayed image animation --delay 1
     const isImageVisible = ref(false);

// 3. Vertical Bar (Controls slide-in) - DELAY 2
    const isBarVisible = ref(false);

//why using this ref? to observe when the image enters the viewport 
    const content = ref(null);

//explain this onMounted function
// This function is called when the component is mounted to the DOM
// It sets up an IntersectionObserver to watch the content element
// If the content is visible in the viewport, it adds the 'animate-in' class
//then triggers the slide-in animation for the left text-box and image
// then stops observing it to prevent repeated triggers
onMounted(() => {
    // Check if the content is visible in the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          // 1. Text Box Animation (Immediate)
          isVisible.value = true;

          // 2. Girl Image Animation (Delayed by 1000ms)
          setTimeout(() => {
            isImageVisible.value = true;
          }, 300); // <-- Delay the image start by 200 milliseconds
          
          // 3. Vertical Bar Animation (Delay 2: 600ms)
          setTimeout(() => {
            isBarVisible.value = true;
          }, 600);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    { threshold: 0.3 } // Trigger when 30% of hero is visible
  );

  if (content.value) {
    observer.observe(content.value);
  }
});
// Use watch to apply the background color to the entire body
watch(darkMode, (newVal) => {
  const bgColor = newVal ? '#1F2937' : '#A7C1A8';
  
  // Update global body style
  document.body.style.backgroundColor = bgColor;
}, { immediate: true }); // Runs immediately on component mount
</script>

<style>
/* CONTENT HIDDEN */
.content-wrapper {
  transform: translateY(40px);
  opacity: 0;
  transition: all 1s ease-in-out;
}
.content-wrapper.animate-in {
  transform: translateY(0);
  opacity: 1;
}
/* Custom class to force vertical text */
/* NEW ROBUST CLASS: Uses writing-mode for reliable vertical text */
.vertical-text-mode {
  /* Forces text to flow top-to-bottom */
  writing-mode: vertical-lr !important;
  
  /* Ensures it uses the space correctly */
  text-orientation:mixed  !important;
  
  /* Ensures text doesn't wrap unexpectedly */
  white-space: nowrap; 
  
  /* Add z-index just in case for text layer */
  z-index: 60 !important; 
}
.text-beige {
  color: #F5F5DC !important; /* A light, standard beige */
}

</style>