// code for managing dark mode and menu state

export { menuOpen, toggleMenu, closeMenu, darkMode, toggleDark };

import { ref, onMounted } from "vue";

const menuOpen = ref(false);
 const darkMode = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
function closeMenu() {
  menuOpen.value = false;
}
function toggleDark() {
  darkMode.value = !darkMode.value;
  localStorage.setItem("darkMode", darkMode.value);
}
onMounted(() => {
  const saved = localStorage.getItem("darkMode");
  if (saved === "true") darkMode.value = true;
});


