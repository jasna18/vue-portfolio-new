<template>
  <h1 class="text-lg md:text-lg lg:text-xl"
  :style="{ 
      fontWeight: fontWeight }">
    {{ displayedText }}<span class="cursor">|</span>
     
  </h1>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// Define the headings to rotate through
// const headings = [
//   "Laravel Developer",
//   "Python Developer",
//   "Full Stack Developer",
// ];
const props = defineProps({
  headings: {
    type: Array,
    default: () => [
      "Laravel Developer",
      "Python Developer",
      "Full Stack Developer",
    ],
  },
  fontWeight: {
    type: String,
    default: "400"   // or any default font
  }
  // typeSpeed: { type: Number, default: 100 },
  // deleteSpeed: { type: Number, default: 50 },
  // pauseTime: { type: Number, default: 1500 },
});
const currentHeadingIndex = ref(0);
const displayedText = ref('');
const isTyping = ref(true); // true for typing, false for deleting
const charIndex = ref(0);   // Current character index in the heading
const typeSpeed = 100;      // Milliseconds per character for typing
const deleteSpeed = 50;     // Milliseconds per character for deleting
const pauseTime = 1500;     // Pause time after typing/deleting

// --- Core Animation Logic ---
const animateText = () => {
  const currentFullText = props.headings[currentHeadingIndex.value];

  if (isTyping.value) {
    // Typing phase
    if (charIndex.value < currentFullText.length) {
      displayedText.value += currentFullText.charAt(charIndex.value);
      charIndex.value++;
      setTimeout(animateText, typeSpeed);
    } else {
      // Finished typing, now pause and switch to deleting
      isTyping.value = false;
      setTimeout(animateText, pauseTime);
    }
  } else {
    // Deleting phase
    if (charIndex.value > 0) {
      displayedText.value = currentFullText.substring(0, charIndex.value - 1);
      charIndex.value--;
      setTimeout(animateText, deleteSpeed);
    } else {
      // Finished deleting, now switch to next heading and start typing again
      isTyping.value = true;
      currentHeadingIndex.value = (currentHeadingIndex.value + 1) % props.headings.length;
      setTimeout(animateText, typeSpeed); // Start typing next heading
    }
  }
};

onMounted(() => {
  // Start the animation when the component is mounted
  animateText();
});
</script>

<style scoped>
/* Blinking Cursor Animation */
.cursor {
  display: inline-block;
  margin-left: 3px;
  animation: blink 0.7s infinite;
  font-weight: 300; /* Adjust cursor style */
  color:black; /* Adjust cursor color */
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>