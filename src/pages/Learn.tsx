import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { slideUpVariants, staggerContainer } from '@/lib/animation'

const Learn = () => {
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
            <span className="text-accent">Learn</span> — Stories that inform, inspire, and connect.
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
                  Through our media arm, we bring Muslim excellence to life across formats that meet people where they are. From long-form podcasts to short-form video series, our goal is to create a trusted home for Muslim voices, stories, and ideas.
                </p>
              </div>

              <div className="grid gap-12">
                {/* Podcasts Section */}
                <div>
                  <h3 className="text-2xl font-grotesk font-semibold text-foreground mb-4">Podcasts</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Our flagship podcast features in-depth conversations with inspiring Muslims across business, technology, healthcare, government, arts, and culture. Each episode surfaces untold stories, career paths, and lessons learned — building a living archive of role models for the next generation.
                  </p>
                </div>

                {/* Videos Section */}
                <div>
                  <h3 className="text-2xl font-grotesk font-semibold text-foreground mb-4">Videos</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    From short storytelling clips to cinematic features, our video content translates Muslim narratives into shareable, engaging formats. Whether you're watching a behind-the-scenes interview, a thought-provoking mini-documentary, or an inspiring profile, our videos are crafted to educate, entertain, and spark dialogue.
                  </p>
                </div>

                {/* Media Platform Section */}
                <div>
                  <h3 className="text-2xl font-grotesk font-semibold text-foreground mb-4">Media Platform</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Beyond individual shows, Learn serves as our media hub: a growing library of podcasts, videos, and digital storytelling designed to amplify Muslim voices and expand representation. By curating diverse stories and perspectives, we ensure that our community's brilliance is documented, accessible, and celebrated.
                  </p>
                </div>
              </div>

              <div className="text-center mt-16">
                <p className="text-lg font-grotesk font-medium text-accent">
                  Learn is where discovery begins — a space for Muslims everywhere to hear each other, see each other, and be inspired by one another.
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

export default Learn;