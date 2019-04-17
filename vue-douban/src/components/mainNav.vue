<template>
    <div class="wrap">
        <div class="mainNav">
            <router-link to='home' class="navItem" active-class="navLight">首页</router-link>
            <router-link to='sort' class="navItem" active-class="navLight">分类</router-link>
            <router-link to='cart' class="navItem" active-class="navLight">购物车</router-link>
            <router-link to='my' class="navItem" active-class="navLight">我的</router-link>
        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
               
            }
        },
    }
</script>

<style scoped lang='scss'>
.mainNav{
    display: flex;
    width: 100%;
    height: 40px;
    background: #fff;
    border-bottom: 2px solid #68CB78;
    .navItem{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
    }
    .navLight{
        color: #68CB78;
    }
}
</style>