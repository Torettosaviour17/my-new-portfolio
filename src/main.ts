import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // for navbar toggle
import 'animate.css'
import './assets/css/tailwind.css'
import './assets/css/tailwind.css'
// import '@lottiefiles/lottie-player'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
