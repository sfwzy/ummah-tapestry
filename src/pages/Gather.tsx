import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { slideUpVariants, staggerContainer } from '@/lib/animation'

const Gather = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <span className="text-accent">Gather</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={slideUpVariants}
            className="text-large text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Where ideas meet people, and people meet purpose.
          </motion.p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="chapter-spacing">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div>
                <p className="text-large text-muted-foreground leading-relaxed mb-8">
                  622 Collective's in-person programming is designed to bring our community together beyond the screen. We convene thought leaders, innovators, and seekers across disciplines to reflect, exchange ideas, and build meaningful connections.
                </p>
              </div>

              {/* Experience Section */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">✨</span>
                  <div>
                    <h3 className="text-hero font-grotesk font-semibold text-foreground mb-4">Experience</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      Step into spaces that spark inspiration, from intimate salons to large-scale convenings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enrich Section */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <h3 className="text-hero font-grotesk font-semibold text-foreground mb-4">Enrich</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      Deepen your understanding through cross-disciplinary dialogue, mentorship, and shared learning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Participate Section */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <h3 className="text-hero font-grotesk font-semibold text-foreground mb-4">Participate</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      Move beyond listening — engage in workshops, roundtables, and discussions on the pressing challenges of our time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Group Section */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">👥</span>
                  <div>
                    <h3 className="text-hero font-grotesk font-semibold text-foreground mb-4">Group</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      Meet fellow builders, thinkers, and creatives who share your values and vision.
                    </p>
                  </div>
                </div>
              </div>

              {/* Organize Section */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📅</span>
                  <div>
                    <h3 className="text-hero font-grotesk font-semibold text-foreground mb-4">Organize</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      Join structured gatherings that balance reflection with action, ensuring every conversation moves us forward.
                    </p>
                  </div>
                </div>
              </div>

              {/* Congregate Section */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">🕊️</span>
                  <div>
                    <h3 className="text-hero font-grotesk font-semibold text-foreground mb-4">Congregate</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      Rooted in tradition, our gatherings honor the power of community — the simple act of coming together with intention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-secondary/20 rounded-2xl">
                <p className="text-body text-muted-foreground leading-relaxed mb-6">
                  From retreats that recharge the spirit to forums that confront urgent issues — climate, equity, technology, culture — our IRL programming creates spaces where excellence is not just celebrated but mobilized.
                </p>
                <p className="text-large font-grotesk font-medium text-accent text-center">
                  Gather is where community becomes movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gather;