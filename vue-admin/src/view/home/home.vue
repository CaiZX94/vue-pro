<template>
  <div>
    <Breadcrumb :breadcrumbItem='breadcrumbItem'></Breadcrumb>
    <p>{{$t('message.hello')}}</p>
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
        {label: this.$t('message.home'), isHome: true}
      ]
    }
  }
  // methods: {
  //   switchLang (type) {
  //     this.$i18n.locale = type === 'en' ? this.lang : 'cn'
  //   }
  // }
}
</script>

<style lang="scss" scoped>

</style>
