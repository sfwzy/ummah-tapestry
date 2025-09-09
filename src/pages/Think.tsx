import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { slideUpVariants, staggerContainer } from '@/lib/animation'

const Think = () => {
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
            className="text-4xl font-grotesk text-foreground mb-8 leading-tight max-w-6xl mx-auto"
          >
            <span className="text-accent">Think</span> — Turning insight into impact.
          </motion.h1>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  At 622 Collective, "Think" is where research meets real-world application. Our think tank and research initiatives explore the questions, opportunities, and challenges shaping Muslims globally — and how our collective brilliance can drive solutions.
                </p>
              </div>

              <div className="grid gap-12">
                {/* Research Section */}
                <div>
                  <h3 className="text-2xl font-grotesk font-semibold text-foreground mb-4">Research</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We produce accessible, timely research papers that shine a light on pressing issues: from economic mobility and education to media representation, entrepreneurship, technology, and cultural production. These insights inform dialogue, guide decision-makers, and equip our community with knowledge to act.
                  </p>
                </div>

                {/* Think Tank Section */}
                <div>
                  <h3 className="text-2xl font-grotesk font-semibold text-foreground mb-4">Think Tank</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Our think tank brings together scholars, practitioners, and innovators across disciplines. Through cross-sector convenings, policy briefs, and collaborative projects, we elevate Muslim perspectives on the world's most urgent challenges. By amplifying our voices in global conversations, we ensure that Muslim ideas are not just represented, but valued.
                  </p>
                </div>

                {/* Why It Matters Section */}
                <div>
                  <h3 className="text-2xl font-grotesk font-semibold text-foreground mb-4">Why It Matters</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Knowledge has always been at the heart of Muslim civilization. Today, rebuilding that tradition means pairing rigorous research with practical solutions that advance society at large. Think is our contribution to that legacy — creating a pipeline of ideas that strengthens communities, informs institutions, and inspires action.
                  </p>
                </div>
              </div>

              <div className="text-center mt-16">
                <p className="text-lg font-grotesk font-medium text-accent">
                  Think is where we transform data into direction, and reflection into strategy.
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

export default Think;