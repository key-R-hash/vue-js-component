import Vue from 'vue'
import Router from 'vue-router'
// import axios from 'axios'
// import DinamicPageLoad from '@/components/DinamicPageLoad'
import Index from '@/components/index'
import Login from '@/components/login'
import CreatePost from '@/components/create-post'
import Post from '@/components/post'
import Registration from '@/components/Registration'
import Update from '@/components/update'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/:page',
    //   name: 'Dinamic Page',
    //   component: DinamicPageLoad
    // },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/create-post',
      name: 'create-post',
      component: CreatePost
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/Registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/update',
      name: 'update',
      component: Update
    }
  ]
})
