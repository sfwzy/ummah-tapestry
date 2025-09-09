import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { slideUpVariants, staggerContainer } from '@/lib/animation'

const Celebrate = () => {
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
            <span className="text-accent">Celebrate</span> — Recognizing Muslim excellence across all fields.
          </motion.h1>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {/* Ummah100 Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl font-grotesk font-semibold text-foreground mb-6">Ummah100</h2>
                <p className="text-lg text-accent font-medium">
                  A landmark initiative celebrating the top 100 Muslims shaping culture, business, and society today.
                </p>
              </div>

              <div className="space-y-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ummah100 is more than a list — it is a living archive of Muslim brilliance. Across industries and generations, Muslims are reimagining what is possible in technology, business, government, the arts, healthcare, education, sports, and beyond. Too often, their achievements go unrecognized on the world stage. Ummah100 exists to change that.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Each year, we highlight 100 visionaries, builders, and changemakers whose work is redefining their fields and inspiring the next generation. From innovators launching groundbreaking companies, to artists shaping global culture, to public servants driving policy with impact, Ummah100 reflects the depth and diversity of Muslim contribution today.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  To ensure the highest standards of recognition, nominees are reviewed by a distinguished panel of leaders and experts across disciplines. These panelists bring their own expertise and lived experience to the process, carefully evaluating each nominee's impact, integrity, and potential for lasting influence. This collaborative, community-driven approach ensures that Ummah100 is not just a list, but a carefully curated portrait of excellence.
                </p>
              </div>

              {/* Why Ummah100 Section */}
              <div className="bg-secondary/10 rounded-2xl p-8">
                <h3 className="text-2xl font-grotesk font-semibold text-foreground mb-8">Why Ummah100?</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-accent font-bold">•</span>
                    <p className="text-base text-muted-foreground">To surface new role models for Muslims everywhere.</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-accent font-bold">•</span>
                    <p className="text-base text-muted-foreground">To challenge and expand the narrative of who Muslims are and what they contribute.</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-accent font-bold">•</span>
                    <p className="text-base text-muted-foreground">To build a global archive that documents, honors, and elevates Muslim excellence across disciplines.</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-accent font-bold">•</span>
                    <p className="text-base text-muted-foreground">To create a rigorous, panel-driven recognition process that reflects fairness, credibility, and impact.</p>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  At its core, Ummah100 is a statement: Muslim brilliance belongs not just to the community, but to the world. By celebrating these 100 individuals each year, we're telling a new story — one that reshapes how Muslims see themselves, and how the world sees Muslims.
                </p>
                
                <div className="bg-accent/10 rounded-2xl p-8">
                  <p className="text-lg font-medium text-accent mb-4">
                    Ummah100 is coming soon. Be among the first to nominate, celebrate, and share the stories of Muslim excellence shaping our future.
                  </p>
                  <p className="text-lg font-grotesk font-bold text-foreground">
                    Ummah100: A mirror for our community. A message to the world. A legacy for the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Celebrate;