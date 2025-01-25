import { type Variants, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

import Translate from '@docusaurus/Translate'

import HeroSvg from './img/ktstudio_icon.svg'

import SocialLinks from '@site/src/components/SocialLinks'
import { MovingButton } from '../../magicui/moving-border'
import styles from './styles.module.css'
import ImageCarousel from '@site/src/components/ImageCarousel'

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

// 在 variants 定义后添加示例图片数组
const sampleImages = [
  "/img/bg-theherta-01.jpg",
  "/img/bg-music-01.jpg",
  '/img/home-bg-silwolf-1.jpg',
  '/img/home-bg-feixiao-1.jpg',
  "/img/bh-spacechamber-01.jpg",
  "/img/bh-changletian-01.jpg",
]

function Circle() {
  return <div className={styles.circle} />
}

function Name() {
  return (
    <motion.div
      className={styles.hero_text}
      custom={1}
      initial="hidden"
      animate="visible"
      variants={variants}
      onMouseMove={(e) => {
        e.currentTarget.style.setProperty('--x', `${e.clientX}px`)
        e.currentTarget.style.setProperty('--y', `${e.clientY}px`)
      }}
    >
      <span className={styles.noWrap}>
        <Translate id="homepage.hero.greet">欢迎来到 </Translate>
      </span>

      <span
        className={styles.name}
        onMouseMove={(e) => {
          const bounding = e.currentTarget.getBoundingClientRect()
          e.currentTarget.style.setProperty('--mouse-x', `${bounding.x}px`)
          e.currentTarget.style.setProperty('--mouse-y', `${bounding.y}px`)
        }}
      >
        <Translate id="homepage.hero.name">KT Studio</Translate>
      </span>

      <span className="ml-1"></span>
    </motion.div>
  )
}

export default function Hero() {
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!circleRef.current) return

      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) * 0.01
      const moveY = (clientY - window.innerHeight / 2) * 0.01

      circleRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div className={styles.hero}>
      <div className={styles.intro}>
        <Name />
        <motion.p custom={2} initial="hidden" animate="visible" variants={variants} className="max-lg:px-4">
          <Translate id="homepage.hero.text">
            一款《崩坏：星穹铁道》同人游戏
          </Translate>
        </motion.p>
        <motion.div custom={3} initial="hidden" animate="visible" variants={variants}>
          <SocialLinks />
        </motion.div>

        {/*<motion.div className="mt-4 flex gap-4" custom={4} initial="hidden" animate="visible" variants={variants}>*/}
        {/*  <MovingButton*/}
        {/*    borderRadius="1.25rem"*/}
        {/*    className="relative z-10 flex items-center rounded-2xl border border-solid border-neutral-200 bg-background px-5 py-3 text-center text-base font-bold dark:border-neutral-800"*/}
        {/*  >*/}
        {/*    <a href="/project" className="font-semibold">*/}
        {/*      <Translate id="hompage.hero.introduce">立即开玩</Translate>*/}
        {/*    </a>*/}
        {/*  </MovingButton>*/}
        {/*  <MovingButton*/}
        {/*    borderRadius="1.25rem"*/}
        {/*    className="font-slim relative z-10 flex items-center rounded-2xl border border-solid border-neutral-200 bg-background px-5 py-3 text-center text-base dark:border-neutral-800"*/}
        {/*  >*/}
        {/*    <a href="/about" className="font-semibold">*/}
        {/*      <Translate id="hompage.hero.introduce">开发者的话</Translate>*/}
        {/*    </a>*/}
        {/*  </MovingButton>*/}
        {/*</motion.div>*/}

        <motion.div
          className="mt-8 w-[85%] max-w-3xl"
          custom={5}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <ImageCarousel
            images={sampleImages}
            interval={4000}
            borderRadius={20}
            blurAmount={10}
          />
        </motion.div>
      </div>

      <motion.div className={styles.background}>
        <HeroSvg />
        <Circle />
      </motion.div>
    </motion.div>
  )
}
