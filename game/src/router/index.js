import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Signup from '@/components/Signup'
import ForgotPassword from '@/components/ForgotPassword'
import ChangePassword from '@/components/ChangePassword'
import Dashboard from '@/components/dashboard/Dashboard'
import UserProfile from '@/components/dashboard/UserProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup	
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: ForgotPassword	
    },
    {
      path: '/newpass',
      name: 'newpass',
      component: ChangePassword	
    },
    {
	  path: '/dashboard',
      name: 'dashboard',
	  component: Dashboard,
	  children: [
	  	{
	  	  path: 'profile',
          component: UserProfile
	  	}
	  ]
    }
  ]
})