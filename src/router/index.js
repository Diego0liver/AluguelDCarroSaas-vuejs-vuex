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
},
{
  path: '/novocliente',
  name: 'novocliente',
    
    component: () => import ('@/views/NovoCliente.vue')
},
{
  path: '/novocarro',
  name: 'novocarro',
    
    component: () => import ('@/views/NovoCarro.vue')
},
{
  path: '/carroID/:id',
  name: 'carroID',
    
    component: () => import ('@/views/CarroID.vue'),
    props: true,
},
{
  path: '/clienteID/:id',
  name: 'clienteID',
    
    component: () => import ('@/views/clienteID.vue'),
    props: true,
},

  ]
})

export default router
