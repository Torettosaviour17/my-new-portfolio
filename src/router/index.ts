import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Banner from '../Components/Banner.vue' // 👈 Import your main landing component

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Banner, // 👈 Assigned your Banner component to the root path
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
