<template>
    <div class="wrap">
        <ul class="sortList">
            <li v-for="(item,index) in list" 
                :key="index" 
                class="sortList_item" 
                @click="goSort(item)"
                :class="{pink:item.bg == 'pink',blue:item.bg == 'blue',purple:item.bg == 'purple',sky:item.bg == 'sky',
                yellow:item.bg == 'yellow',grass:item.bg == 'grass',green:item.bg == 'green',red:item.bg == 'red'}">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list:[
                    {name:'饮食',bg:'pink'},
                    {name:'服装',bg:'blue'},
                    {name:'配饰',bg:'purple'},
                    {name:'包袋',bg:'sky'},
                    {name:'鞋靴',bg:'yellow'},
                    {name:'美容护肤',bg:'grass'},
                    {name:'家居',bg:'green'},
                    {name:'3C数码',bg:'yellow'},
                    {name:'母婴儿童',bg:'red'},
                    {name:'内衣',bg:'blue'},
                    {name:'运动户外',bg:'sky'},
                    {name:'玩具',bg:'pink'},
                    {name:'汽车用品',bg:'yellow'},
                    {name:'艺术品',bg:'purple'},
                    {name:'图书',bg:'grass'},
                ]
            }
        },
        methods:{
            goSort(item){
                this.$router.push({path:'/sortList',query:{name:item.name}})
            }
        }
    }
</script>

<style scoped lang='scss'>
.sortList{
    padding: 20px 10px;
    .sortList_item{
        float: left;
        margin: 4px 6px;
        width: 105px;
        height: 60px;
        color: #fff;
        text-align: center;
        line-height: 60px;
        border-radius: 5px;
    }
    .pink{
        background: #ffb2bb;
    }
    .blue{
        background: #89b7ec
    }
    .purple{
        background: #c2a0e0
    }
    .sky{
        background: #b2e6ff
    }
    .yellow{
        background: #e6e7a4
    }
    .grass{
        background: #b2ffc5
    }
    .green{
        background: #ffb2bb
    }
    .red{
        background: #ffb2bb
    }
}
</style>