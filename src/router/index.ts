import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('~/views/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
