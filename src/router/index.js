import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import DashboardLayout from '@/components/DashboardLayout'
import UserManagement from '@/components/UserManagement'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'DashboardLayout',
      component: DashboardLayout
    },
    {
      path: '/user',
      name: 'UserManagement',
      component: UserManagement
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
