<template>
    <div class="wrap">
        <div class="model">
            <div class="mask" @click="clickMask"></div>
            <ul class="modelList">
                <li v-for="(item,index) in list" 
                    :key="index"
                    :class="{current: item.iscurrent}"
                    @click="sel(item)">
                        {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            list:{
                type:Array,
                default:()=>[]
            },
        },
        data() {
            return {
               
            }
        },
        methods:{
            sel(item){
                this.$emit('select',item);
            },
            clickMask(){
                this.$emit('clickMask',);
            }

        }
    }
</script>

<style scoped lang='scss'>
.model{
    .mask{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
    }
    .modelList{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -160px;
        margin-left: -125px;
        overflow-y: scroll;
        width: 250px;
        height: 320px;
        background: #fff;
        border-radius: 5px;
        li{
            width: 100%;
            height: 40px;
            text-align: center;
            line-height: 40px;
            color: #333;
            font-size: 15px;
        }
        .current{
            background: #eee;
        }
    }
}

</style>