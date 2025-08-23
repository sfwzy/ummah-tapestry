import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { StickyChapter } from '@/components/StickyChapter'
import { MediaReveal } from '@/components/MediaReveal'
import { MarqueeQuote } from '@/components/MarqueeQuote'
import { StatsRow } from '@/components/StatsRow'
import { CaseCard } from '@/components/CaseCard'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

// Import assets
import sketchImage from '@/assets/sketch-innovation.jpg'
import patternImage from '@/assets/pattern-tiles.jpg'
import communityImage from '@/assets/community-gathering.jpg'

const stats = [
  { number: '03', label: 'Countries' },
  { number: '24', label: 'Partners' },
  { number: '1M+', label: 'Lives Touched' },
  { number: '100+', label: 'Stories Shared' },
]

const caseStudies = [
  {
    title: 'Ummah100 Launch',
    description: 'Celebrating the top 100 Muslims shaping culture, business, and society today.',
    image: communityImage,
    href: '/work/ummah100',
    tags: ['Recognition', 'Community', 'Excellence']
  },
  {
    title: 'Global Podcast Series',
    description: 'Conversations with inspiring Muslims across business, technology, and beyond.',
    image: sketchImage,
    href: '/work/podcast',
    tags: ['Storytelling', 'Media', 'Inspiration']
  },
  {
    title: 'Research Initiative',
    description: 'Accessible research papers shining light on Muslim communities worldwide.',
    image: patternImage,
    href: '/work/research',
    tags: ['Research', 'Knowledge', 'Impact']
  },
]

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      
      {/* Hero Section */}
      <Hero />

      {/* Chapter 1: Our Story */}
      <StickyChapter
        kicker="Our Story"
        title="From Recognition to Community"
        mediaSlot={
          <MediaReveal 
            src={sketchImage}
            alt="Sketch of Muslim innovation and leadership"
            aspectRatio="landscape"
          />
        }
      >
        <p>
          We believe Muslims deserve to see themselves reflected in the highest light — as innovators, 
          leaders, and contributors to every field. Yet too often, these stories remain unseen or uncelebrated.
        </p>
        <p>
          622 Collective exists to change that. We create spaces where recognition fuels connection, 
          research sparks ideas, and community builds lasting change.
        </p>
      </StickyChapter>

      {/* Chapter 2: Our Process */}
      <StickyChapter
        kicker="Our Approach"
        title="Bridging Tradition and Innovation"
        reverse
        mediaSlot={
          <MediaReveal 
            src={patternImage}
            alt="Islamic geometric patterns representing tradition and modernity"
            aspectRatio="landscape"
          />
        }
      >
        <p>
          From hand-sketched ideas to global impact—our process is disciplined, iterative, and rooted in purpose. 
          We honor our rich heritage while embracing modern tools and platforms.
        </p>
        <p>
          Every initiative we launch is crafted with care, tested with our community, and designed to create 
          meaningful connections across generations and disciplines.
        </p>
      </StickyChapter>

      {/* Stats Section */}
      <StatsRow stats={stats} className="bg-secondary/10" />

      {/* Testimonial Marquee */}
      <MarqueeQuote
        quote="They listen with care—and deliver with precision. 622 Collective is building something truly special."
        author="Dr. Amina Hassan"
        role="Community Leader"
      />

      {/* Chapter 3: Our Impact */}
      <StickyChapter
        kicker="Our Impact"
        title="Building Community for Generations"
        mediaSlot={
          <MediaReveal 
            src={communityImage}
            alt="Muslim community gathering and networking"
            aspectRatio="landscape"
          />
        }
      >
        <p>
          Through podcasts, research, events, and recognition programs, we're creating a global platform 
          that celebrates Muslim excellence across every discipline and stage of life.
        </p>
        <p>
          Our work strengthens bonds, creates mentorship opportunities, and cultivates a sense of shared 
          purpose that drives collective progress for our communities worldwide.
        </p>
      </StickyChapter>

      {/* Case Studies Grid */}
      <section className="chapter-spacing">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
              Our Work
            </p>
            <h2 className="text-hero font-grotesk font-semibold text-foreground mb-6">
              Initiatives That Matter
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Each project we launch is designed to elevate voices, share knowledge, and build lasting connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseCard
                key={index}
                title={study.title}
                description={study.description}
                image={study.image}
                href={study.href}
                tags={study.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Join the Movement?"
        description="Be part of the platform that's elevating Muslims worldwide and creating lasting change."
        primaryCTA={{
          text: "Start a Conversation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Explore Our Work",
          href: "/work"
        }}
      />

      <Footer />
    </div>
  );
};

export default Index;