<template>
    <div class="wrap">
        <div class="listItem" v-for="(item,index) in listItem" :key="index" @click="goDetail(item.id)">
            <collect v-if="showCollect"></collect>
            <img v-lazy="item.image" alt="" class="listPic">
            <p class="info">{{item.proInfo}}</p>
            <p class="price">￥{{item.price}} <del class="delPrice">{{item.delPrice}}</del></p>
        </div>
    </div>
</template>

<script>
    import collect from '@/components/collect'
import { setTimeout } from 'timers';
    export default {
        components:{
            collect,
        },
        props:{
            showCollect:{
                type:Boolean,
                default:true
            },
            listItem:{
                type:Array,
                default:()=>[]
            }
        },
        data() {
            return {
                list:[]
            }
        },
        created(){
            this.init();
        },
        methods:{
            init(){

            },

            goDetail(id){
                this.$router.push({path:'/detail',query:{id:id}})
            }
        }
    }
</script>

<style scoped lang='scss'>
.wrap{
    overflow: hidden;
    .listItem{
        position: relative;
        float: left;
        margin: 0 6px 10px;
        width: 172px;
        height: 242px;
        background: #fff;
        box-shadow: 1px 1px 8px -2px rgba(0, 0, 0, .3);
        .listPic{
            width: 100%;
            height: 187px;
            box-sizing: border-box;
        }
        .info{
            padding: 10px 0 10px 10px;
            font-size: 14px;
            color: #ccc;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .price{
            padding-left: 10px;
            font-size: 13px;
            color: #e17c72;
        }
        .delPrice{
            color: #ccc;
        }
    }
}

</style>