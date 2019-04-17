import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const index = r => require.ensure([], () => r(require('@/view/index')), 'index')
const home = r => require.ensure([], () => r(require('@/view/home')), 'home')
const sort = r => require.ensure([], () => r(require('@/view/sort')), 'sort')
const cart = r => require.ensure([], () => r(require('@/view/cart')), 'cart')
const my = r => require.ensure([], () => r(require('@/view/my')), 'my')
const detail = r => require.ensure([], () => r(require('@/view/detail')), 'detail')
const sortList = r => require.ensure([], () => r(require('@/view/sortList')), 'sortList')
const login = r => require.ensure([], () => r(require('@/view/login')), 'login')
// const sortList = r => require.ensure([], () => r(require('@/view/sortList')), 'sortList')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'sort',
          name: 'sort',
          component: sort
        },
        {
          path: 'cart',
          name: 'cart',
          component: cart
        },
        {
          path: 'my',
          name: 'my',
          component: my
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/sortList',
      name: 'sortList',
      component: sortList
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
