import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['../view/login/login'], resolve)
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: (resolve) => require(['../view/notFound/notFound'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/index/home',
      component: (resolve) => require(['../view/index'], resolve),
      children: [
        {
          path: 'home',
          name: 'home',
          component: (resolve) => require(['../view/home/home'], resolve)
        },
        {
          path: 'userManage',
          name: 'userManage',
          // meta: {permission: {superAdmin: true, admin: true}},
          component: (resolve) => require(['../view/userManage/userManage'], resolve)
        },
        {
          path: 'setting',
          name: 'setting',
          component: (resolve) => require(['../view/setting/setting'], resolve)
        },
        {
          path: 'authManage',
          name: 'authManage',
          // meta: {permission: {superAdmin: true}},
          component: (resolve) => require(['../view/authManage/authManage'], resolve)
        },
        {
          path: 'fun/tab',
          name: 'tab',
          component: (resolve) => require(['../view/fun/tab/tab'], resolve)
        },
        {
          path: 'fun/swiper',
          name: 'swiper',
          component: (resolve) => require(['../view/fun/swiper/swiper'], resolve)
        },
        {
          path: 'fun/charts',
          name: 'charts',
          component: (resolve) => require(['../view/fun/charts/charts'], resolve)
        }
      ]
    }
  ]
})
