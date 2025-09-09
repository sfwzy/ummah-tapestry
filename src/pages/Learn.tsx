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
            className="text-display font-grotesk text-foreground mb-8 leading-none"
          >
            <span className="text-accent">Learn</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={slideUpVariants}
            className="text-large text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Stories that inform, inspire, and connect.
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
                  Through our media arm, we bring Muslim excellence to life across formats that meet people where they are. From long-form podcasts to short-form video series, our goal is to create a trusted home for Muslim voices, stories, and ideas.
                </p>
              </div>

              {/* Podcasts Section */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">🎙️</span>
                  <div>
                    <h3 className="text-hero font-grotesk font-semibold text-foreground mb-4">Podcasts</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      Our flagship podcast features in-depth conversations with inspiring Muslims across business, technology, healthcare, government, arts, and culture. Each episode surfaces untold stories, career paths, and lessons learned — building a living archive of role models for the next generation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Videos Section */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">🎥</span>
                  <div>
                    <h3 className="text-hero font-grotesk font-semibold text-foreground mb-4">Videos</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      From short storytelling clips to cinematic features, our video content translates Muslim narratives into shareable, engaging formats. Whether you're watching a behind-the-scenes interview, a thought-provoking mini-documentary, or an inspiring profile, our videos are crafted to educate, entertain, and spark dialogue.
                    </p>
                  </div>
                </div>
              </div>

              {/* Media Platform Section */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📰</span>
                  <div>
                    <h3 className="text-hero font-grotesk font-semibold text-foreground mb-4">Media Platform</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      Beyond individual shows, Learn serves as our media hub: a growing library of podcasts, videos, and digital storytelling designed to amplify Muslim voices and expand representation. By curating diverse stories and perspectives, we ensure that our community's brilliance is documented, accessible, and celebrated.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-16">
                <p className="text-large font-grotesk font-medium text-accent">
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