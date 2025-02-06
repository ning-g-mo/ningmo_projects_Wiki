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
      { text: '项目', link: '/projects' },
      { text: '文档', link: '/docs' }
    ],

    sidebar: [
      {
        text: '项目',
        items: [
          { text: 'leaves基础互通优化包', link: '/projects/leaves/index' ,
             items: [
              { text: '介绍', link: '/projects/leaves/index' },
             ]
          }
        ]
          },
        { text: 'bellcommand', link: '/projects/bellcommand/index' },
        { text: 'geysermenu', link: '/projects/geysermenu/index' }
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
