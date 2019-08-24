import Vue from 'vue'
import Router from 'vue-router'
import { auth } from '@/services/auth.js'
import Home from './views/Home.vue'
import About from '@/views/About'
import Contact from '@/views/Contact'
import Admin from '@/views/Admin'
import AdminUserList from '@/views/AdminUserList'
import AdminImageList from '@/views/AdminImageList'
import AdminImageCreate from '@/views/AdminImageCreate'
import AdminDashboard from '@/views/AdminDashboard'
import AdminImageEdit from '@/views/AdminImageEdit'
import AdminImageDelete from '@/views/AdminImageDelete'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Logout from '@/views/Logout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'gallery'
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/admin',
      beforeEnter: auth,
      component: Admin,
      children: [
        {
          path: '/',
          component: AdminDashboard
        },
        {
          path: 'users',
          component: AdminUserList
        },
        {
          path: 'images',
          component: AdminImageList
        },
        {
          path: 'images/create',
          component: AdminImageCreate
        },
        {
          name: 'editimages',
          path: 'images/edit/:id',
          component: AdminImageEdit
        },
        {
          name: 'deleteimages',
          path: 'images/delete/:id',
          component: AdminImageDelete
        }
      ]
    }
  ]
})
