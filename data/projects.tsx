export const projects: Project[] = [
  {
    title: '安卓平台下载',
    description: '内测阶段，暂不开放',
    preview: '/img/kt-studio-dl-android.jpg',
    website: '/project',
    // source: 'https://github.com/kuizuo/blog',
    tags: ['personal'],
    type: 'web',
  },
  {
    title: 'Windows平台下载',
    description: '内测阶段，暂不开放',
    preview: '/img/kt-studio-dl-windows.jpg',
    website: '/project',
    // source: 'https://github.com/kuizuo/js-deobfuscator',
    tags: ['personal'],
    type: 'web',
  },
  {
    title: 'QQ群下载 ➜',
    description: '加入内测QQ群',
    preview: '/img/kt-studio-dl-qq.jpg',
    website: 'about-dl-qq',
    // source: 'https://github.com/kuizuo/js-deobfuscator',
    tags: ['opensource'],
    type: 'web',
  },
  {
    title: '联系开发者 ➜',
    description: '发邮件 加QQ 或B站私信我',
    preview: '/img/kt-studio-dl-dev.jpg',
    website: 'about-developer',
    // source: 'https://github.com/kuizuo/js-deobfuscator',
    tags: ['opensource'],
    type: 'web',
  },
  {
    title: 'KT Studio 宣传片',
    description: 'PV制作中',
    preview: '/img/bg-acheron-02.jpg',
    website: '/project',
    // source: 'https://github.com/kuizuo/js-deobfuscator',
    tags: ['design'],
    type: 'app',
  },
  {
    title: '开始上手 KT Studio ➜',
    description: '基础操作演示',
    preview: '/img/bg-acheron-01-2.jpg',
    website: 'https://www.bilibili.com/video/BV1eWBdYEEwC',
    // source: 'https://github.com/kuizuo/js-deobfuscator',
    tags: ['product'],
    type: 'app',
  },
  {
    title: '更多视频 ➜',
    description: '前往B站视频合集',
    preview: '/img/bg-theherta-03.jpg',
    website: 'https://space.bilibili.com/1519308330/lists/4614563?type=season',
    // source: 'https://github.com/kuizuo/js-deobfuscator',
    tags: ['product'],
    type: 'app',
  }
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other'

export const projectTypeMap = {
  web: '🔗 相关链接',
  app: '▶️ 观看视频',
  commerce: '商业项目',
  personal: '👨‍💻 个人',
  toy: '🔫 玩具',
  other: '加入QQ群下载',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '游玩演示',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开放中',
    description: '已开放的链接!',
    color: '#39ca30',
  },
  personal: {
    label: '未开放',
    description: '未开放的链接!',
    color: '#ca3030',
  },
  product: {
    label: '游玩演示',
    description: '游玩演示',
    color: '#ff86a6',
  },
  design: {
    label: '敬请期待',
    description: '敬请期待!',
    color: '#ff8330',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
