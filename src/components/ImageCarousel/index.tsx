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
        overflow: 'hidden'
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: `blur(${blurAmount}px)`,
          }}
        />
      </AnimatePresence>
    </div>
  )
} 