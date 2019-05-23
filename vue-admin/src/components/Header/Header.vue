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
        <el-menu-item>
            {{$t('message.hello')}}，{{username}}
        </el-menu-item>
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
            <img :src="require('../../assets/images/'+avatar)" alt="" class="avatar">
          </template>
          <el-menu-item index="3-1">{{$t('message.personInfo')}}</el-menu-item>
          <el-menu-item index="3-2" @click="setting">{{$t('message.setting')}}</el-menu-item>
          <el-menu-item index="3-3" @click="lougut">{{$t('message.logout')}}</el-menu-item>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      activeIndex: '1' // 当前激活菜单
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    // 设置
    setting () {
      this.$router.push('/index/setting')
    },
    // 退出登录
    lougut () {
      this.$router.replace('/login')
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
    margin-right: 50px;
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
