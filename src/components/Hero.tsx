'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { slideUpVariants, staggerContainer } from '@/lib/animation'
import moroccanPattern from '@/assets/patterns/pattern-moroccan-outline.svg'
import mamlukPattern from '@/assets/patterns/pattern-mamluk-outline.svg'
import kuficPattern from '@/assets/patterns/pattern-kufic-outline.svg'
import iznikPattern from '@/assets/patterns/pattern-iznik-outline.svg'

export function Hero() {
  // Get pattern from URL params for testing, default to moroccan
  const urlParams = new URLSearchParams(window.location.search);
  const selectedPattern = urlParams.get('bg') || 'moroccan';
  
  const patterns = {
    moroccan: moroccanPattern,
    mamluk: mamlukPattern,
    kufic: kuficPattern,
    iznik: iznikPattern
  };
  
  const currentPattern = patterns[selectedPattern as keyof typeof patterns] || moroccanPattern;
  
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
          className="w-full h-full text-accent"
          style={{
            backgroundImage: `url(${currentPattern})`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
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
          className="text-display font-grotesk text-foreground mb-8 leading-none"
        >
          Celebrating Muslim Excellence.
          <br />
          <span className="text-accent">Building Our Future.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={slideUpVariants}
          className="text-large text-muted-foreground mb-12 max-w-5xl mx-auto leading-relaxed"
        >
          A global platform celebrating Muslim excellence, advancing ideas, and building community for generations to come.
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