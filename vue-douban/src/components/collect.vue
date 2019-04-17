<template>
    <div class="wrap">
        <i class="iconfont icon-ic_common_score_off collect" v-show="!isCollect" @click="collect"></i>
        <i class="iconfont icon-rate-yixuan is_collect" v-show="isCollect" @click="collect"></i>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isCollect:false,
            }
        },
        methods:{
            collect(){
                this.isCollect = !this.isCollect;
            }
        }
    }
</script>

<style scoped lang='scss'>
.collect,.is_collect{
    position: absolute;
    top: 7px;
    right: 7px;
    font-size: 20px;
 }
.collect{
    color: #fff;
 }
.is_collect{
    color: #FFDD5F;
}
</style>