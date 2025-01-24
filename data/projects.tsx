export const projects: Project[] = [
  {
    title: '安卓平台下载',
    description: '内测阶段，暂不开放',
    preview: '/img/bg-acheron-01-2.jpg',
    website: '/project',
    // source: 'https://github.com/kuizuo/blog',
    tags: ['personal'],
    type: 'web',
  },
  {
    title: 'Windows平台下载',
    description: '内测阶段，暂不开放',
    preview: '/img/bg-acheron-02.jpg',
    website: '/project',
    // source: 'https://github.com/kuizuo/js-deobfuscator',
    tags: ['personal'],
    type: 'web',
  },
  {
    title: 'QQ群下载',
    description: '加入内测QQ群',
    preview: '/img/bg-theherta-03.jpg',
    website: '/project',
    // source: 'https://github.com/kuizuo/js-deobfuscator',
    tags: ['opensource'],
    type: 'web',
  },
  {
    title: '联系作者',
    description: '添加QQ或微信好友',
    preview: '/img/bg-theherta-02.jpg',
    website: '/project',
    // source: 'https://github.com/kuizuo/js-deobfuscator',
    tags: ['opensource'],
    type: 'web',
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
  web: '相关链接',
  app: '💫 应用',
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
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '下载',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
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
