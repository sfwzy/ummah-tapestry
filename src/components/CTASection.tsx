'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { slideUpVariants, staggerContainer } from '@/lib/animation'

interface CTASectionProps {
  title: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  className?: string
}

export function CTASection({ 
  title, 
  description, 
  primaryCTA, 
  secondaryCTA, 
  className 
}: CTASectionProps) {
  return (
    <motion.section
      className={`chapter-spacing bg-secondary/20 ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20%' }}
    >
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          variants={slideUpVariants}
          className="text-hero font-grotesk font-semibold text-foreground mb-6 max-w-4xl mx-auto"
        >
          {title}
        </motion.h2>

        <motion.p
          variants={slideUpVariants}
          className="text-large text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          variants={slideUpVariants}
          className="flex justify-center items-center"
        >
          <Link to={primaryCTA.href} className="btn-primary group inline-flex items-center whitespace-nowrap">
            {primaryCTA.text}
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Link>

          {secondaryCTA && (
            <Link to={secondaryCTA.href} className="btn-secondary group inline-flex items-center ml-6">
              {secondaryCTA.text}
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </motion.div>
      </div>
    </motion.section>
  )
}