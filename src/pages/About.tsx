import { Nav } from '@/components/Nav'
import { StickyChapter } from '@/components/StickyChapter'
import { MediaReveal } from '@/components/MediaReveal'
import { StatsRow } from '@/components/StatsRow'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { slideUpVariants, staggerContainer } from '@/lib/animation'

// Import assets
import communityImage from '@/assets/community-gathering.jpg'
import patternImage from '@/assets/pattern-tiles.jpg'
import sketchImage from '@/assets/sketch-innovation.jpg'

const stats = [
  { number: '2024', label: 'Founded' },
  { number: '3', label: 'Continents' },
  { number: '100+', label: 'Community Leaders' },
  { number: '1M+', label: 'Lives Impacted' },
]

const values = [
  {
    title: 'Excellence',
    description: 'We celebrate and amplify the highest achievements across all fields and disciplines.'
  },
  {
    title: 'Authenticity',
    description: 'We honor our heritage while embracing innovation and progress in everything we do.'
  },
  {
    title: 'Community',
    description: 'We build bridges across generations, industries, and geographies to strengthen our collective impact.'
  },
  {
    title: 'Purpose',
    description: 'Every initiative we launch is designed to create meaningful, lasting change for our communities.'
  }
]

const About = () => {
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
            About Us
          </motion.p>

          <motion.h1
            variants={slideUpVariants}
            className="text-display font-grotesk font-bold text-foreground mb-8 max-w-4xl mx-auto"
          >
            Building the <span className="text-accent">Future</span> We Want to See
          </motion.h1>

          <motion.p
            variants={slideUpVariants}
            className="text-large text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            We envision a world where Muslims are celebrated across every discipline and every stage of life. 
            A world where recognition builds confidence, community creates opportunity, and collective brilliance drives change.
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story */}
      <StickyChapter
        kicker="Our Story"
        title="Why 622 Collective Exists"
        mediaSlot={
          <MediaReveal 
            src={communityImage}
            alt="Muslim community gathering showcasing diversity and unity"
            aspectRatio="landscape"
          />
        }
      >
        <p>
          We believe Muslims deserve to see themselves reflected in the highest light — as innovators, 
          leaders, and contributors to every field. Yet too often, these stories remain unseen or uncelebrated.
        </p>
        <p>
          622 Collective exists to change that narrative. We create spaces where recognition fuels connection, 
          research sparks ideas, and community builds lasting change. The world not only needs to see Muslim 
          contribution — it needs to learn from it, engage with it, and be inspired by it.
        </p>
      </StickyChapter>

      {/* Our Approach */}
      <StickyChapter
        kicker="Our Approach"
        title="How We Create Change"
        reverse
        mediaSlot={
          <MediaReveal 
            src={sketchImage}
            alt="Innovation process from sketch to impact"
            aspectRatio="landscape"
          />
        }
      >
        <p>
          Our process is disciplined, iterative, and kind. We start with listening — to our community, 
          to the needs of our time, and to the voices that often go unheard.
        </p>
        <p>
          From hand-sketched ideas to global impact, every initiative we launch is crafted with care, 
          tested with our community, and designed to create meaningful connections across generations and disciplines.
        </p>
      </StickyChapter>

      {/* Stats */}
      <StatsRow stats={stats} className="bg-secondary/10" />

      {/* Our Values */}
      <section className="chapter-spacing">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
              Our Values
            </p>
            <h2 className="text-hero font-grotesk font-semibold text-foreground mb-6">
              What Guides Our Work
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              These principles shape every decision we make and every initiative we launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: '-20%' }}
              >
                <h3 className="text-large font-grotesk font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <StickyChapter
        kicker="Our Vision"
        title="The Future We're Building"
        mediaSlot={
          <MediaReveal 
            src={patternImage}
            alt="Islamic geometric patterns representing interconnected community"
            aspectRatio="landscape"
          />
        }
      >
        <p>
          We envision a world where Muslim contribution is not just recognized but celebrated as essential 
          to human progress. Where young Muslims see role models in every field they aspire to enter.
        </p>
        <p>
          A world where our communities are connected across borders, generations, and disciplines — 
          united by shared values and driven by collective ambition to build a better future for all.
        </p>
      </StickyChapter>

      {/* CTA Section */}
      <CTASection
        title="Join Our Mission"
        description="Be part of a movement that's redefining how Muslim excellence is celebrated and shared with the world."
        primaryCTA={{
          text: "Get Involved",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "See Our Work",
          href: "/work"
        }}
      />

      <Footer />
    </div>
  );
};

export default About;