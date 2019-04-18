<template>
  <div>
   <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/index/home' }">{{breadcrumbItem[0].label}}</el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="(item ,index) in breadcrumbItem"
      :key="index"
      v-if="!item.isHome">
      {{item.label}}
    </el-breadcrumb-item>
  </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'authManage',
  props: {
    breadcrumbItem: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
