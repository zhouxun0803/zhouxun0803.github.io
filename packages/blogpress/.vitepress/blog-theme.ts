import { getThemeConfig } from '@sugarat/theme/node'
import type { Theme } from '@sugarat/theme'

const baseUrl = 'https://devzx.top'
const weekly = `${baseUrl}/weekly`
const RSSWeekly: Theme.RSSOptions = {
  title: '视野修炼 - 技术周刊',
  baseUrl,
  description: '每周会精选出一些 优质&有趣 的内容做推送（大前端为主），包含但不限于 优质文章，开源库，工具网站，有意思的知识',
  id: weekly,
  link: weekly,
  language: 'zh-cn',
  filter(value) {
    return value.url.startsWith('/weekly/') && !value.url.endsWith('/weekly/')
  },
  image: 'https://img.cdn.sugarat.top/mdImg/MTcwNTIwMDEzNjM5Mw==705200136393',
  favicon: 'https://devzx.top/favicon.ico',
  copyright: 'Copyright (c) 2018-present, 勋染',
  url: `${baseUrl}/weekly.rss`,
  icon: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5155" width="200" height="200"><title>视野修炼周刊 RSS 订阅</title><path d="M831.8 128l-640 0c-35.3 0-64 28.7-64 64l0 640c0 35.3 28.7 64 64 64l640 0c35.3 0 64-28.7 64-64L895.8 192C895.8 156.7 867.1 128 831.8 128zM707.4 193l0 185.8L673 344.3c-6.4-6.4-14.9-9.5-23.3-9.4-8.4-0.2-16.9 2.9-23.3 9.4L592 378.8 592 193 707.4 193zM831.8 833.1l-640 0L191.8 193 528 193l0 263c0 0.5 0 1.1 0 1.6 0 0.3 0 0.5 0.1 0.7 0 0.3 0 0.5 0.1 0.8 0 0.3 0.1 0.6 0.1 0.9 0 0.2 0 0.4 0.1 0.6 0 0.3 0.1 0.7 0.2 1 0 0.2 0.1 0.3 0.1 0.5 0.1 0.3 0.1 0.7 0.2 1 0 0.2 0.1 0.3 0.1 0.5 0.1 0.3 0.2 0.7 0.3 1 0.1 0.2 0.1 0.4 0.2 0.5 0.1 0.3 0.2 0.6 0.3 0.9 0.1 0.2 0.1 0.4 0.2 0.6 0.1 0.3 0.2 0.5 0.3 0.8 0.1 0.2 0.2 0.5 0.3 0.7 0.1 0.2 0.2 0.5 0.3 0.7 0.1 0.3 0.2 0.5 0.3 0.8 0.1 0.2 0.2 0.4 0.3 0.6 0.1 0.3 0.3 0.6 0.4 0.8 0.1 0.2 0.2 0.3 0.3 0.5 0.2 0.3 0.3 0.6 0.5 0.9 0.1 0.2 0.2 0.3 0.3 0.4 0.2 0.3 0.4 0.6 0.6 0.9 0.1 0.1 0.2 0.3 0.3 0.4 0.2 0.3 0.4 0.6 0.6 0.8 0.1 0.2 0.2 0.3 0.4 0.5 0.2 0.2 0.4 0.5 0.6 0.7 0.2 0.2 0.4 0.4 0.5 0.6 0.2 0.2 0.3 0.4 0.5 0.6 0.7 0.8 1.5 1.5 2.2 2.2 0.2 0.2 0.4 0.3 0.6 0.5 0.2 0.2 0.4 0.4 0.6 0.5 0.2 0.2 0.5 0.4 0.7 0.6 0.2 0.1 0.3 0.3 0.5 0.4 0.3 0.2 0.6 0.4 0.8 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.3 0.2 0.6 0.4 0.9 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.3 0.2 0.6 0.3 0.9 0.5 0.2 0.1 0.3 0.2 0.5 0.3 0.3 0.1 0.6 0.3 0.8 0.4 0.2 0.1 0.4 0.2 0.6 0.3 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.5 0.2 0.7 0.3 0.2 0.1 0.5 0.2 0.7 0.3 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.6 0.2 0.9 0.3 0.2 0.1 0.4 0.1 0.5 0.2 0.3 0.1 0.6 0.2 1 0.3 0.2 0 0.3 0.1 0.5 0.1 0.3 0.1 0.7 0.2 1 0.2 0.2 0 0.4 0.1 0.5 0.1 0.3 0.1 0.7 0.1 1 0.2 0.2 0 0.4 0.1 0.6 0.1 0.3 0 0.6 0.1 0.9 0.1 0.3 0 0.5 0 0.8 0.1 0.2 0 0.5 0 0.7 0.1 0.5 0 1.1 0 1.6 0 0 0 0 0 0 0l0 0c0.5 0 1.1 0 1.6 0 0.3 0 0.5 0 0.7-0.1 0.3 0 0.5 0 0.8-0.1 0.3 0 0.6-0.1 0.9-0.1 0.2 0 0.4 0 0.6-0.1 0.3 0 0.7-0.1 1-0.2 0.2 0 0.4-0.1 0.5-0.1 0.3-0.1 0.7-0.1 1-0.2 0.2 0 0.3-0.1 0.5-0.1 0.3-0.1 0.6-0.2 1-0.3 0.2-0.1 0.4-0.1 0.5-0.2 0.3-0.1 0.6-0.2 0.9-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.5-0.2 0.7-0.3 0.2-0.1 0.5-0.2 0.7-0.3 0.3-0.1 0.5-0.2 0.8-0.4 0.2-0.1 0.4-0.2 0.6-0.3 0.3-0.1 0.6-0.3 0.8-0.4 0.2-0.1 0.3-0.2 0.5-0.3 0.3-0.2 0.6-0.3 0.9-0.5 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.6-0.4 0.9-0.6 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.6-0.4 0.8-0.6 0.2-0.1 0.3-0.2 0.5-0.4 0.2-0.2 0.5-0.4 0.7-0.6 0.2-0.2 0.4-0.3 0.6-0.5 0.2-0.2 0.4-0.3 0.6-0.5 0.4-0.4 0.8-0.7 1.1-1.1l67.1-67.1 67.1 67.1c0 0 0 0 0 0 0.4 0.4 0.7 0.7 1.1 1.1 0.2 0.2 0.4 0.3 0.6 0.5 0.2 0.2 0.4 0.4 0.6 0.5 0.2 0.2 0.5 0.4 0.7 0.6 0.2 0.1 0.3 0.3 0.5 0.4 0.3 0.2 0.6 0.4 0.8 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.3 0.2 0.6 0.4 0.9 0.6 0.1 0.1 0.3 0.2 0.4 0.3 0.3 0.2 0.6 0.3 0.9 0.5 0.2 0.1 0.3 0.2 0.5 0.3 0.3 0.1 0.6 0.3 0.8 0.4 0.2 0.1 0.4 0.2 0.6 0.3 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.5 0.2 0.7 0.3 0.2 0.1 0.5 0.2 0.7 0.3 0.3 0.1 0.5 0.2 0.8 0.3 0.2 0.1 0.4 0.1 0.6 0.2 0.3 0.1 0.6 0.2 0.9 0.3 0.2 0.1 0.4 0.1 0.5 0.2 0.3 0.1 0.6 0.2 1 0.3 0.2 0 0.3 0.1 0.5 0.1 0.3 0.1 0.7 0.2 1 0.2 0.2 0 0.4 0.1 0.5 0.1 0.3 0.1 0.7 0.1 1 0.2 0.2 0 0.4 0.1 0.6 0.1 0.3 0 0.6 0.1 0.9 0.1 0.3 0 0.5 0 0.8 0.1 0.2 0 0.5 0 0.7 0.1 1.1 0.1 2.1 0.1 3.2 0 0.3 0 0.5 0 0.7-0.1 0.3 0 0.5 0 0.8-0.1 0.3 0 0.6-0.1 0.9-0.1 0.2 0 0.4 0 0.6-0.1 0.3 0 0.7-0.1 1-0.2 0.2 0 0.4-0.1 0.5-0.1 0.3-0.1 0.7-0.1 1-0.2 0.2 0 0.3-0.1 0.5-0.1 0.3-0.1 0.6-0.2 1-0.3 0.2-0.1 0.4-0.1 0.5-0.2 0.3-0.1 0.6-0.2 0.9-0.3 0.2-0.1 0.4-0.1 0.6-0.2 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.5-0.2 0.7-0.3 0.2-0.1 0.5-0.2 0.7-0.3 0.3-0.1 0.5-0.2 0.8-0.3 0.2-0.1 0.4-0.2 0.6-0.3 0.3-0.1 0.6-0.3 0.8-0.4 0.2-0.1 0.3-0.2 0.5-0.3 0.3-0.2 0.6-0.3 0.9-0.5 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.6-0.4 0.9-0.6 0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.6-0.4 0.8-0.6 0.2-0.1 0.3-0.2 0.5-0.4 0.2-0.2 0.5-0.4 0.7-0.6 0.2-0.2 0.4-0.3 0.6-0.5 0.2-0.2 0.4-0.3 0.6-0.5 0.8-0.7 1.5-1.5 2.2-2.2 0.2-0.2 0.3-0.4 0.5-0.6 0.2-0.2 0.4-0.4 0.5-0.6 0.2-0.2 0.4-0.5 0.6-0.7 0.1-0.2 0.2-0.3 0.4-0.5 0.2-0.3 0.4-0.6 0.6-0.8 0.1-0.1 0.2-0.3 0.3-0.4 0.2-0.3 0.4-0.6 0.6-0.9 0.1-0.1 0.2-0.3 0.3-0.4 0.2-0.3 0.3-0.6 0.5-0.9 0.1-0.2 0.2-0.3 0.3-0.5 0.1-0.3 0.3-0.6 0.4-0.8 0.1-0.2 0.2-0.4 0.3-0.6 0.1-0.3 0.2-0.5 0.4-0.8 0.1-0.2 0.2-0.5 0.3-0.7 0.1-0.2 0.2-0.5 0.3-0.7 0.1-0.3 0.2-0.5 0.3-0.8 0.1-0.2 0.1-0.4 0.2-0.6 0.1-0.3 0.2-0.6 0.3-0.9 0.1-0.2 0.1-0.4 0.2-0.5 0.1-0.3 0.2-0.6 0.3-1 0-0.2 0.1-0.3 0.1-0.5 0.1-0.3 0.2-0.7 0.2-1 0-0.2 0.1-0.4 0.1-0.5 0.1-0.3 0.1-0.7 0.2-1 0-0.2 0.1-0.4 0.1-0.6 0-0.3 0.1-0.6 0.1-0.9 0-0.3 0-0.5 0.1-0.8 0-0.2 0-0.5 0.1-0.7 0-0.5 0-1.1 0-1.6L771.1 193l60.3 0L831.4 833.1z" p-id="5156"></path><path d="M468.7 416c0 17.7-14.3 32-32 32l-148 0c-17.7 0-32-14.3-32-32l0 0c0-17.7 14.3-32 32-32l148 0C454.4 384 468.7 398.3 468.7 416L468.7 416z" p-id="5157"></path><path d="M772.3 565c0 17.7-14.3 32-32 32L291.3 597c-17.7 0-32-14.3-32-32l0 0c0-17.7 14.3-32 32-32l449.1 0C758 533 772.3 547.3 772.3 565L772.3 565z" p-id="5158"></path><path d="M771.4 702c0 17.7-14.3 32-32 32L291.3 734c-17.7 0-32-14.3-32-32l0 0c0-17.7 14.3-32 32-32l448.2 0C757.1 670 771.4 684.4 771.4 702L771.4 702z" p-id="5159"></path></svg>',
  ariaLabel: '视野修炼周刊RSS订阅',
  filename: 'weekly.rss',
}
const RSS: Theme.RSSOptions = {
  title: '勋染',
  baseUrl,
  description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
  id: baseUrl,
  link: baseUrl,
  language: 'zh-cn',
  image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030~fmt.webp',
  favicon: 'https://devzx.top/favicon.ico',
  copyright: 'Copyright (c) 2018-present, 勋染',
  url: `${baseUrl}/feed.rss`,
  filter(value) {
    return !value.url.endsWith('/weekly/') && !value.url.endsWith('/case/bad/')
  },
  /**
   * 最近100篇，避免太大影响解析
   */
  limit: 100
}

export const blogTheme = getThemeConfig({
  tabs: false,
  mermaid: false,
  timeline: false,
  imageStyle: {
    coverPreview: [
      // 七牛云
      {
        rule: '//img.cdn.sugarat.top',
        suffix: '~cover.webp'
      },
      // 又拍云CDN
      {
        rule: '//cdn.upyun.sugarat.top',
        suffix: '-cover'
      }
    ]
  },
  themeColor: 'el-blue',
  RSS: [RSS, RSSWeekly],
  author: '勋染',
  comment: {
    repo: 'ATQQ/sugar-blog',
    repoId: 'MDEwOlJlcG9zaXRvcnkyNDEyNDUyOTk',
    category: 'Announcements',
    categoryId: 'DIC_kwDODmEcc84COVc6',
    inputPosition: 'top'
  },
  oml2d: {
    mobileDisplay: true,
    models: [
      {
        path: 'https://oml2d-models.sugarat.top/Senko_Normals/senko.model3.json',
      },
      {
        path: 'https://oml2d-models.sugarat.top/mai/model.json',
      }
    ],
  },
  popover: {
    title: '公告',
    body: [
      { type: 'text', content: '👇公众号👇---👇 微信 👇' },
      {
        type: 'image',
        src: '/fmt-code.png',
        alt: '勋染微信二维码'
      },
      {
        type: 'text',
        content: '欢迎大家私信&加群交流'
      },
      {
        type: 'button',
        content: '关于作者',
        link: '/aboutme.html'
      },
      {
        type: 'button',
        content: '加群交流',
        props: {
          type: 'success'
        },
        link: '/group.html',
      }
    ],
    duration: -1,
    twinkle: true
  },
  friend: {
    list: [
      {
        nickname: '技术茶馆',
        url: 'https://teazg.top/',
        avatar: 'https://teazg.top/index_logo.png',
        des: '张工的技术茶馆，分享技术札记、实战经验、源码剖析与效率工具'
      },
      {
        url: 'https://relaxing.top/',
        nickname: '放',
        avatar: 'https://relaxing.top/logo.png',
        des: '放的博客'
      },
      {
        nickname: '七仔的博客',
        des: '记录自己在写程序过程中的发现、问题、成果',
        url: 'https://www.baby7blog.com',
        avatar: 'https://www.baby7blog.com/favicon.ico'
      },
      {
        nickname: '茂茂物语',
        des: '茂茂的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
        url: 'https://notes.fe-mm.com',
        avatar: 'https://notes.fe-mm.com/logo.png'
      },
      {
        nickname: '李年糕',
        des: '佛系的打工人',
        avatar: 'https://cdn.upyun.sugarat.top/mdImg/sugar/617be739258b761b7dfed4fa0869326c',
        url: 'https://rimochiko.github.io/'
      },
      {
        nickname: '冴羽',
        des: '冴羽的博客',
        avatar:
          'https://cdn.upyun.sugarat.top/avatar/blog/mqyqingfeng.png',
        url: 'https://yayujs.com/'
      },
      {
        nickname: 'Linbudu',
        des: '未来的不可知，是前进的原动力',
        avatar:
          'https://cdn.upyun.sugarat.top/avatar/blog/linbudu.jfif',
        url: 'https://linbudu.top/'
      },
      {
        nickname: '小九',
        des: '日益努力，而后风生水起',
        avatar: 'https://cdn.upyun.sugarat.top/avatar/blog/jiangly.png',
        url: 'https://jiangly.com/'
      },
      {
        nickname: '花喵电台      ',
        des: '曹豪侠和余湾湾还有两只猫的生活记录~',
        avatar:
          'https://cdn.upyun.sugarat.top/avatar/blog/fmcat.jpeg',
        url: 'https://www.fmcat.top'
      },
      {
        nickname: '张成威的网络日志',
        des: '知不足而奋进，望远山而前行',
        avatar: 'https://cdn.upyun.sugarat.top/avatar/blog/zhangchengwei.png',
        url: 'https://www.zhangchengwei.work'
      },
      {
        url: 'https://leelaa.cn',
        avatar: 'https://cdn.upyun.sugarat.top/avatar/blog/leelaa.png',
        des: '肯了个德的博客',
        nickname: 'LEEDAISEN'
      },
      {
        url: 'https://next.blackcell.fun/',
        avatar: 'https://cdn.upyun.sugarat.top/avatar/blog/blackcell.jpeg',
        des: '物以类聚 人以群分',
        nickname: 'BlackCell'
      },
      {
        url: 'https://tenyon.cn',
        avatar: 'https://cdn.upyun.sugarat.top/avatar/blog/tenyon.webp',
        des: '工夫为艺，笃志成技',
        nickname: 'Yovvis\'s Blog'
      },
      {
        nickname: '强少来了',
        des: '互联网产品经理',
        avatar: 'https://cdn.upyun.sugarat.top/avatar/blog/fengxiaoqiang.png',
        url: 'https://fengxiaoqiang.com/'
      },
      {
        nickname: '博友圈',
        des: '独立博客人的专属朋友圈！',
        avatar: 'https://cdn.upyun.sugarat.top/mdImg/sugar/bdee5d11a1e036ca3634943d34469f59',
        url: 'https://www.boyouquan.com/home'
      },
      {
        nickname: 'Simon He',
        des: '除了coding，我什么都不会',
        avatar: 'https://cdn.upyun.sugarat.top/avatar/blog/simonme.png',
        url: 'https://simonme.netlify.app/'
      },
      {
        nickname: 'laiky',
        des: '一名全栈开发工程师，.NET全栈经验',
        avatar: 'https://cdn.upyun.sugarat.top/avatar/blog/llxz.png',
        url: 'http://llxz.top/'
      },
      {
        nickname: '菜园前端',
        des: '小白都能看懂的笔记',
        avatar: 'https://note.noxussj.top/logo.png',
        url: 'https://note.noxussj.top/?s=y8'
      },
      {
        nickname: 'Hacxy Blog',
        des: '指尖改变命运😋',
        avatar: 'https://hacxy.cn/logo.png',
        url: 'https://hacxy.cn'
      },
      {
        avatar: 'https://onedayxyy.cn/favicon.ico',
        des: '明心静性，爱自己',
        nickname: 'One',
        url: 'https://onedayxyy.cn/',
      },
      {
        url: 'https://teek.seasir.top/',
        avatar: 'https://teek.seasir.top/favicon.ico',
        des: '人心中的成见是一座大山',
        nickname: 'Hyde'
      }
    ].map((v) => {
      if (v.avatar.includes('//cdn.upyun.sugarat.top')) {
        v.avatar = `${v.avatar}-wh50`
      }
      return v
    }),
    random: true,
    limit: 6,
  },
  search: {
    showDate: true,
    pageResultCount: 4
  },
  recommend: {
    showSelf: true,
    nextText: '下一页',
    style: 'sidebar'
  },
  authorList: [
    {
      nickname: '勋染',
      url: 'http://devzx.top/aboutme.html',
      des: '你的指尖,拥有改变世界的力量'
    }
  ],
  //   footer: {
  //     copyright: '',
  //     message: `
  // <div style="text-align: center; padding: 15px 0; font-size: 14px; color: var(--vp-c-text-2);">
  //   <div>
  //     This blog has running : <span id="blogRunTime">0 d 0 h 0 m 0 s</span>
  //     <span style="animation: my-face 5s infinite ease-in-out; display: inline-block; margin: 0 5px;">ღゝ◡╹)ノ♡</span>
  //   </div>
  //   <div>Copyright © <span id="year">2026</span> 勋染 Powered by .NET 8.0 on Kubernetes</div>
  //   <style>
  //     @keyframes my-face {
  //       2%, 25%, 80% { transform: translate(0, 1.5px) rotate(1.5deg); }
  //       4%, 68%, 98% { transform: translate(0, -1.5px) rotate(-.5deg); }
  //       38%, 6% { transform: translate(0, 1.5px) rotate(-1.5deg); }
  //       8%, 86% { transform: translate(0, -1.5px) rotate(-1.5deg); }
  //       10%, 72% { transform: translate(0, 2.5px) rotate(1.5deg); }
  //       12%, 64%, 78%, 96% { transform: translate(0, -0.5px) rotate(1.5deg); }
  //       14%, 54% { transform: translate(0, -1.5px) rotate(1.5deg); }
  //       16% { transform: translate(0, -0.5px) rotate(-1.5deg); }
  //       18%, 22% { transform: translate(0, 0.5px) rotate(-1.5deg); }
  //       20%, 36%, 46% { transform: translate(0, -1.5px) rotate(2.5deg); }
  //       26%, 50% { transform: translate(0, 0.5px) rotate(.5deg); }
  //       28% { transform: translate(0, 0.5px) rotate(1.5deg); }
  //       30%, 40%, 62%, 76%, 88% { transform: translate(0, -0.5px) rotate(2.5deg); }
  //       32%, 34%, 66% { transform: translate(0, 1.5px) rotate(-.5deg); }
  //       42% { transform: translate(0, 2.5px) rotate(-1.5deg); }
  //       44%, 70% { transform: translate(0, 1.5px) rotate(.5deg); }
  //       48%, 74%, 82% { transform: translate(0, -0.5px) rotate(.5deg); }
  //       52%, 56%, 60% { transform: translate(0, 2.5px) rotate(2.5deg); }
  //       58% { transform: translate(0, 0.5px) rotate(2.5deg); }
  //       84% { transform: translate(0, 1.5px) rotate(2.5deg); }
  //       90% { transform: translate(0, 2.5px) rotate(-.5deg); }
  //       92% { transform: translate(0, 0.5px) rotate(-.5deg); }
  //       94% { transform: translate(0, 2.5px) rotate(.5deg); }
  //       0%, 100% { transform: translate(0, 0) rotate(0); }
  //     }
  //   </style>
  // </div>
  //     `
  //   },
  hotArticle: {
    pageSize: 12
  },
  buttonAfterArticle: {
    openTitle: '投"币"支持',
    closeTitle: '下次一定',
    content: '<img src="/appreciation-code.jpg">',
    icon: 'wechatPay',
  },
})
