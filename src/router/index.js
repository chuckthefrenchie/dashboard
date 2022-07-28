import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '../layouts/AppLayout.vue';
import ParksProjectLayoutLayout from '../layouts/ParksProjectLayoutLayout.vue';
import AboutLayout from '../layouts/AboutLayout.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "parks-project",
          component: ParksProjectLayoutLayout,
        },
        {
          path: "/about",
          component: AboutLayout,
        },
        {
          path: '*',
          redirect: '/about'
        }
      ],
    },
  ]
})

export default router
