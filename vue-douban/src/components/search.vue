<template>
    <div class="wrap">
        <div class="searchBar">
            <input type="text" class="searchInput">
            <i class="iconfont icon-ic_a-common_search search"></i>
        </div>
        <div class="mask" @click="closeSearchBar"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               
            }
        },
        methods:{
            closeSearchBar(){
                this.$emit('closeSearchBar');
            }
        }
    }
</script>

<style scoped lang='scss'>
.wrap{
    .searchBar{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 70px;
        background: #68cb78;
        text-align: center;
        line-height: 70px;
        .searchInput{
            display: inline-block;
            padding: 0 35px 0 10px;
            width: 315px;
            height: 32px;
            border: 1px solid #fff;
            border-radius: 50px;
            background: transparent;
            box-sizing: border-box;
            outline: none;
            color: #fff;
        }
        .search{
            position: absolute;
            top: 2px;
            right: 40px;
            color: #fff;
            font-size: 20px;
            font-weight: bold;
        }
    }
    .mask{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
    }
}
</style>