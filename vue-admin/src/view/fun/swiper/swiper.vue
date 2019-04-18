<template>
  <div>
    <Breadcrumb :breadcrumbItem='breadcrumbItem'></Breadcrumb>
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
        {label: '功能管理'},
        {label: '轮播图'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
