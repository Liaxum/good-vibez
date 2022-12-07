/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { Vue3Lottie } from 'vue3-lottie'

// css
import 'vue3-lottie/dist/style.css'

const app = createApp(App)

registerPlugins(app)

app.use(Vue3Lottie)

app.mount('#app')
