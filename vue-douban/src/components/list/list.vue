<template>
    <div class="list">
        <listItem :showCollect='showCollect' :listItem="list"></listItem>
    </div>
</template>

<script>
    import listItem from '@/components/list/listItem';
    export default {
        components:{
            listItem,
        },
        props:{
            showCollect:{
                type:Boolean,
                default:true
            },
            list:{
                type:Array,
                default:()=>[]
            }
        },
        data() {
            return {

            }
        },
    }
</script>

<style scoped lang='scss'>
.list{
    margin-top: 10px;
}
</style>