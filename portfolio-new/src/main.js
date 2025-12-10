import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// init once so global settings apply
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: false,    // allow re-animating when you scroll up/down
  mirror: false,  // set true if you want animate out when scrolling past
  offset: 120
})
createApp(App).mount('#app')
