<template>
        <div class="wrap">
            <p class="backHome" @click="backHome">首页</p>
            <div class="top_alert" @click="sel">
                {{type}}<i class="iconfont icon-icon-a-common_arrow- bottom_arrow"></i>
            </div>
        </div>
</template>

<script>
    export default {
        props:{
            type:{
                type:String,
                default:'',
            }
        },
        data() {
            return {
                
            }
        },
        methods:{
            backHome(){
                this.$router.push({path:'home'})
            },
            sel(){
                this.$emit('sel')
            }
        }
    }
</script>

<style scoped lang='scss'>
.wrap{
    padding: 10px;
    width: 100%;
    height: 40px;
    line-height: 20px;
    background: #fff;
    box-sizing: border-box;
    .backHome{
        display: inline-block;
        color: #aaa;
    }
    .top_alert{
        position: absolute;
        top: 10px;
        left: 50%;
        margin-left: -25px;
        color: #3ba94d;
    }
}
</style>