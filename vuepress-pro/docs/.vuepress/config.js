module.exports = {
  title: '个人主页', 
  description: '蔡泽欣的博客',
  head: [
      ['link', { rel: 'icon', href: '/img/logo.ico' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', // 最后更新时间
    search: true,// 开启搜索
    searchMaxSuggestions: 10,// 最大搜索个数
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    },
    nav: [
        { text: '主页', link: '/' },
        { text: '组件', link: '/components/' },
        { text: '博文',
          items: [ // 导航下拉选项
            { text: 'Android', link: '/android/' },
            { text: 'hybird', link: '/hybird/' },
            { text: 'Web', link: '/web/' }
          ] 
        },
        { text: '关于', link: '/about/' },
        { text: 'Github', link: 'https://www.github.com/CaiZX94' },
    ],
    sidebar: {
        '/components/': [
          {
            title: '开发指南',
            collapsable: true, // 是否伸缩
            children: [
                ['install','安装'],
                ['quickStart','快速上手'],
                ['international','国际化'],
                ['theme','自定义主题'],
            ]
          },
          {
            title: '组件',
            collapsable: false,
            children: [
                ['layout','Layout 布局'],
                ['container','Container 布局容器'],
                ['color','Color 色彩'],
                ['border','Border 边框'],
                ['icon','Icon 图标'],
                ['button','Button 按钮'],
                ['link','Link 文字链接'],
                ['radio','Radio 单选框'],
                ['checkbox','Checkbox 多选框'],
                ['input','Input 输入框'],
                ['inputNumber','InputNumber 计数器'],
                ['select','Select 选择器'],
            ]
          },
        ],
        '/android/': [
          "",
          "android1",
          "android2",
        ],

        "/hybird/":[
          "",
          "ios1",
          "ios2",
        ],
        
        "/web/":[
          "",
          "studyVuePress",
          "studyWebpack",
          "studyMarkDown",
        ],
    },
  },
  serviceWorker: true,
  ga: 'UA-120261845-1',
}