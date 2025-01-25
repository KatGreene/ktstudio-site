import Translate, { translate } from '@docusaurus/Translate'
import { Icon } from '@iconify/react'
import OpenSourceSvg from '@site/src/components/landing/Hero/img/ktstudio_icon_ng.svg'
import SpiderSvg from '@site/src/components/landing/Hero/img/ktstudio_icon_hsr.svg'
import WebDeveloperSvg from '@site/src/components/landing/Hero/img/ktstudio_icon_free.svg'

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
        KT Studio 仅做个人非商业用途
      </Translate>
    ),
    header: <WebDeveloperSvg className="h-auto w-full" height={150} role="img" />,
    // icon: <Icon icon="logos:typescript-icon" className="size-4 text-neutral-500" />,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '多厨狂喜',
    }),
    description: (
      <Translate>
        可持续性梦幻联动
      </Translate>
    ),
    header: <SpiderSvg className="h-auto w-full" height={150} role="img" />,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '现代与次世代',
    }),
    description: (
      <Translate>
        捏🐴🐴的，太摩登🌶️！
      </Translate>
    ),
    header: <OpenSourceSvg className="h-auto w-full" height={150} role="img" />,
  },
]

export default FEATURES
