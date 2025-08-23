import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { slideUpVariants, staggerContainer } from '@/lib/animation'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@622collective.com',
    href: 'mailto:hello@622collective.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 622-COLLECTIVE', 
    href: 'tel:+15556226653'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Global Community',
    href: null
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

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
            Contact Us
          </motion.p>

          <motion.h1
            variants={slideUpVariants}
            className="text-display font-grotesk font-bold text-foreground mb-8 max-w-4xl mx-auto"
          >
            Let's Start a <span className="text-accent">Conversation</span>
          </motion.h1>

          <motion.p
            variants={slideUpVariants}
            className="text-large text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Whether you have a story to share, want to get involved, or are interested in collaborating, 
            we'd love to hear from you.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-hero font-grotesk font-semibold text-foreground mb-8">
                Get in Touch
              </h2>
              <p className="text-body text-muted-foreground mb-12">
                We're always excited to connect with community members, potential partners, 
                and anyone passionate about celebrating Muslim excellence.
              </p>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-grotesk font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="podcast">Podcast Appearance</option>
                    <option value="ummah100">Ummah100 Nomination</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="research">Research Collaboration</option>
                    <option value="events">Event Participation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-grotesk font-semibold text-foreground mb-4">
                  Quick Links
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a href="/ummah100" className="btn-ghost text-sm">
                    Nominate for Ummah100
                  </a>
                  <a href="/podcast" className="btn-ghost text-sm">
                    Suggest Podcast Guest
                  </a>
                  <a href="/events" className="btn-ghost text-sm">
                    Join Our Events
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;