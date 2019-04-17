<template>
    <div class="wrap">
        <div class="header">
            <p class="logo">豆瓣集市</p>
            <i class="iconfont icon-ic_a-common_search search" @click="search"></i>
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
            search(){
                this.$emit('search');
            }
        }
    }
</script>

<style scoped lang='scss'>
.header{
    position: relative;
    width: 100%;
    height: 50px;
    background: #68CB78;
    color: #fff;
    .logo{
        padding: 15px;
        font-size: 20px;
    }
    .search{
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 23px;
        cursor: pointer;
    }
}
</style>