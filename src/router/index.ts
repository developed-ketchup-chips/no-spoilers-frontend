// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RoomsView from '@/views/RoomsView.vue'
import SingleRoomView from '@/views/SingleRoomView.vue'


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
        name: 'Home',
        component: HomeView,
      },
       {
        path: "/rooms/:id", // :id is a dynamic parameter
        name: "room",
        component: SingleRoomView,
        props: true, // Pass the route parameter as a prop to the component
      }

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
