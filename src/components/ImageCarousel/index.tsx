import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'

interface ImageCarouselProps {
  images: string[]
  interval?: number
  borderRadius?: number
  blurAmount?: number
}

export default function ImageCarousel({
  images,
  interval = 3000,
  borderRadius = 16,
  blurAmount = 0,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [interval, images.length])

  return (
    <div 
      className={styles.carouselContainer}
      style={{ 
        borderRadius: `${borderRadius}px`,
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%' // 16:9 宽高比
      }}
    >
        <AnimatePresence mode="wait">
            <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ opacity: 0, filter: `blur(${blurAmount}px)` }}
                animate={{ opacity: 1, filter: `blur(0px)` }}
                exit={{ opacity: 0, filter: `blur(${blurAmount}px)` }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            />
        </AnimatePresence>
    </div>
  )
} 