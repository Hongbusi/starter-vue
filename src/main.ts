import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import routes from './router'

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  }
)
