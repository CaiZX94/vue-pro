<template>
    <div class="wrap">
        <list :showCollect='showCollect' :list="proList"></list>
    </div>
</template>

<script>
    import Header from '@/components/header.vue'
    import list from '@/components/list/list.vue'
    export default {
        components:{
            Header,
            list
        },
        data() {
            return {
                showCollect:false,
                proList:[],
            }
        },
        created(){
            this.init()
        },
        methods:{
            init(){
                // 直接请求
                this.$http.post('/product').then(res => {
                    console.log(res.data);
                    this.proList = res.data;
                }).catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped lang='scss'>
.wrap{
    background: #F8F8FE;
}
</style>