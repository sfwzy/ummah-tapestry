import { Nav } from '@/components/Nav'
import { CaseCard } from '@/components/CaseCard'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { slideUpVariants, staggerContainer } from '@/lib/animation'

// Import assets
import sketchImage from '@/assets/sketch-innovation.jpg'
import patternImage from '@/assets/pattern-tiles.jpg'
import communityImage from '@/assets/community-gathering.jpg'

const projects = [
  {
    title: 'Ummah100',
    description: 'A landmark initiative celebrating the top 100 Muslims shaping culture, business, and society today. A living archive of Muslim excellence for the world to see.',
    image: communityImage,
    href: '/work/ummah100',
    tags: ['Recognition', 'Community', 'Excellence', 'Global Impact']
  },
  {
    title: 'Global Podcast Series',
    description: 'Conversations with inspiring Muslims across business, technology, healthcare, government, music, entertainment, and beyond. Elevating role models for the next generation.',
    image: sketchImage,
    href: '/work/podcast',
    tags: ['Storytelling', 'Media', 'Inspiration', 'Leadership']
  },
  {
    title: 'Research Initiative',
    description: 'Accessible and timely research papers that shine a light on issues and opportunities shaping Muslims globally. Knowledge that drives collective progress.',
    image: patternImage,
    href: '/work/research',
    tags: ['Research', 'Knowledge', 'Policy', 'Impact']
  },
  {
    title: 'Community Events',
    description: 'From retreats to salons to large convenings, our events bring Muslims together across industries and generations to strengthen bonds and create opportunities.',
    image: communityImage,
    href: '/work/events',
    tags: ['Events', 'Networking', 'Mentorship', 'Community']
  },
  {
    title: 'Leadership Spotlight',
    description: 'Highlighting Muslim leaders and innovators who are making significant contributions to their fields and communities worldwide.',
    image: sketchImage,
    href: '/work/spotlight',
    tags: ['Leadership', 'Profiles', 'Innovation', 'Excellence']
  },
  {
    title: 'Next Generation Program',
    description: 'Mentorship and development initiatives designed to empower young Muslim professionals and entrepreneurs across various industries.',
    image: patternImage,
    href: '/work/next-gen',
    tags: ['Mentorship', 'Youth', 'Development', 'Future Leaders']
  },
]

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <motion.div
          className="container mx-auto px-6 lg:px-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            variants={slideUpVariants}
            className="text-accent text-sm font-medium tracking-wide uppercase mb-6"
          >
            Our Work
          </motion.p>

          <motion.h1
            variants={slideUpVariants}
            className="text-display font-grotesk font-bold text-foreground mb-8 max-w-4xl mx-auto"
          >
            Initiatives That <span className="text-accent">Elevate</span> and <span className="text-accent">Connect</span>
          </motion.h1>

          <motion.p
            variants={slideUpVariants}
            className="text-large text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Each project we launch is designed to celebrate Muslim excellence, create meaningful connections, 
            and drive positive change across communities worldwide.
          </motion.p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <CaseCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                href={project.href}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have a Project in Mind?"
        description="We're always looking for new ways to celebrate Muslim excellence and build community."
        primaryCTA={{
          text: "Let's Collaborate",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Nominate for Ummah100",
          href: "/ummah100"
        }}
      />

      <Footer />
    </div>
  );
};

export default Work;