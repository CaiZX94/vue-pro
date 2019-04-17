import Mock from 'mockjs' // 引入mockjs
 
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

// 用于接受生成数据的数组
let data = [] 
let size = [
  '300x250', '250x250', '240x400', '336x280', 
  '180x150', '720x300', '468x60', '234x60', 
  '88x31', '120x90', '120x60', '120x240', 
  '125x125', '728x90', '160x600', '120x600', 
  '300x600'
] 

// 定义随机值
  let template = {
    'userId': Random.guid(),
    'name': Random.cname(), // 中午姓名
    'city':Random.city(true),
    'image': Random.image(Random.size, '#02adea', 'douban'), // Random.size表示将从size数据中任选一个数据
  }
  data.push(template)

// 根据数据模板生成模拟数数据
Mock.mock('/user', 'post', data)