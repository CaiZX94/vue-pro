<template>
  <div class="wrap">
    <el-container>
      <el-header>
        <Header :username='loginUserInfo.username' :avatar='avatar'></Header>
      </el-header>
      <el-container>
        <Menu :auth='auth'></Menu>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Menu from '@/components/Menu/Menu'
export default {
  name: 'App',
  components: {
    Header,
    Menu
  },
  data () {
    return {
      loginUserInfo: '',
      avatar: '',
      lang: 'en'
    }
  },
  created () {
    this.getTableData()
    this.getAuth()
  },
  methods: {
    getTableData () {
      // 读取本地缓存数据 获取用户管理表格数据
      if (localStorage.getItem('logininfo')) {
        this.loginUserInfo = JSON.parse(localStorage.getItem('logininfo'))
      }
    },
    // 判断用户角色
    getAuth () {
      let logininfo = localStorage.getItem('logininfo') ? JSON.parse(localStorage.getItem('logininfo')) : {}
      this.auth = logininfo.auth === 'superAdmin' ? 'superAdmin' : logininfo.auth === 'admin' ? 'admin' : 'user'
      if (this.auth === 'superAdmin') {
        this.avatar = 'avatar.jpg' // 超管头像
      } else if (this.auth === 'admin') {
        this.avatar = 'default-avatar.jpg' // 普通管理员头像
      } else {
        this.avatar = 'default-avatar2.png' // 普通用户默认头像
      }
    }
  }
}
</script>

<style scope lang='scss'>
.wrap{
  height: 100%;
  /deep/ .el-container{
    height: 100%;
    .el-header {
      background: #333;
      padding: 0;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .el-aside {
      background: #fff;
      color: #333;
      text-align: center;
      line-height: 200px;
    }

    .el-main {
      padding: 35px 0 0 75px;
      background: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }

    body > .el-container {
      margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }
  }
}

</style>
