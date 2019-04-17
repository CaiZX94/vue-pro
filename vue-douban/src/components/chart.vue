<template>
    <div class="contianer"> 
        <div :id='id'></div>
    </div>
</template>

<script>
    import Highcharts from 'highcharts'
    import optionData from '@/chart-option/option.js'
    export default {
        data() {
            return {
                id:'myChart',
                optData:optionData.bar,
            }
        },
        mounted(){
            Highcharts.chart(this.id,this.optData)
        }
    }
</script>

<style scoped lang='scss'>
// Highcharts 图表的宽高是根据 DIV 容器container的宽高来设定的，
// 如果容器没有设定宽高，默认是 宽 400px， 高 400px，
// 另外设置容器的 min-width 属性可以让 highcharts 自适应宽度
.contianer{ 
    min-width: 300px;
    height: 250px;
}
</style>