import { 
  Github, 
  Mail, 
  Search, 
  Youtube, 
  Music, 
  Video, 
  HelpCircle,
  Code2,
  ShoppingBag,
  type LucideIcon 
} from 'lucide-react'

export interface SiteCategory {
  name: string
  sites: Site[]
}

export interface Site {
  name: string
  url: string
  icon: LucideIcon
}

export const siteCategories: SiteCategory[] = [
  {
    name: '常用工具',
    sites: [
      {
        name: 'Google',
        url: 'https://www.google.com',
        icon: Search
      },
      {
        name: 'GitHub',
        url: 'https://github.com',
        icon: Github
      },
      {
        name: 'Gmail',
        url: 'https://mail.google.com',
        icon: Mail
      }
    ]
  },
  {
    name: '娱乐',
    sites: [
      {
        name: 'YouTube',
        url: 'https://www.youtube.com',
        icon: Youtube
      },
      {
        name: '网易云音乐',
        url: 'https://music.163.com',
        icon: Music
      },
      {
        name: 'Bilibili',
        url: 'https://www.bilibili.com',
        icon: Video
      }
    ]
  },
  {
    name: '学习',
    sites: [
      {
        name: '知乎',
        url: 'https://www.zhihu.com',
        icon: HelpCircle
      },
      {
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com',
        icon: Code2
      },
      {
        name: '掘金',
        url: 'https://juejin.cn',
        icon: Code2
      }
    ]
  },
  {
    name: '购物',
    sites: [
      {
        name: '淘宝',
        url: 'https://www.taobao.com',
        icon: ShoppingBag
      },
      {
        name: '京东',
        url: 'https://www.jd.com',
        icon: ShoppingBag
      }
    ]
  }
] 