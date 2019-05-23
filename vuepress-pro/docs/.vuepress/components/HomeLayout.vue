<template>
  <div>
    <div class="block block_first">
      <el-card class="box-card">
        <img src="../public/img/avatar.jpg" alt="" class="avatar">
        <p class="name">蔡泽欣</p>
        <p class="sign">知识的贫穷，限制了你的想象力</p>
        <div class="blog">
          <a href="https://www.zhihu.com/people/xing-kong-wu-yu-99-88/activities"><span>知乎</span></a> 
          <a href="https://segmentfault.com/u/xingkongwuyu_59e4de5ed8fe6"><span>segmentfault</span></a>
          <a href="https://juejin.im/user/58b53054ac502e00589b364f"><span>掘金</span></a>
        </div>
      </el-card>
    </div>
    <div class="block block_second">
      <h2 class="title">Skills Overview</h2>
      <ul class="list">
        <li v-for="(item,index) in listData" :key="index">
          <el-progress type="circle" :percentage="item.percentage" color="#13CE66"></el-progress>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
    <div class="block block_third">
      <h2 class="title">Work Experience </h2>
      <el-steps direction="vertical" class="process">
        <el-step title="广东道一信息" description="负责CRM产品线前端开发工作" icon="el-icon-location-information"></el-step>
        <el-step title="未完待续" icon="el-icon-location-information"></el-step>
      </el-steps>
    </div>
    <div class="block block_fouth">
      
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        listData:[
          {text:'Vue',percentage:80},
          {text:'ES6',percentage:70},
          {text:'VuePress',percentage:80},
          {text:'React',percentage:40},
          {text:'微信小程序',percentage:60},
          {text:'Markdown',percentage:80},
          {text:'Webpack',percentage:30},
          {text:'React Native',percentage:0},
          {text:'Sass',percentage:80},
          {text:'Less',percentage:20},
        ]
      }
    },
  }
</script>

<style scoped>
.block:not(.block_third){
  display: flex;
  width: 100%;
  height: 840px;
}
.block_first{
  align-items: center;
  justify-content: center;
  background: url('../public/img/services-bg.jpg') no-repeat 0 0;
  background-attachment:fixed;
}
.block_second{
  align-items: center;
  flex-direction: column;
  background: url('../public/img/skills-bg.jpg') no-repeat 0 0;
  background-attachment:fixed; 
}
.block_third{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.block_fouth{
  align-items: center;
  flex-direction: column;
  background: url('../public/img/contact-bg.jpg') no-repeat 0 0;
  background-attachment:fixed; 
}
.box-card{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
}
.avatar{
  margin-left: 98px;
  width: 70px;
  height: 70px;
  border-radius: 100px;
}
.name{
  margin-top: 15px;
  text-align: center;
  color: #aaa;
  font-size: 17px;
}
.sign{
  margin: 50px 0 20px 0; 
  text-align: center;
}
.blog span{
  display: inline-block;
  margin: 0 5px;
  padding: 5px 18px;
  background: #67C23A;
  border-radius: 100px;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
}

.list{
  padding: 20px 0;
  width: 100%;
}
.list li{
  display: inline-flex; /*行内块*/
  flex-direction: column; /*item垂直布局*/
  flex-wrap: wrap;  /*item换行*/
  align-items: center; /*item水平居中*/
  margin-top: 40px;
  width: 20%;
  list-style: none;
}

.process{
  margin-left: -70px;
  padding: 20px 0 40px 0;
  height: 250px;
}
</style>