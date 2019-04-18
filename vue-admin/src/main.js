import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import '@/assets/style/index.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 跳转路由之前查看是否登录，token是否过期
router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem('login')
  let token = sessionStorage.getItem('token')

  if (user) {
    if (to.path === '/login') { // 如果当前处在登录页面，则不做任何提示
      next()
    } else {
      if (token) {
        next()
      } else {
        Vue.prototype.$message('您的登录已过期，请重新登录！') // 调用element的message组件
        next('/login')
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      Vue.prototype.$message.warning('请登录！')
      next('/login')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
