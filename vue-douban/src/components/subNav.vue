<template>
    <div class="wrap">
        <ul class="navBar">
            <li v-for="(item,index) in nav.navList" 
                :key="index"
                :class="{first:index == 0}"
                @click="selNav">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return { 
                nav:{
                        type:'饮食',
                        navList:['全部','饮食1','饮食2','饮食3','饮食4','饮食5','饮食6','饮食7','饮食8','饮食9','饮食10']
                    },
                    // {
                    //     type:'配饰',
                    //     navList:['全部','配饰1','配饰2','配饰3','配饰4','配饰5','配饰6','配饰7','配饰8','配饰9','配饰10']
                    // },
            }
        },
        methods:{
            selNav(){
                
            }
        }
    }
</script>

<style scoped lang='scss'>
.wrap{
    overflow: hidden;
    .navBar{
        width: auto;
        height: 40px;
        white-space: nowrap;
        overflow-x: auto;
        background: #68CB78;
        -webkit-overflow-scrolling: touch;
        li{
            display: inline-block;
            padding: 0 15px;
            box-sizing: border-box;
            line-height: 35px;
            font-size: 14px;
            color: #333;
        }
        .first{
            color: #fff;
        }
    }
}

</style>