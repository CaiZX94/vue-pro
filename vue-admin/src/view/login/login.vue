<template>
  <div class="login">
    <div class="mask"></div>
    <div class="loginForm">
      <div class="title"></div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            placeholder="用户名"
            autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            placeholder="密码"
            v-model="ruleForm.pass"
            autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked" @click="remenberPass">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="text">去注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    let validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空！'))
      } else if (value !== 'czx' && value !== 'admin' && value !== 'superAdmin') {
        callback(new Error('请输入正确的用户名！'))
      } else {
        callback()
      }
    }
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空！'))
      } else if ((this.ruleForm.username === 'czx' && value !== 'czx') || (this.ruleForm.username === 'admin' && value !== 'admin') || (this.ruleForm.username === 'superAdmin' && value !== 'superAdmin')) {
        callback(new Error('请输入正确的密码！'))
      } else {
        callback()
      }
    }

    return {
      ruleForm: { // 数值
        pass: '',
        username: ''
      },
      rules: { // 校验规则
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: validateUserName, trigger: 'blur' }
        ]
      },
      checked: false, // 是否记住密码
      logininfo: {} // 用户登录信息
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    // 登录
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let logininfo = {
            username: this.ruleForm.username,
            password: this.ruleForm.pass,
            checked: this.checked
          }
          logininfo.auth = this.ruleForm.username === 'superAdmin' ? 'superAdmin' : this.ruleForm.username === 'admin' ? 'admin' : 'user'
          localStorage.setItem('logininfo', JSON.stringify(logininfo))
          sessionStorage.setItem('login', 'login')
          sessionStorage.setItem('token', 'token')
          this.$router.push('/index')

          this.$message({
            showClose: true,
            message: `欢迎登录,${this.ruleForm.username}`,
            type: 'success'
          })
        } else {
          this.$message({
            showClose: true,
            message: '登录失败，请重新登录！',
            type: 'error'
          })
          return false
        }
      })
    },
    // 记住密码
    remenberPass () {
      this.checked = !this.checked
    },
    // 获取缓存的登录信息
    getUserInfo () {
      this.logininfo = localStorage.getItem('logininfo') ? JSON.parse(localStorage.getItem('logininfo')) : {}
      if (this.logininfo.checked) {
        this.ruleForm.username = this.logininfo.username
        this.ruleForm.pass = this.logininfo.password
        this.checked = this.logininfo.checked
      } else {
        this.ruleForm = {
          pass: '',
          username: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../../assets/images/loginBg.jpg') no-repeat 0 0;
  background-size: cover;
  .mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,.5)
  }
  .loginForm{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding:0 30px 0 0;
    width: 400px;
    background: #fff;
    .title{
      padding: 30px;
      font-size: 20px;
      text-align: center;
    }
    /deep/ .el-form{
      .el-form-item__content{
        margin-left: 30px !important;
      }
      .el-form-item:nth-of-type(4) {
        .el-button{
          padding: 12px 170px
        }
      }
    }
  }
}
</style>
