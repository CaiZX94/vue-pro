<template>
  <div>
    <Breadcrumb :breadcrumbItem='breadcrumbItem'></Breadcrumb>
    <div class="setting-wrap">
      <div class="setting-block">
        <h3> {{$t('message.baseSetting')}} </h3>
        <div class="setting-item">
          <h4>{{$t('message.langSetting')}}</h4>
          <div class="langBtn">
            <el-button size="mini" class="addBtn" @click="switchLang('cn')">中文</el-button>
            <el-button size="mini" class="addBtn" @click="switchLang('en')">English</el-button>
          </div>
        </div>
        <div class="setting-item">
          <h4>{{$t('message.themeSetting')}}</h4>
          <div class="langBtn">
            <el-color-picker v-model="color" size="small"></el-color-picker>
          </div>
        </div>
      </div>

      <div class="setting-block">
        <h3>{{$t('message.infoSetting')}}</h3>
        <div class="setting-item">
          <h4>{{$t('message.avatarSetting')}}</h4>
          <div class="langBtn">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </div>
        <div class="setting-item">
          <h4>{{$t('message.passwordSetting')}}</h4>
          <div class="langBtn">
            <el-form :model="ruleForm" ref="form" :rules='rules'>
              <el-form-item prop="oldPass">
                <el-input type="text" v-model="ruleForm.oldPass" style="width: 30%;" autocomplete="off" :placeholder="$t('message.oldPassword')"></el-input>
              </el-form-item>
              <el-form-item prop="newPass" >
                <el-input type="text" v-model="ruleForm.newPass" style="width: 30%;" autocomplete="off" :placeholder="$t('message.newPassword')"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="saveBtn">
          <el-button size="middle" class="" @click="savePersonSetting()">{{$t('message.save')}}</el-button>
        </div>
      </div>
    </div>
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
    let validateOldPass = (rule, value, callback) => {
      let logininfo = JSON.parse(localStorage.getItem('logininfo'))
      if (value === '') {
        callback(new Error('原始密码不能为空！'))
      } else if (value !== logininfo.password) {
        callback(new Error('原始密码不正确！'))
      } else {
        callback()
      }
    }
    let validateNewPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('新密码不能为空！'))
      } else {
        callback()
      }
    }

    return {
      breadcrumbItem: [
        {label: this.$t('message.home'), isHome: true},
        {label: this.$t('message.setting')}
      ],
      lang: 'en',
      color: '#409EFF',
      imageUrl: '',
      ruleForm: {
        oldPass: '',
        newPass: ''
      },
      rules: {
        oldPass: [
          { validator: validateOldPass, required: true, trigger: 'blur' }
        ],
        newPass: [
          { validator: validateNewPass, required: true, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {

    },
    // 切换语言
    switchLang (type) {
      this.$i18n.locale = type === 'en' ? this.lang : 'cn'
      localStorage.setItem('lang', this.$i18n.locale)
    },
    // 上传图片 上传成功的钩子
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    // 上传前的钩子
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG,JPEG,PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 保存个人设置
    savePersonSetting () {
      this.savePass()
    },
    // 保存密码设置
    savePass () {
      let logininfo = JSON.parse(localStorage.getItem('logininfo'))
      logininfo.password = this.ruleForm.newPass
      localStorage.setItem('logininfo', JSON.stringify(logininfo))
      this.$message({
        showClose: true,
        message: `保存成功`,
        type: 'success'
      })
    }

  }
}
</script>

<style lang="scss" scoped>
.setting-wrap{
  width: 70%;
  margin-top: 50px;
  .setting-block{
    margin-top: 30px;
    padding: 20px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.08);
    h3{
      padding-bottom: 10px;
      text-align: left;
      font-size: 17px;
      font-weight: bold;
      line-height: 17px;
    }
    .setting-item{
      padding: 20px 0;
      text-align: left;
      line-height: 10px;
      height: auto;
      border-bottom: 1px solid #f3f3f3;
      h4{
        font-size: 13px;
      }
      .langBtn{
        margin-top: 30px;
        /deep/ .el-upload{
          width: 70px;
          height: 70px;
          border: 2px dashed #eee;
          border-radius: 3px;
          line-height: 70px;
          .avatar{
            width: 100%;
          }
        }
      }
    }
    .saveBtn{
      margin-top: 15px;
      line-height: 1px;
    }
  }
}

</style>
