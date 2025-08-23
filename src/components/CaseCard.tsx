'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CaseCardProps {
  title: string
  description: string
  image: string
  href: string
  tags?: string[]
  className?: string
}

export function CaseCard({ title, description, image, href, tags, className }: CaseCardProps) {
  return (
    <motion.div
      className={cn('group', className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-20%' }}
      whileHover={{ y: -8 }}
    >
      <Link to={href} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-300">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => {
                  const getTagColor = (tagName: string) => {
                    switch (tagName) {
                      case 'Think': return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      case 'Learn': return 'bg-green-500/10 text-green-400 border-green-500/20'
                      case 'Gather': return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                      case 'Celebrate': return 'bg-accent/10 text-accent border-accent/20'
                      default: return 'bg-accent/10 text-accent border-accent/20'
                    }
                  }
                  
                  return (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            )}

            {/* Title */}
            <h3 className="text-large font-grotesk font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-body text-muted-foreground mb-4 line-clamp-3">
              {description}
            </p>

            {/* CTA */}
            <div className="flex items-center text-accent text-sm font-medium">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}