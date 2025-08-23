'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface MarqueeQuoteProps {
  quote: string
  author: string
  role?: string
  className?: string
}

export function MarqueeQuote({ quote, author, role, className }: MarqueeQuoteProps) {
  return (
    <section className={`py-16 lg:py-24 bg-secondary/30 ${className}`}>
      <div className="relative overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling content */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Repeat the quote multiple times for seamless loop */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-16 px-16">
              <Quote className="text-accent w-8 h-8 flex-shrink-0" />
              <div className="text-large font-grotesk text-foreground">
                <span className="font-medium">&ldquo;{quote}&rdquo;</span>
                <span className="text-muted-foreground ml-6">
                  — {author}
                  {role && `, ${role}`}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}