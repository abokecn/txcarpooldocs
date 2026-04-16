import { defineValaxyConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  title: 'Valaxy Theme Yun',
  url: 'https://valaxy.site/',
  author: {
    name: '云游君',
    avatar: 'https://www.yunyoujun.cn/images/avatar.jpg',
  },
  /**
   * 站点图标
   */
  favicon: 'https://www.yunyoujun.cn/favicon.svg',
  /**
   * 副标题
   */
  subtitle: 'All at sea.',
  description: 'Valaxy Theme Yun Preview.',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
  },
})
