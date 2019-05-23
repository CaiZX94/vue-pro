<template>
  <div class="menu">
    <div class="collapse" @click="openCollapse">
      <i class="el-icon-d-arrow-left" v-show="!isCollapse"></i>
      <i class="el-icon-d-arrow-right" v-show="isCollapse"></i>
    </div>
    <el-menu default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse">
        <router-link to="/index/home">
          <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">{{$t('message.home')}}</span>
          </el-menu-item>
        </router-link>
        <el-submenu index="2" >
          <template slot="title">
            <i class="iconfont icon-ic_a-px_living "></i>
            <span slot="title">{{$t('message.funManage')}}</span>
          </template>
          <el-menu-item-group>
            <router-link to="/index/fun/tab">
              <el-menu-item index="2-1">{{$t('message.tab')}}</el-menu-item>
            </router-link>
            <router-link to="/index/fun/swiper">
              <el-menu-item index="2-2">{{$t('message.swiper')}}</el-menu-item>
            </router-link>
            <router-link to="/index/fun/charts">
              <el-menu-item index="2-3">{{$t('message.charts')}}</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <router-link to="/index/userManage">
          <el-menu-item index="3" v-perm="'admin'">
            <i class="iconfont icon-ic_a-px_mine_off user"></i>
            <span slot="title">{{$t('message.userManage')}}</span>
          </el-menu-item>
        </router-link>
        <router-link to="/index/authManage">
          <el-menu-item index="4" v-perm="'superAdmin'">
            <i class="iconfont icon-ic_a-px_mine_off user"></i>
            <span slot="title">{{$t('message.authManage')}}</span>
          </el-menu-item>
        </router-link>
        <router-link to="/index/setting">
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
              <span slot="title">{{$t('message.setting')}}</span>
          </el-menu-item>
        </router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false // 默认false 展开的
    }
  },
  props: {
    auth: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // 菜单伸缩
    openCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.menu{
  position: relative;
  padding-top: 12px;
  .collapse{
    position: absolute;
    top: 20px;
    right: -40px;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 0 3px 3px 0;
    text-align: center;
    line-height: 43px;
    cursor: pointer;
    .el-icon-d-arrow-left{
      font-size: 20px;
    }
  }
  /deep/ .el-menu{
    border-right: none;
     .el-menu-item{
       padding: 0 10px 0 27px !important;
     }
     .el-submenu{
       padding-left: 10px;
       .el-submenu__title{
          padding-left: 12px !important;
       }
       .el-menu-item{
         min-width: 190px;
       }
     }
    .el-menu-item,.el-submenu{
      text-align: left;
      .iconfont{
        font-size: 22px;
        font-weight: bold;
      }
      span{
        display: inline-block;
        padding-left: 10px;
      }
    }
  }
  /deep/ .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
      .el-submenu__title{
        padding-left: 20px !important;
      }
  }
}
</style>
