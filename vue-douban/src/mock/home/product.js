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
for(let i = 0; i < 100; i ++) { // 可自定义生成的个数
  let template = {
    'id': Random.increment(), // 自增数字， 作为产品id
    'price': Random.integer(200, 300), // 生成100到300之间的整数
    'delPrice': Random.integer(350, 400), // 生成300到400之间的整数
    'proInfo':Random.cparagraph(2, 3), //生成2至5个句子的文本
    'image': Random.image(Random.size, '#02adea', 'douban'), // Random.size表示将从size数据中任选一个数据
  }
  data.push(template)
}

// 根据数据模板生成模拟数数据
Mock.mock('/product', 'post', data)