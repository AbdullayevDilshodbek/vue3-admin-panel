/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// imports
import {createPinia} from 'pinia'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import './assets/tailwind.css'

const app = createApp(App)

// pinia
const pinia = createPinia()

registerPlugins(app)

app
  .use(pinia)
  .mount('#app')
