import { motion } from 'framer-motion'
import { useState } from 'react'
import InteractiveBackground from '../components/InteractiveBackground'
import PortfolioModal from '../components/PortfolioModal'
import ImageGalleryModal from '../components/ImageGalleryModal'

const HomeNew = () => {
  const [devModalOpen, setDevModalOpen] = useState(false)
  const [uiuxModalOpen, setUiuxModalOpen] = useState(false)
  const [designModalOpen, setDesignModalOpen] = useState(false)
  const [photoModalOpen, setPhotoModalOpen] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState<any[]>([])
  const [galleryIndex, setGalleryIndex] = useState(0)

  const openGallery = (images: any[], index: number = 0) => {
    setGalleryImages(images)
    setGalleryIndex(index)
    setGalleryOpen(true)
  }

  // Portfolio data
  const portfolioCategories = [
    {
      id: 'development',
      title: 'Development',
      icon: '💻',
      description: 'Web & Mobile Applications',
      gradient: 'from-dev-500/20 to-dev-600/10',
      color: 'dev',
      onClick: () => setDevModalOpen(true),
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      icon: '✨',
      description: 'User Experience & Interfaces',
      gradient: 'from-uiux-500/20 to-uiux-600/10',
      color: 'uiux',
      onClick: () => setUiuxModalOpen(true),
    },
    {
      id: 'design',
      title: 'Graphic Design',
      icon: '🎨',
      description: 'Brand Identity & Visuals',
      gradient: 'from-design-500/20 to-design-600/10',
      color: 'design',
      onClick: () => setDesignModalOpen(true),
    },
    {
      id: 'photography',
      title: 'Photography',
      icon: '📸',
      description: 'Visual Storytelling',
      gradient: 'from-photo-500/20 to-photo-600/10',
      color: 'photo',
      onClick: () => setPhotoModalOpen(true),
    },
  ]

  // Skills data (no progress bars)
  const skillCategories = [
    {
      title: 'Development',
      icon: '⚡',
      color: 'dev',
      skills: ['React & Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'],
    },
    {
      title: 'Design',
      icon: '🎯',
      color: 'uiux',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Design Systems', 'User Research'],
    },
    {
      title: 'Creative',
      icon: '🌟',
      color: 'design',
      skills: ['Photoshop', 'Illustrator', 'After Effects', 'Branding', 'Typography'],
    },
    {
      title: 'Tools',
      icon: '🛠️',
      color: 'photo',
      skills: ['Git', 'VS Code', 'Jira', 'Notion', 'Postman', 'Analytics'],
    },
  ]

  // Experience data (compact cards)
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      type: 'Full-time',
      icon: '💼',
      color: 'dev',
    },
    {
      title: 'UI/UX Designer',
      company: 'DesignLab',
      period: '2020 - 2022',
      type: 'Full-time',
      icon: '🎨',
      color: 'uiux',
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: '2018 - 2020',
      type: 'Freelance',
      icon: '🚀',
      color: 'design',
    },
  ]

  const education = [
    {
      degree: 'B.S. Computer Science',
      institution: 'University of Technology',
      period: '2013 - 2017',
      icon: '🎓',
    },
    {
      degree: 'UX Design Certificate',
      institution: 'Design Institute',
      period: '2019',
      icon: '📜',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <InteractiveBackground />

        {/* Gradient Overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary-500/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent-500/10 to-transparent blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-8"
            >
              <span className="px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium backdrop-blur-sm">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-6">
              <span className="block text-white mb-2">Creative Developer</span>
              <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
                & Designer
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Crafting digital experiences through code, design, and creativity
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#portfolio"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 text-white font-bold rounded-xl hover:bg-neutral-800/80 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-neutral-500">Scroll</span>
            <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-32 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-neutral-400">
              Explore my latest projects across different disciplines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={category.onClick}
                className="group relative p-10 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50 rounded-2xl hover:border-neutral-700 transition-all duration-500 text-left overflow-hidden"
              >
                {/* Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative">
                  {/* Icon */}
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-neutral-400 mb-6">
                    {category.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-neutral-500 group-hover:text-primary-400 transition-colors">
                    <span className="text-sm font-medium font-mono">VIEW PROJECTS</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section (No Progress Bars) */}
      <section id="skills" className="relative py-32 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-neutral-400">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-neutral-800/30 border border-neutral-700/50 rounded-2xl hover:border-neutral-600 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-display font-bold text-white mb-6">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 text-neutral-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-${category.color}-500`}></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section (Compact Cards) */}
      <section id="experience" className="relative py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-white mb-4">
              Experience
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-neutral-900/50 border border-neutral-800/50 rounded-xl hover:border-neutral-700 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{exp.icon}</div>
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-neutral-400 mb-2">{exp.company}</p>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.type}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-bold text-white">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-neutral-900/50 border border-neutral-800/50 rounded-xl"
              >
                <div className="text-4xl mb-4">{edu.icon}</div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-neutral-400 mb-2">{edu.institution}</p>
                <p className="text-sm text-neutral-500">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-neutral-400 mb-12">
              Have a project in mind? Let's create something amazing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="mailto:hello@example.com"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 text-white font-bold rounded-xl hover:bg-neutral-800/80 transition-all duration-300 hover:scale-105"
              >
                LinkedIn
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              {[
                { icon: '💼', label: 'LinkedIn', href: '#' },
                { icon: '🐙', label: 'GitHub', href: '#' },
                { icon: '🐦', label: 'Twitter', href: '#' },
                { icon: '📷', label: 'Instagram', href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-primary-500/50 hover:bg-neutral-800/80 transition-all duration-300 text-2xl"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 bg-neutral-950 border-t border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-500 text-sm">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>

      {/* Modals */}
      <PortfolioModal
        isOpen={devModalOpen}
        onClose={() => setDevModalOpen(false)}
        title="Development Projects"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-6 bg-neutral-800/30 rounded-xl border border-neutral-700/50">
              <div className="aspect-video bg-neutral-800 rounded-lg mb-4 flex items-center justify-center text-6xl">
                💻
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Project {i}</h3>
              <p className="text-neutral-400 mb-4">A full-stack web application with modern architecture</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-dev-500/10 border border-dev-500/20 text-dev-400 text-xs rounded-lg">React</span>
                <span className="px-3 py-1 bg-dev-500/10 border border-dev-500/20 text-dev-400 text-xs rounded-lg">Node.js</span>
              </div>
            </div>
          ))}
        </div>
      </PortfolioModal>

      <PortfolioModal
        isOpen={uiuxModalOpen}
        onClose={() => setUiuxModalOpen(false)}
        title="UI/UX Design Projects"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-6 bg-neutral-800/30 rounded-xl border border-neutral-700/50">
              <div className="aspect-video bg-neutral-800 rounded-lg mb-4 flex items-center justify-center text-6xl">
                ✨
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Design Case Study {i}</h3>
              <p className="text-neutral-400 mb-4">User-centered design with comprehensive research</p>
              <button className="text-uiux-400 hover:text-uiux-300 transition-colors text-sm font-medium">
                View Prototype →
              </button>
            </div>
          ))}
        </div>
      </PortfolioModal>

      <PortfolioModal
        isOpen={designModalOpen}
        onClose={() => setDesignModalOpen(false)}
        title="Graphic Design"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <button
              key={i}
              onClick={() => openGallery([
                { id: 1, title: 'Brand Identity', category: 'Branding', placeholder: '🎨' },
                { id: 2, title: 'Poster Design', category: 'Print', placeholder: '🖼️' },
                { id: 3, title: 'Logo Collection', category: 'Logos', placeholder: '🏷️' },
              ], i - 1)}
              className="aspect-square bg-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center text-6xl"
            >
              🎨
            </button>
          ))}
        </div>
      </PortfolioModal>

      <PortfolioModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        title="Photography"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <button
              key={i}
              onClick={() => openGallery([
                { id: 1, title: 'Urban Landscape', category: 'Street', placeholder: '🌆', description: 'City lights at golden hour' },
                { id: 2, title: 'Portrait Series', category: 'Portrait', placeholder: '👤', description: 'Natural light portraiture' },
                { id: 3, title: 'Mountain Vista', category: 'Landscape', placeholder: '🏔️', description: 'Dawn in the Alps' },
              ], i - 1)}
              className="aspect-square bg-neutral-800 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center text-6xl"
            >
              📸
            </button>
          ))}
        </div>
      </PortfolioModal>

      {galleryOpen && (
        <ImageGalleryModal
          images={galleryImages}
          initialIndex={galleryIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </div>
  )
}

export default HomeNew
