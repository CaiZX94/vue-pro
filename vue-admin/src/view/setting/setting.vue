<template>
  <div>
    <Breadcrumb :breadcrumbItem='breadcrumbItem'></Breadcrumb>
    <el-button type="primary" class="addBtn" @click="switchLang('en')">en</el-button>
    <el-button type="primary" class="addBtn" @click="switchLang('cn')">cn</el-button>
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
        {label: '设置'}
      ],
      lang: 'en'
    }
  },
  created () {

  },
  methods: {
    init () {
      if (localStorage.setItem('lang')) {
        this.$i18n.locale = localStorage.setItem('lang')
      }
    },
    switchLang (type) {
      this.$i18n.locale = type === 'en' ? this.lang : 'cn'
      localStorage.setItem('lang', this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
