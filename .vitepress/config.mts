import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  title: "柠枺",
  description: "柠枺的项目及文档",
  sitemap: {
    hostname: 'https://ningmo.fun'
  },
  themeConfig: {
    logo: '/logo.png',
    editLink: {
      pattern: 'https://github.com/nimg-g-mo/nimgmo_projects_Wiki:path',
      text: '在 GitHub 上编辑此页'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '项目',
        items: [
          { text: 'leaves基础互通优化包', link: '/projects/leaves/index' },
          { text: 'bellcommand', link: '/projects/bellcommand/index' },
          { text: 'geysermenu', link: '/projects/geysermenu/index' }
        ]
      },
      { text: '文档', link: '/docs' }
    ],

    sidebar: [
      {
        text: '项目',
        collapsed: false,
        items: [
          { text: 'leaves基础互通优化包',
            collapsed: false,
            items: [
              { text: '介绍', link: '/projects/leaves/index' },
              { text: '安装', link: '/projects/leaves/install' },
              { text: '常用命令', link: '/projects/leaves/commands' },
              { text: 'tab(侧边栏)配置', link: '/projects/leaves/tab' },
              { text: 'authme登录插件配置', link: '/projects/leaves/authme' },
             ]
            },
          { text: 'bellcommand', link: '/projects/bellcommand/index' },
          { text: 'geysermenu',
            collapsed: false,
            items: [
              { text: '介绍', link: '/projects/geysermenu/index' },
              { text: '快速入门', link: '/projects/geysermenu/getting-started' },
              { text: '配置详解', link: '/projects/geysermenu/configuration' },
              { text: '图标系统', link: '/projects/geysermenu/icons' },
              { text: '命令与权限', link: '/projects/geysermenu/commands-permissions' },
              { text: '变量支持', link: '/projects/geysermenu/placeholders' },
              ]
           }
        ]
      },
    ],
    footer: {
      message: 'Copyright © 2025-present 柠枺',
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">新ICP备2024015133号-2</a>'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ning-g-mo/ningmo_projects_Wiki' }
    ]
  }
})
