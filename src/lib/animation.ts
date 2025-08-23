// Animation utilities for 622 Collective
// Purposeful motion that enhances storytelling

export const easings = {
  entrance: [0.22, 1, 0.36, 1] as const,
  smooth: [0.4, 0, 0.2, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
}

export const durations = {
  micro: 0.18,
  short: 0.3,
  medium: 0.6,
  long: 1.0,
} as const

// Framer Motion variants for reveal animations
export const slideUpVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: easings.entrance,
    },
  },
}

export const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.medium,
      ease: easings.entrance,
    },
  },
}

export const scaleInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.short,
      ease: easings.entrance,
    },
  },
}

// Stagger animation for multiple elements
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Scroll-triggered animations with thresholds
export const scrollRevealThreshold = 0.3
export const scrollRevealRootMargin = '-10% 0px -10% 0px'

// Reduced motion check
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Motion-aware variants that respect user preferences
export const motionVariants = (variants: any) => {
  if (prefersReducedMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.01 } },
    }
  }
  return variants
}