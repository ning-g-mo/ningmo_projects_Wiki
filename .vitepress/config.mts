import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  title: "柠枺",
  description: "柠枺的项目及文档",
  themeConfig: {
    logo: '/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '项目', link: '/zh/projects' },
      { text: '文档', link: '/zh/docs' }
    ],

    sidebar: [
      {
        text: '项目',
        items: [
          { text: 'leaves基础互通优化包', link: '/zh/leaves/index' },
          { text: 'bellcommand', link: '/zh/bellcommand/index' },
          { text: 'geysermenu', link: '/zh/geysermenu/index' }
        ]
      }
    ],
    footer: {
      message: 'Copyright © 2025-present 柠枺',
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">新ICP备2024015133号-2</a>'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
