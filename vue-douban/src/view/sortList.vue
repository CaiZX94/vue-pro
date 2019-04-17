<template>
    <div class="wrap">
        <subHeader :type='type' @sel="sel"></subHeader>
        <subNav></subNav>
        <list :showCollect='showCollect'></list>
        <model :list='list' @select='select' @clickMask='clickMask' v-if="showModel"></model>
    </div>
</template>

<script>
    import subHeader from '@/components/subHeader'
    import model from '@/components/model'
    import subNav from '@/components/subNav'
    import list from '@/components/list/list.vue'
    export default {
        components:{
            subHeader,
            model,
            subNav,
            list
        },
        data() {
            return {
               list:[
                   {name:'饮食',val:'0',iscurrent:true},
                   {name:'配饰',val:'1',iscurrent:false},
                   {name:'鞋靴',val:'2',iscurrent:false},
                   {name:'美容护肤',val:'3',iscurrent:false},
                   {name:'家居',val:'4',iscurrent:false},
                   {name:'3C数码',val:'5',iscurrent:false},
                   {name:'情侣装',val:'6',iscurrent:false},
                   {name:'母婴儿童',val:'7',iscurrent:false},
                   {name:'内衣',val:'8',iscurrent:false},
                   {name:'运动户外',val:'9',iscurrent:false},
                   {name:'玩具',val:'10',iscurrent:false},
                   {name:'汽车用品',val:'11',iscurrent:false},
                   {name:'艺术品',val:'12',iscurrent:false},
                   {name:'图书',val:'13',iscurrent:false},
               ],
               type:"饮食",//分类类型
               showModel:false,
               showCollect:true,
            }
        },
        created() {
            this.init();
        },
        methods:{
            init(){
                this.type = this.$route.query.name;
                this.list.forEach(item => {
                    item.iscurrent = item.name ==  this.type? true : false;
                });
            },
            sel(){
                this.showModel = true;
            },
            select(ele){
                this.type = ele.name;
                this.list.forEach(item => {
                    item.iscurrent = item.name == ele.name? true : false;
                });
                this.showModel = false;
            },
            clickMask(){
                this.showModel = false;
            }
        }
    }
</script>

<style scoped>

</style>