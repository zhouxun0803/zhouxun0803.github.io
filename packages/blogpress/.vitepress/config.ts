import { defineConfig } from 'vitepress'
import { La51Plugin } from 'vitepress-plugin-51la'
import { blogTheme } from './blog-theme'

export default defineConfig({
  extends: blogTheme,
  // base: '',
  metaChunk: true,
  srcExclude: ['CHANGELOG.md', 'redirect-tag.md'],
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'http://devzx.top/',
  },
  lang: 'zh-cn',
  title: '勋染',
  description:
    '勋染的个人博客，记录随笔与学习笔记，大前端相关的知识，高频面试题，个人面经等',
  head: [
    // <meta name="baidu-site-verification" content="codeva-b08avp82Uj" />
    ['meta', { name: 'baidu-site-verification', content: 'codeva-b08avp82Uj' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/png' }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/favicon.ico',
        type: 'image/png',
        sizes: '16x16'
      }
    ],
    ['meta', { name: 'author', content: '勋染' }],
    ['link', { rel: 'mask-icon', href: '/favicon.ico', color: '#ffffff' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/favicon.ico', sizes: '180x180' }
    ],
    // SalesMartly 脚本 - 插入到 </body> 之前
    [
      'script',
      {
        src: 'https://plugin-code.salesmartly.com/js/project_620363_640115_1770022967.js',
        async: 'true'
      }
    ],
  ],
  vite: {
    plugins: [
      La51Plugin({
        id: 'Jgmg5avjAUvoyePS',
        ck: 'Jgmg5avjAUvoyePS',
        importMode: 'async'
      })
    ]
  },
  vue: {
    template: {
      compilerOptions: {
        // https://github.com/vuejs/vitepress/discussions/468
        isCustomElement: (tag) => {
          return ['center'].includes(tag.toLocaleLowerCase())
        }
      }
    }
  },
  lastUpdated: true,
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: 'F919JCK8WY',
    //     apiKey: '3eca209ad24bdfc26db63382dd5e4490',
    //     indexName: 'sugarat_top',
    //     placeholder: '请输入要搜索的内容...'
    //   }
    // },
    lastUpdatedText: '上次更新于',
    logo: '/logo.png',
    // editLink: {
    //   pattern:
    //     'https://github.com/zhouxun0803/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      {
        text: '关于我',
        link: '/aboutme'
      },
      {
        text: 'AI智能体',
        items: [
          { text: 'coze', link: '/ai/coze/' },
          { text: 'stable-diffusion', link: '/ai/stable-diffusion/' },
          { text: '豆包', link: '/ai/doubao/' },
          { text: '百度', link: '/ai/baidu/' },
        ]
      },
      {
        text: '技术笔记',
        items: [
          { text: '技术教程', link: '/technology/learn/' },
          { text: '模板工程', link: '/technology/tpl/' },
          { text: '源码学习', link: '/technology/source/' },
          { text: '技术概念', link: '/technology/theory/' },
          { text: '个人作品', link: '/technology/works/' },
          { text: '学习笔记', link: '/technology/study/' },
          // { text: 'VR技术', link: '/technology/vr/' },
          { text: 'threejs', link: '/technology/threejs/' }
        ]
      },
      {
        text: '计算机基础',
        items: [
          { text: '算法与数据结构', link: '/computerBase/algorithm/' },
          { text: '操作系统', link: '/computerBase/os/' },
          { text: '计算机网络', link: '/computerBase/Internet/' },
          { text: '设计模式', link: '/computerBase/design/' },
          { text: '剑指offer', link: '/computerBase/offer/' },
          // { text: '力扣', link: '/computerBase/leetcode/' }
        ]
      },
      {
        text: '大前端',
        items: [
          { text: 'javascript', link: '/bigWeb/js/' },
          { text: 'vue', link: '/bigWeb/vue/' },
          { text: 'html', link: '/bigWeb/html/' },
          { text: 'css', link: '/bigWeb/css/' },
          { text: '🌏浏览器专题', link: '/bigWeb/browser/' },
          { text: 'Web性能优化', link: '/bigWeb/performance/' },
          { text: 'regexp', link: '/bigWeb/regexp/' },
          { text: 'node', link: '/bigWeb/node/' }
        ]
      },
      {
        text: '面试',
        items: [
          { text: '心得总结', link: '/offer/experience/' },
          { text: '校招考点汇总', link: '/offer/campus/' },
          { text: '面经汇总', link: '/offer/sum-interview/' },
          { text: '复习自查', link: '/offer/review/' },
          { text: '问解', link: '/interview/problem/' },
          { text: 'javascript', link: '/interview/js/' },
          { text: 'css', link: '/interview/css/' },
          { text: '手撕代码', link: '/interview/code/' },
          { text: '性能优化', link: '/interview/performance/' },
          // { text: "网络", link: "/interview/internet/" },
          // { text: '操作系统', link: '/interview/os/' },
          // { text: '设计模式', link: '/interview/design/' },
          { text: '综合问题', link: '/interview/other/' },
          // { text: '面经汇总', link: '/offer/sum-interview/' },
          { text: '小程序', link: '/interview/mini/' }
          // { text: '面经', link: '/interview/experience/' }
        ]
      },
      {
        text: '手撕代码',
        items: [
          { text: '数据结构与算法', link: '/coding/algorithm/' },
          { text: 'javascript', link: '/coding/js/' },
          { text: 'css', link: '/coding/css/' }
        ]
      },
      {
        text: '个人站点',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/zhouxun0803'
          },
          {
            text: '博客园',
            link: 'https://www.cnblogs.com/devzx'
          },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/1852048077502077'
          }
          // {
          //   text: "GitBook-blog",
          //   link: "https://sugar-at.gitbook.io/blog-article/",
          //   icon: "reco-blog",
          // },
          // {
          //   text: "GitBook-ES6",
          //   link: "https://sugar-js.gitbook.io/-1/",
          //   icon: "reco-document",
          // },
        ]
      },
      // {
      //   text: '线上作品',
      //   items: [
      //     {
      //       text: '轻取(文件收集)',
      //       link: 'https://ep2.sugarat.top'
      //     },
      //     {
      //       text: '个人图床',
      //       link: 'https://imgbed.sugarat.top'
      //     },
      //     {
      //       text: '考勤小程序',
      //       link: 'https://hdkq.sugarat.top/'
      //     },
      //     {
      //       text: '时光恋人',
      //       link: 'https://lover.sugarat.top'
      //     },
      //     {
      //       text: '在线简历生成',
      //       link: 'https://resume.sugarat.top/'
      //     }
      //   ]
      // }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhouxun0803' },
      {
        icon: 'x',
        link: 'https://x.com/Mr_XiaoZou'
      }
    ]
  }
})
