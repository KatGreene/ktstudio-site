import Translate, { translate } from '@docusaurus/Translate'
import { Icon } from '@iconify/react'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'

export type FeatureItem = {
  title: string | React.ReactNode
  description: string | React.ReactNode
  header: React.ReactNode
  icon?: React.ReactNode
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: '完全免费',
    }),
    description: (
      <Translate>
        游玩 KT Studio 是完全免费
      </Translate>
    ),
    header: <WebDeveloperSvg className="h-auto w-full" height={150} role="img" />,
    // icon: <Icon icon="logos:typescript-icon" className="size-4 text-neutral-500" />,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '会点',
    }),
    description: (
      <Translate>
        作为一名
      </Translate>
    ),
    header: <SpiderSvg className="h-auto w-full" height={150} role="img" />,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '开源',
    }),
    description: (
      <Translate>
        作为一名
      </Translate>
    ),
    header: <OpenSourceSvg className="h-auto w-full" height={150} role="img" />,
  },
]

export default FEATURES
