<template>
  <div :class="darkMode ? 'bg-gray-900 text-white' : 'text-black'" class="transition-colors duration-500">
    <header 
      :class="headerClass" 
      :style="{ backgroundColor: darkMode ? '#111827' : '#A7C1A8' }" 
      class="fixed top-0 w-full z-10 transition-colors duration-500"
    >
      <div class="w-full flex justify-between mx-auto pl-4 
                  md:w-5/6 md:max-w-7xl h-16 md:mx-auto">
  
        <nav class="flex justify-between items-center py-3 lg:py-3 w-full" 
             :class="{ 'scrolled-nav': isScrolled }">

          <!-- Mobile menu -->
          <button class="text-2xl md:hidden" @click="toggleMenu">☰</button>

          <!-- Nav links -->
          <ul
            class="font-bold"
            :class="[
              menuOpen ? 'flex' : 'hidden',
              'md:flex flex-col md:flex-row gap-4 md:gap-8 absolute md:static top-14 p-4 md:p-0 shadow md:shadow-none ml-auto mr-0 md:ml-auto md:mr-8'
            ]"
          >
            <li><a href="#home" @click="setActive('home')" :class="linkClass('home')">Home</a></li>
            <li><a href="#about" @click="setActive('about')" :class="linkClass('about')">About</a></li>
            <li><a href="#projects" @click="setActive('projects')" :class="linkClass('projects')">Projects</a></li>
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

// Apply active class
const linkClass = (section) => {
  return [
    "font-bold",
    darkMode ? "text-white" : "text-black",
    activeSection.value === section ? "active-link" : ""
  ];
};

// Scroll Case — Scroll Spy
onMounted(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((sec) => observer.observe(sec));

  // Sticky header watcher
  window.addEventListener("scroll", () => {
    isScrolled.value = window.scrollY > 80;
  });
});

const headerClass = computed(() => ({
  "sm:bg-transparent": !isScrolled.value,
  "md:bg-transparent": !isScrolled.value,
  "sm:bg-[#E1E9C9]": isScrolled.value && !darkMode,
  "shadow-md": isScrolled.value,
  "sm:py-2": isScrolled.value,
}));
</script>
<style>
nav a {
  color: black;
  transition: 0.3s;
}

nav.scrolled-nav a {
  color: black !important;
}

nav a.active-link {
  color: #b94010;
  border-bottom: 2px solid #b94010;
}

nav.scrolled-nav a.active-link {
  color: #e04318 !important;
  border-bottom: 2px solid #e04318;
}
</style>
