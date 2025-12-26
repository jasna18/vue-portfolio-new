<template>
  <div :class="darkMode ? 'bg-gray-900 text-white' : 'text-black'" class="transition-colors duration-500">
    <header :class="headerClass"
      class="fixed top-0 w-full z-10 transition-colors duration-500">
      <div class="w-full flex justify-between  pl-4 
                  md:w-5/6 md:max-w-7xl h-16 md:mx-auto">

        <nav class="flex justify-between items-center py-3 lg:py-3 w-full" :class="{ 'scrolled-nav': isScrolled }">

          <!-- Mobile menu -->
          <button class="text-2xl md:hidden" @click="toggleMenu">☰</button>

          <!-- Nav links -->
          <ul class="font-bold" :class="[
            menuOpen ? 'flex' : 'hidden',
            'md:flex flex-col md:flex-row gap-4 md:gap-8 absolute md:static top-14 p-4 md:p-0 shadow md:shadow-none ml-auto mr-0 md:ml-auto md:mr-8'
          ]">
            <li><a href="#home" @click="setActive('home')" :class="linkClass('home')">Home</a></li>
            <li><a href="#about" @click="setActive('about')" :class="linkClass('about')">About</a></li>
            <li><a href="#portfolio" @click="setActive('portfolio')" :class="linkClass('portfolio')">Portfolio</a></li>
            <li><a href="#contact" @click="setActive('contact')" :class="linkClass('contact')">Contact</a></li>
          </ul>

          <!-- Dark Mode Toggle -->
          <button @click="toggleDark" class="ml-4 text-2xl">
            {{ darkMode ? "🌙" : "☀️" }}
          </button>

        </nav>
      </div>
    </header>
  </div>
</template>
<script setup>
import { menuOpen, toggleMenu, closeMenu, darkMode, toggleDark } from '../../data/darkMode.js';
import { ref, onMounted, computed } from "vue";

const isScrolled = ref(false);

// Track active nav link
const activeSection = ref("home");

// Click Case
const setActive = (section) => {
  activeSection.value = section;
  closeMenu();
};

// Update active section on scroll
const updateActiveSection = () => {
  const sections = ['home', 'about', 'portfolio', 'contact'];
  for (let section of sections) {
    const element = document.getElementById(section) || document.querySelector(`[id="${section}"]`);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section;
          console.log("Active Section:", section);

        break;
      }
    }
  }
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
});

// Apply active class
const linkClass = (section) => {
  return [
    "font-bold",
    darkMode ? "text-white" : "text-black",
    activeSection.value === section ? "active-link" : ""
  ];
};




const headerClass = computed(() => ({
  'bg-[#A7C1A8]': !darkMode.value,
  'bg-gray-900': darkMode.value,
  'shadow-md': isScrolled.value, // optional – remove if not needed
  'transition-colors duration-500': true
}));
</script>
<style>
nav a {
  color: black;
  transition: 0.3s;
    text-decoration: none;

}

nav.scrolled-nav a {
  color: black !important;
}

nav a.active-link {
  color: #b94010;
  border-bottom:none;
}

nav.scrolled-nav a.active-link {
  color: #e04318 !important;
  border-bottom: none;
}
</style>
