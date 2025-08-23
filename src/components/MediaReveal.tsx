'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MediaRevealProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape'
}

export function MediaReveal({ 
  src, 
  alt, 
  className, 
  priority = false,
  aspectRatio = 'landscape' 
}: MediaRevealProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[4/5]',
    landscape: 'aspect-[3/2]'
  }

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-muted',
        aspectClasses[aspectRatio],
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2 
      }}
      viewport={{ once: true, margin: '-10%' }}
    >
      {/* Reveal mask animation */}
      <motion.div
        className="absolute inset-0 bg-accent z-10"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.5 
        }}
        viewport={{ once: true }}
        style={{ originX: 1 }}
      />

      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />

      {/* Optional overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
    </motion.div>
  )
}