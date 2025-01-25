import Translate from '@docusaurus/Translate'
import features from '@site/data/features'
import { cn } from '@site/src/lib/utils'
import { BentoGrid, BentoGridItem } from '../../magicui/bento-grid'
import { Section } from '../Section'
import {MovingButton} from "@site/src/components/magicui/moving-border";
import { type Variants, motion } from 'framer-motion'

const variants: Variants = {
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 25,
            stiffness: 100,
            duration: 0.3,
            delay: i * 0.3,
        },
    }),
    hidden: { opacity: 0, y: 30 },
}

export default function FeaturesSection() {
  return (
    <Section title={<Translate id="homepage.feature.title">三大特点</Translate>}>
      <BentoGrid className="mx-auto w-full">
        {features.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={cn('p-2 md:p-4', i === 3 || i === 6 ? 'md:col-span-2' : '')}
          />
        ))}
      </BentoGrid>

      {/* <div className="mt-4 grid grid-cols-1 justify-center gap-4 px-0 md:grid-cols-6 md:grid-rows-2 md:px-4">
        <Skill className="md:col-span-2 md:row-span-2" />
        <Github className="h-full md:col-span-4 md:row-span-2" />
      </div> */}

    <motion.div className="w-[35%] mt-12 mb-12 gap-4 m-auto" custom={4} initial="hidden" animate="visible" variants={variants}>
      <MovingButton
        borderRadius="1.25rem"
        className="relative z-10 flex items-center rounded-2xl border border-solid border-neutral-200 bg-background px-5 py-3 text-center text-base font-bold dark:border-neutral-800"
      >
        <a href="/project" className="font-semibold">
          <Translate id="hompage.hero.introduce">立即开玩</Translate>
        </a>
      </MovingButton>
      <MovingButton
        borderRadius="1.25rem"
        className="font-slim relative z-10 flex items-center rounded-2xl border border-solid border-neutral-200 bg-background px-5 py-3 text-center text-base dark:border-neutral-800"
      >
        <a href="/about" className="font-semibold">
          <Translate id="hompage.hero.introduce">开发者的话</Translate>
        </a>
      </MovingButton>
    </motion.div>

    </Section>
  )
}
