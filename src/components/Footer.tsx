'use client'

import { Link } from 'react-router-dom'
import { Mail, Twitter, Instagram, Linkedin } from 'lucide-react'

const footerLinks = [
  {
    title: 'Platform',
    links: [
      { label: 'Think', href: '/think' },
      { label: 'Learn', href: '/learn' },
      { label: 'Gather', href: '/gather' },
      { label: 'Celebrate', href: '/celebrate' },
    ]
  },
  {
    title: '622 Collective',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Press', href: '/press' },
      { label: 'Careers', href: '/careers' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ]
  }
]

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/622collective', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/622collective', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/622collective', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@622collective.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-xl font-grotesk font-bold text-foreground hover:text-accent transition-colors">
              622 Collective
            </Link>
            <p className="text-muted-foreground mt-4 text-base">
              Celebrating Muslim excellence, advancing ideas, and building community.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-accent transition-colors rounded-full hover:bg-secondary"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-grotesk font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors text-body"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-small text-muted-foreground">
            © 2024 622 Collective. All rights reserved.
          </p>
          <p className="text-small text-muted-foreground">
            Made with purpose and precision.
          </p>
        </div>
      </div>
    </footer>
  )
}