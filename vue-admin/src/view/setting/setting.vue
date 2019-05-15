<template>
  <div>
    <Breadcrumb :breadcrumbItem='breadcrumbItem'></Breadcrumb>
    <div class="setting-wrap">
      <div class="setting-block">
        <h3>{{$t('message.baseSetting')}}</h3>
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
          <h4>{{$t('message.personSetting')}}</h4>
          <div class="langBtn">

          </div>
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
    return {
      breadcrumbItem: [
        {label: this.$t('message.home'), isHome: true},
        {label: this.$t('message.setting')}
      ],
      lang: 'en',
      color: '#409EFF'
    }
  },
  created () {

  },
  methods: {
    init () {

    },
    switchLang (type) {
      this.$i18n.locale = type === 'en' ? this.lang : 'cn'
      localStorage.setItem('lang', this.$i18n.locale)
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
      }
    }
  }
}

</style>
