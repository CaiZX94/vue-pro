<template>
    <div class="wrap">
        <div class="title">还未登录,请使用豆瓣账号登录</div>
        <div class="bottom">
            <p class="info">登录豆瓣账号后，可以进行订单查询，使用优惠券</p>
            <button class="login" @click="login">登录</button>
            <div class="register">没有豆瓣账号?<span  @click="register">注册</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods:{
            login(){
                this.$router.push({path:'/login',query:{type:'login'}})
            },

            register(){
                this.$router.push({path:'/login',query:{type:'register'}})
            }
        }
    }
</script>

<style scoped lang='scss'>
.wrap{
    font-size: 13px;
    .title{
        text-align: center;
        padding: 40px 0;
        border-bottom: 1px solid #9d9d9d;
        background-color: #f8f8fe;
    }
    .bottom{
        padding: 20px;
        text-align: center;
        border-bottom: 1px solid #9d9d9d;
        background-color: #fff;
        .info{
            color: #4a4a4a;
        }
        .login{
            padding: 10px 0;
            width: 335px;
            text-align: center;
            margin: 15px 0;
            color: #fff;
            font-size: 14px;
            border-radius: 5px;
            background-color: #68cb78;
            border: none;
            outline: none;
        }
        .register{
            color: #9d9d9d;
            span{
                color: #68cb78;
            }
            
        }
    }
}

</style>