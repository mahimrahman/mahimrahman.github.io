import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const DesignPortfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: 'TechFlow Brand Identity',
      type: 'Brand Identity',
      year: '2024',
      description: 'Complete brand identity for a SaaS startup including logo, typography, color palette, and brand guidelines',
      services: ['Logo Design', 'Brand Guidelines', 'Typography', 'Color System'],
      image: '🎯',
      accent: 'primary',
    },
    {
      title: 'Summit Coffee Packaging',
      type: 'Packaging Design',
      year: '2024',
      description: 'Premium coffee packaging series featuring illustrated mountain landscapes and artisanal typography',
      services: ['Packaging Design', 'Illustration', 'Print Production'],
      image: '☕',
      accent: 'accent',
    },
    {
      title: 'Nexus Conference Materials',
      type: 'Print & Digital',
      year: '2023',
      description: 'Event branding and materials for tech conference including badges, signage, and digital assets',
      services: ['Event Branding', 'Print Design', 'Environmental Graphics'],
      image: '🎫',
      accent: 'purple',
    },
    {
      title: 'Urban Pulse Magazine',
      type: 'Editorial Design',
      year: '2023',
      description: 'Modern magazine layout design for urban lifestyle publication with bold typography and dynamic layouts',
      services: ['Editorial Layout', 'Typography', 'Art Direction'],
      image: '📰',
      accent: 'teal',
    },
    {
      title: 'Bloom Cosmetics',
      type: 'Brand & Packaging',
      year: '2023',
      description: 'Elegant brand identity and packaging for organic skincare line with nature-inspired aesthetics',
      services: ['Brand Strategy', 'Packaging', 'Product Photography'],
      image: '🌸',
      accent: 'terra',
    },
    {
      title: 'Pixel Perfect Icons',
      type: 'Icon Design',
      year: '2023',
      description: 'Comprehensive icon set with 200+ icons for productivity applications with multiple style variations',
      services: ['Icon Design', 'Vector Graphics', 'Design System'],
      image: '⚡',
      accent: 'primary',
    },
    {
      title: 'Festival Poster Series',
      type: 'Poster Design',
      year: '2022',
      description: 'Bold poster series for music festival featuring experimental typography and vibrant colors',
      services: ['Poster Design', 'Typography', 'Print Production'],
      image: '🎵',
      accent: 'purple',
    },
    {
      title: 'Minimal Watch Co.',
      type: 'Product Branding',
      year: '2022',
      description: 'Refined brand identity for luxury watch brand emphasizing craftsmanship and minimalist aesthetics',
      services: ['Brand Identity', 'Art Direction', 'Photography'],
      image: '⌚',
      accent: 'neutral',
    },
  ]

  const getAccentClasses = (accent: string) => {
    const classes: Record<string, any> = {
      primary: 'bg-gradient-to-br from-primary-500/20 to-primary-600/5 border-primary-500/30 hover:border-primary-400/50',
      accent: 'bg-gradient-to-br from-accent-500/20 to-accent-600/5 border-accent-500/30 hover:border-accent-400/50',
      purple: 'bg-gradient-to-br from-purple-500/20 to-purple-600/5 border-purple-500/30 hover:border-purple-400/50',
      teal: 'bg-gradient-to-br from-teal-500/20 to-teal-600/5 border-teal-500/30 hover:border-teal-400/50',
      terra: 'bg-gradient-to-br from-terra-500/20 to-terra-600/5 border-terra-500/30 hover:border-terra-400/50',
      neutral: 'bg-gradient-to-br from-neutral-700/20 to-neutral-800/5 border-neutral-600/30 hover:border-neutral-500/50',
    }
    return classes[accent] || classes.primary
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(90,143,72,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-primary-400 transition-colors mb-8 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">🎨</span>
              <div>
                <span className="inline-block px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-3 font-mono">
                  GRAPHIC DESIGN
                </span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-neutral-100">
                  Visual{' '}
                  <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-accent-500 bg-clip-text text-transparent">
                    Identity
                  </span>
                </h1>
              </div>
            </div>
            <p className="text-xl text-neutral-400 max-w-3xl">
              Creating compelling visual identities, brand systems, and design solutions that communicate and inspire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
              { icon: '🏷️', label: 'Branding' },
              { icon: '📦', label: 'Packaging' },
              { icon: '📄', label: 'Print Design' },
              { icon: '✏️', label: 'Illustration' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-neutral-900/30 border border-neutral-800/50 rounded-xl"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-sm text-neutral-400 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group"
              >
                <div className={`h-full p-8 ${getAccentClasses(project.accent)} backdrop-blur-sm border transition-all duration-500 rounded-2xl hover:shadow-2xl`}>
                  {/* Image/Icon Placeholder */}
                  <div className="relative mb-6 h-48 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-xl flex items-center justify-center overflow-hidden">
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 1,
                        rotate: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-8xl"
                    >
                      {project.image}
                    </motion.div>

                    {/* Overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <span className="px-4 py-2 bg-neutral-900/80 border border-neutral-700 rounded-lg text-neutral-100 text-sm font-medium">
                        View Project
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2.5 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-xs text-neutral-400 font-mono">
                      {project.type}
                    </span>
                    <span className="text-sm text-neutral-500 font-mono">{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-neutral-100 mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-neutral-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Services */}
                  <div className="space-y-1.5">
                    {project.services.map((service, sIndex) => (
                      <div key={sIndex} className="flex items-center gap-2 text-xs text-neutral-500">
                        <div className="w-1 h-1 rounded-full bg-primary-500"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-display font-bold text-neutral-100 mb-6">Design Philosophy</h2>
            <p className="text-xl text-neutral-400 leading-relaxed mb-12">
              Every design decision should serve a purpose. I believe in creating visual systems that are not only
              aesthetically pleasing but also functionally effective, strategically aligned, and built to last.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { title: 'Strategic', desc: 'Design aligned with business goals and user needs' },
                { title: 'Timeless', desc: 'Visual systems that transcend trends' },
                { title: 'Versatile', desc: 'Flexible solutions across all touchpoints' },
              ].map((principle, index) => (
                <div key={index} className="p-6 bg-neutral-900/30 border border-neutral-800/50 rounded-xl">
                  <h3 className="text-lg font-bold text-neutral-100 mb-2">{principle.title}</h3>
                  <p className="text-sm text-neutral-400">{principle.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-neutral-100 mb-6">
              Ready to elevate your brand?
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              Let's collaborate on creating a visual identity that stands out.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-neutral-950 font-bold rounded-xl hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105"
            >
              Start a Project
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default DesignPortfolio
