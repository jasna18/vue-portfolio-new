import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createPinia } from 'pinia'


// init once so global settings apply
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: false,    // allow re-animating when you scroll up/down
  mirror: false,  // set true if you want animate out when scrolling past
  offset: 120
})
const app = createApp(App)   // ✅ app is created here
const pinia = createPinia()  // ✅ pinia instance

app.use(pinia)               // ✅ this now works
app.mount('#app')

// createApp(App).mount('#app')
