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
        {label: this.$t('message.home'), isHome: true},
        {label: this.$t('message.funManage')},
        {label: this.$t('message.tab')}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
