<template>
    <div class="wrap">
        <div class="loginHd">
            <p class="cancel" @click="cancel">取消</p>
            登录豆瓣
        </div>
        <div class="form">
            <input type="text" placeholder="手机号/用户名" class='userName' v-model="userInfo.userName">
            <input type="text" placeholder="密码" class="password" v-model="userInfo.password">
            <button class="login" @click="login" v-show="showLoginBtn">登录</button>
            <button class="register" @click="register" v-show="!showLoginBtn">注册</button>
        </div>
        <div class="other" v-show="showLoginBtn">使用其它方式登录 & 找回密码</div>
        <div class="loadDown" v-show="showLoginBtn">
            <span>注册豆瓣</span>
            <span>下载豆瓣App</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import api from './../api/api.js'
    export default {
        data() {
            return {
                showLoginBtn:false,
                userInfo:{
                    userName:'',
                    password:''
                }
            }
        },
        created(){
            this.init();
        },
        methods:{
            init(){
                this.showLoginBtn = this.$route.query.type == 'login'? true : false;
                this.getInfo()
            },

            login(){

            },

            register(){

            },

            cancel(){
                this.$router.push({path:'/cart'})
            },

            getInfo(){
                // 请求本地静态文件夹下写死的静态数据
                axios.get('/static/mock/usermock.json').then(response=>{
                    console.log(response,123)
                }).catch(err=>{
                    console.log('网络错误')
                })

                // axios封装后，调用
                // api.getMockData('/data/index').then(res=>{
                //      console.log(res);
                // })

                // 直接请求
                // this.$http.get('/data/index').then(res => {
                //     console.log(res.data);
                // }).catch(err=>{
                //     console.log(err);
                // })

            }
        }
    }
</script>

<style scoped lang='scss'>
.wrap{
    .loginHd{
        width: 100%;
        height:50px;
        text-align: center;
        line-height: 50px;
        border-bottom: 1px solid #eee;
        box-shadow: 1px 0px 15px -6px rgba(0,0,0,.4);
        font-weight: bold;
        .cancel{
          position: absolute;
          top: 0;
          left: 20px; 
          color: #42bd56;
          font-size: 14px;
          font-weight: normal;
        }
    }
    .form{
        margin-top: 20px;
        text-align: center;
        input{
            display: inline-block;
            padding: 0 10px;
            width: 345px;
            height: 45px;
            border: 1px solid #e0e0e0;
            box-sizing: border-box;
        }
        .userName{
            border-radius: 3px 3px 0 0;
            border-bottom: none;
        }
        .password{
            border-radius: 0 0 3px 3px;
        }
    }
    .login,.register{
        padding: 10px 0;
        width: 335px;
        text-align: center;
        margin: 15px 0 0;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        background-color: #68cb78;
        border: none;
        outline: none;
    }
    .other{
        color: #9d9d9d;
        text-align: center;
        margin-top: 15px;
    }
    .loadDown{
        margin-top: 35px;
        text-align: center;
        span{
            color: #42bd56;
            font-size: 14px;
            margin: 0 10px;
        }
    }
}

</style>