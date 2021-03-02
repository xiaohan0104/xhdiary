import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path:'',
    redirect:'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('../views/List.vue')
      },
      {
        path: 'add',
        name: 'Add',
        component: () => import('../views/Add.vue'),
      }

    ]

  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/ceshi',
    name: 'ceshi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/ceshi.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
