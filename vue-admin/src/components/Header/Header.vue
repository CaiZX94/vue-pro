<template>
  <div class="header">
    <div class="logo">LOGO</div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      background-color="#333"
      text-color="#fff"
      active-text-color="#0BB023"
      mode="horizontal"
      @select="handleSelect">
        <el-menu-item index="1">
          <el-badge :value="12">
            <i class="el-icon-bell"></i>
          </el-badge>
        </el-menu-item>
        <el-menu-item index="2">
          <el-badge :value="7">
            <i class="el-icon-message"></i>
          </el-badge>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <img src="../../assets/images/avatar.jpg" alt="" class="avatar">
          </template>
          <el-menu-item index="2-1">个人信息</el-menu-item>
          <el-menu-item index="2-2">设置</el-menu-item>
          <el-menu-item index="2-3">退出登录</el-menu-item>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1' // 当前激活菜单
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  .logo{
    float: left;
    margin-left: 50px;
    width: 100px;
    line-height: 60px;
    color: #fff;
  }
  /deep/ .el-menu{
    float: right;
    .el-menu-item [class^=el-icon-]{
      font-size: 25px;
    }
    .el-badge__content.is-fixed{
      top: 20px;
      right: 13px;
    }
    .avatar{
      width: 40px;
      height: 40px;
      border-radius: 100px;
    }
  }
}

</style>
