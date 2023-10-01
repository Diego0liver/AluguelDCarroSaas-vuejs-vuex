import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cliente',
      name: 'cliente',
      
      component: () => import ('@/views/ClientesView.vue')
    },
    {
    path: '/carros',
    name: 'carros',
    
    component: () => import ('@/views/CarrosView.vue')
}
  ]
})

export default router
