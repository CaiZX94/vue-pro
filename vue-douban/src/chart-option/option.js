module.exports = {
    bar: {
        chart: {
            type: 'line'//图表的类型，默认是折线图（line）
        },
        credits: { //去掉地址
            enabled: false
        },
        title: {
            text: '我的第一个图表' //图表标题
        },
        subtitle:{
            text:'我是副标题',
            align:'right',//水平对齐方式
        },
        labels:{
            enabled:false,
        },
        // colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5'],
        xAxis: {
            categories: ['1号', '2号', '3号', '3号', '3号','4号', '4号','5号', '5号'] //x轴分组
        },
        yAxis: {
            title: {
                text: '最近七天', //y轴的标题
            },
            labels: {
                formatter:function(){ //自定义y坐标轴标签格式化 ,this.value 指的是 series.data的数据
                  if(this.value <=100) { 
                    return "第一等级("+this.value+")";
                  }else if(this.value >100 && this.value <=300) { 
                    return "第二等级("+this.value+")"; 
                  }else { 
                    return "第三等级("+this.value+")";
                  }
                }
              }
        },
        plotOptions: { //标示线
            column: {
                colorByPoint: true
            },
        },
        series: [{ //数据列
            name: '小明',
            data: [{
                y: 100,
                color: "red"
            }, 500, 400, 500, 200] //数据
        }]
    }
}