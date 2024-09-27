import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Design from '../views/design/Design.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        inSideMenu: true,
        title: '首页'
      }
    },
    {
      path: '/design',
      name: 'design',
      component: Design,
      meta: {
        inSideMenu: true,
        title: '开始设计'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        inSideMenu: true,
        title: '关于我们'
      }
    }
  ]
})

export default router
