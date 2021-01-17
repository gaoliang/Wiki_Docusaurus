module.exports = {
  docs: [
    'Home',
    {
      type: 'category',
      label: '电路设计',
      collapsed: true,
      items: [
        'AirForce-充满灵性的电机驱动模块',
        '如何设计一款单片机的最小系统',
        'SwiftCtrl-蓝牙手柄',
        'TinyDVR-小巧身材，满载动力',
        'ZenDriver-高性能的电机驱动',
        'PCB布线规范',
        'PCB元件布局规范',
        'PCB线宽与电流的关系',
        '函数思想在电路设计中的应用',
        '基本元器件选型',
        '电源的设计',
        'AD小技巧整理',
        'AD入门系列一：环境搭建',
        'AD入门系列二：基础知识',
        'AD入门系列三：原理图绘制',
        'AD入门系列四：PCB绘制',
        'AD入门系列五：库文件绘制',
        '自制CMSIS-DAP',
        'PCB名片设计',
        '常用的防反接电路',
        '什么是金手指',
        '电路设计中常用的接口及关键点',
        'AD使用Git的注意事项',
        
      ],
    },

    {
      type: 'category',
      label: '队务管理',
      collapsed: true,
      items: [
        //'团队公开知识库的搭建',
        '团队知识库的搭建-理论',
        '动员大会-经验总结',
        '换届大会-经验总结',
        '破冰活动-经验总结',
        '出展活动-经验总结',
      ],
    },
    {
      type: 'category',
      label: '嵌入式开发',
      collapsed: true,
      items: [
        'HAL系列教程1—GPIO',
        'PlatformIO—一站式嵌入式开发工具',
        'PlatformIO搭配CubeMX食用',
        'CubeMX的一些坑',
        'STM32的启动模式',
        'KeilMDK配置指南',
        //'STM32模块设计-LED',
        '大疆N3飞控-参考资料',
        'ATTiny85调试记录',
        'T-Clock桌上小钟',
        //'小车游华广-比赛',
        //'麦昆小车-测评',
        '麦轮小车',
        '一个舵机的自我修养',
      ],
    },

    {
      type: 'category',
      label: '高效工作',
      collapsed: true,
      items: [
        '为什么你需要一个知识库',
        'Docusaurus极简部署指南',
        'Hugo极简搭建指南',
        '如何在iPad上运行VSCode',
        '使用Markdown进行高效写作',
        '团队知识库搭建记录-DokuWiki',
        '个人知识库极简搭建指南-VuePress',
        '用树莓派架设云打印服务器',
        '文章排版规范',
        '基于docsify搭建个人Wiki',
        '用Graphviz绘制关系图',
        '博客转至GitBook',
        '浅谈Bitcron博客平台',
        'RSS-高效率的阅读方式',
        '把回忆放心交给GooglePhotos',
        '构建知识管理系统',
        '回归博客',
        'VSCode生产力指南-环境配置',
        'VSCode生产力指南-JupyterNotebook',
        '在浏览器上运行VSCode（旧）',
        '如何配一台电脑',
        '用reveal.js制作幻灯片',
      ],
    },
    {
      type: 'category',
      label: '软件开发',
      collapsed: true,
      items: [
        'CSS学习笔记',
        'HTML学习笔记',
        'JavaScript学习笔记',
        'Docker简易指南',
        '更优雅的打开方式-DockerCompose'
        '自适应网页设计',
        '前端开发-环境搭建',
        'BookJourney-二手书商城小程序',
        'Git学习笔记',
      ],
    },

    
    {
      type: 'category',
      label: '产品经理',
      collapsed: true,
      items: [
        '产品经理的日常',
        '中台的概念',
        '画图基础',
        '智能硬件产品经理的技术要求',
        '如何撰写一份BRD',
        '软件开发中的注意事项',
        '专业与分工',
        '关于复盘',
        //'智能硬件产品开发流程',
      ],
    },
    {
      type: 'category',
      label: '生活经历',
      collapsed: true,
      items: [
        //'书摘与读书笔记',
        //'华广爬楼指北',
        '读《黑客与画家》',
        '英语六级-备考',
        '音乐相关',
        '谈谈未来的职业选择',
        'THEHack2019黑客马拉松',
        'Hack.init()黑客马拉松',
        '焊接大赛培训及总结',
        //'科技X的访谈',
        '为什么要「站在巨人的肩膀上」',
        '如何不被AI取代',
        'Windows个人配置',
        '一些观点',

      ],
    },

    {
      type: 'category',
      label: '小技巧',
      collapsed: true,
      items: [
        
        '如何为公众号文章增加特效',
        '如何在Linux下使用微信',
        '如何打印出手写效果的文字',
        '如何从乐曲中分离音轨',
        '如何高效制作幻灯片',
        '卡片式写作',
        'npm和Yarn换源加速国内访问',
        'Vue.js小技巧',
        '正则表达式实用语句',
        'LaTeX希腊字母对照表',
        'GitHub改Host',
        'Linux用户操作',
        'MSI主板开启虚拟化的方法',
        'Git配置代理',
        '删除GitHub仓库中某个文件夹',
        '定制SublimeText3',
        '如何保存易逝的文字',
        //'Excel批量激活链接并转为图片',
        '用Vercel加速Pages服务',
        'Doxygen注释规范',
        'AltiumDesigner安装库文件',
        'CentOS配置OhMyZsh',
        '如何快速制作一个启动盘',
        '使用VSCode进行远程开发',
        'Node.js和npm的安装与卸载（MacOS）',
        //'Bash基础',
        //'Linux基础（CentOS）',
        //'从零搭建视觉开发环境（Docker-Linux）',
      ],
    },

  ],
};

//草稿：
//'Python学习笔记',
//'STM32麦轮小车',
//'RM校内赛-前期策划',
//'报告书都要写些什么？',
//'无人驾驶比赛',
//'硬件模块',
//'命令行基本操作'
//'极简面包-烘培',
