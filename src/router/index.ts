// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RoomsView from '@/views/RoomsView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView,
      },
      {
        path: '/rooms',
        name: 'Rooms',
        component: RoomsView
      },
      {
        path: '/login',
        name: 'Login',
        component: LoginView,
      }

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
