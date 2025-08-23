'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Stat {
  number: string
  label: string
}

interface StatsRowProps {
  stats: Stat[]
  className?: string
}

export function StatsRow({ stats, className }: StatsRowProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })

  return (
    <motion.section
      ref={ref}
      className={`py-16 lg:py-24 ${className}`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <div className="text-hero font-grotesk font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-small text-muted-foreground font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}