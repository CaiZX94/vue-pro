<template>
  <div>
    <Breadcrumb :breadcrumbItem='breadcrumbItem'></Breadcrumb>
    <div class="main">
      <div class="user" v-if="auth === 'user'">普通用户可查看</div>
      <div class="admin" v-if="auth === 'admin'">管理员可查看</div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
export default {
  name: 'authManage',
  components: {
    Breadcrumb
  },
  data () {
    return {
      breadcrumbItem: [
        {label: '首页', isHome: true},
        {label: '权限管理'}
      ],
      auth: 'user'
    }
  },
  created () {
    this.getAuth()
  },
  methods: {
    getAuth () {
      let userinfo = sessionStorage.getItem('userinfo') ? JSON.parse(sessionStorage.getItem('userinfo')) : {}
      this.auth = userinfo.username === 'admin' ? 'admin' : 'user'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
