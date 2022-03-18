import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

import routes from './router'

export const createApp = ViteSSG(App, { routes }, () => {
  // install plugins etc.
})
