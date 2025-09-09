'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { slideUpVariants, staggerContainer } from '@/lib/animation'
import heroPatternProminent from '@/assets/hero-pattern-prominent.jpg'

export function Hero() {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Pattern Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url(${heroPatternProminent})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 0.25
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/95 to-background/98" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Kicker */}
        <motion.p 
          variants={slideUpVariants}
          className="text-accent text-sm font-medium tracking-wide uppercase mb-6"
        >
          622 Collective
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          variants={slideUpVariants}
          className="text-5xl font-grotesk text-foreground mb-8 leading-tight max-w-4xl mx-auto"
        >
          Celebrating Muslim Excellence.
          <br />
          <span className="text-accent">Building Our Future.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={slideUpVariants}
          className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          A global platform celebrating Muslim excellence, advancing ideas, and building community.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={slideUpVariants}
          className="flex justify-center items-center"
        >
          <Link to="/contact" className="btn-primary group inline-flex items-center whitespace-nowrap">
            Get Involved
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-accent rounded-full flex justify-center"
            animate={{ 
              borderColor: ['hsl(var(--accent))', 'hsl(var(--accent) / 0.5)', 'hsl(var(--accent))']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-accent rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}