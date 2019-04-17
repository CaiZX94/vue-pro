// 引入各个模块的mock文件
require('./home/product');
require('./my/user')


// 在这里可以做一些通用的配置
import Mock from 'mockjs'

Mock.setup({
  timeout:0-300, // 设置所有ajax请求的超时时间，模拟网络传输耗时
})

