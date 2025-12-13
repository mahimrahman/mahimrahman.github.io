import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import About from '../components/About'
import Skills from '../components/Skills'

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const roles = [
    { text: 'Developer', color: 'from-teal-400 to-teal-600' },
    { text: 'Designer', color: 'from-purple-400 to-purple-600' },
    { text: 'Photographer', color: 'from-terra-400 to-terra-600' },
    { text: 'Creator', color: 'from-primary-400 to-accent-500' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const portfolioCategories = [
    {
      title: 'Development',
      description: 'Full-stack applications, web experiences, and technical solutions',
      icon: '⌨️',
      color: 'teal',
      link: '/development',
      gradient: 'from-teal-500/20 to-teal-600/10',
      borderColor: 'border-teal-500/30',
      hoverGradient: 'hover:from-teal-500/30 hover:to-teal-600/20',
    },
    {
      title: 'UI/UX Design',
      description: 'Interface design, user experiences, and design systems',
      icon: '✨',
      color: 'purple',
      link: '/uiux',
      gradient: 'from-purple-500/20 to-purple-600/10',
      borderColor: 'border-purple-500/30',
      hoverGradient: 'hover:from-purple-500/30 hover:to-purple-600/20',
    },
    {
      title: 'Graphic Design',
      description: 'Brand identities, visual assets, and creative direction',
      icon: '🎨',
      color: 'primary',
      link: '/design',
      gradient: 'from-primary-500/20 to-accent-500/10',
      borderColor: 'border-primary-500/30',
      hoverGradient: 'hover:from-primary-500/30 hover:to-accent-500/20',
    },
    {
      title: 'Photography',
      description: 'Visual storytelling through the lens',
      icon: '📸',
      color: 'terra',
      link: '/photography',
      gradient: 'from-terra-500/20 to-terra-600/10',
      borderColor: 'border-terra-500/30',
      hoverGradient: 'hover:from-terra-500/30 hover:to-terra-600/20',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>

          {/* Animated Grain Texture */}
          <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]"></div>
          </div>

          {/* Floating Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Parallax Shapes */}
          <motion.div
            className="absolute top-20 right-20 w-2 h-2 bg-primary-500 rounded-full"
            style={{
              x: mousePosition.x * 0.02,
              y: mousePosition.y * 0.02,
            }}
          />
          <motion.div
            className="absolute bottom-40 left-40 w-3 h-3 bg-accent-500 rounded-full"
            style={{
              x: mousePosition.x * -0.03,
              y: mousePosition.y * -0.03,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block mb-8"
            >
              <span className="px-5 py-2.5 bg-gradient-to-r from-neutral-800/80 to-neutral-800/40 backdrop-blur-sm border border-neutral-700/50 rounded-full text-sm font-medium text-neutral-300 shadow-lg shadow-neutral-900/50">
                <span className="inline-block animate-wave origin-[70%_70%]">👋</span> Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-display font-bold mb-4">
                <span className="block text-neutral-100 mb-2">Creative</span>
                <span className={`block bg-gradient-to-r ${roles[currentRole].color} bg-clip-text text-transparent transition-all duration-500`}>
                  {roles[currentRole].text}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
            >
              Building digital experiences at the intersection of{' '}
              <span className="text-teal-400 font-medium">technology</span>,{' '}
              <span className="text-purple-400 font-medium">design</span>, and{' '}
              <span className="text-primary-400 font-medium">creativity</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link
                to="/experience"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-neutral-950 font-bold rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Experience
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 bg-neutral-800/50 backdrop-blur-sm border-2 border-neutral-700/50 text-neutral-100 font-bold rounded-xl hover:bg-neutral-800/80 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm text-neutral-500 font-mono">Explore Portfolio</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Categories Grid */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6 font-mono">
              PORTFOLIO
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-neutral-100 mb-6">
              Explore My Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {portfolioCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={category.link}>
                  <div className={`group relative p-8 lg:p-10 bg-gradient-to-br ${category.gradient} backdrop-blur-sm border ${category.borderColor} rounded-2xl overflow-hidden transition-all duration-500 ${category.hoverGradient} hover:border-${category.color}-400/50 hover:shadow-2xl hover:shadow-${category.color}-500/10`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
                    </div>

                    {/* Icon */}
                    <div className="relative mb-6">
                      <span className="text-6xl lg:text-7xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500 inline-block">
                        {category.icon}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-3xl lg:text-4xl font-display font-bold text-neutral-100 mb-3 group-hover:text-white transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-neutral-400 text-lg mb-6 group-hover:text-neutral-300 transition-colors">
                        {category.description}
                      </p>

                      {/* Arrow */}
                      <div className="flex items-center gap-2 text-neutral-500 group-hover:text-primary-400 transition-colors">
                        <span className="font-medium text-sm font-mono">VIEW PROJECTS</span>
                        <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-${category.color}-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(90,143,72,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-neutral-100 mb-6">
              Let's Create{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-neutral-950 font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105"
            >
              Start a Conversation
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
