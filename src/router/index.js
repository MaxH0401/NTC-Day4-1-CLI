import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import ProductView from '../views/ProductView.vue'
import CommentView from '../views/CommentView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // lazy-loaded：非不得已才使用
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products/:productId',
    component: ProductView
  },
  {
    path: '/products/:productId/comments',
    component: CommentView
  }
]
// router.beforeEach(())
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
