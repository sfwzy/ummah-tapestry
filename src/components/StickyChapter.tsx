'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface StickyChapterProps {
  title: string
  kicker?: string
  children: ReactNode
  mediaSlot?: ReactNode
  className?: string
  reverse?: boolean
}

export function StickyChapter({ 
  title, 
  kicker, 
  children, 
  mediaSlot, 
  className,
  reverse = false 
}: StickyChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Transform values for parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={containerRef}
      className={cn('chapter-spacing relative', className)}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className={cn(
          'grid lg:grid-cols-2 gap-16 lg:gap-24 items-center',
          reverse && 'lg:grid-flow-col-dense'
        )}>
          {/* Text Content - Sticky on desktop */}
          <motion.div 
            className={cn(
              'lg:sticky lg:top-32 lg:self-start space-y-8',
              reverse && 'lg:col-start-2'
            )}
            style={{ opacity }}
          >
            {kicker && (
              <motion.p
                className="text-accent text-sm font-medium tracking-wide uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-20%' }}
              >
                {kicker}
              </motion.p>
            )}

            <motion.h2
              className="text-hero font-grotesk font-semibold text-foreground leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-20%' }}
            >
              {title}
            </motion.h2>

            <motion.div
              className="text-body text-muted-foreground space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-20%' }}
            >
              {children}
            </motion.div>
          </motion.div>

          {/* Media Content */}
          {mediaSlot && (
            <motion.div
              className={cn(
                'relative',
                reverse && 'lg:col-start-1'
              )}
              style={{ y }}
            >
              {mediaSlot}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}