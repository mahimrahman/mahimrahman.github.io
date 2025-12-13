import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ParticlesBackground from './ParticlesBackground'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ['Software Engineer', 'UI/UX Designer', 'Creative Developer', 'Problem Solver']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-primary-300">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold mb-6"
          >
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="block text-gradient glow-text">
              Your Name Here
            </span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            variants={itemVariants}
            className="h-16 sm:h-20 mb-8 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300"
              >
                {roles[currentRole]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Crafting exceptional digital experiences through innovative design and
            cutting-edge technology. Let's build something amazing together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: 'github', href: '#' },
              { icon: 'linkedin', href: '#' },
              { icon: 'twitter', href: '#' },
              { icon: 'dribbble', href: '#' },
            ].map((social) => (
              <motion.a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:border-transparent transition-all duration-300"
              >
                <span className="text-xl">{social.icon[0].toUpperCase()}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-slate-400">Scroll Down</span>
            <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
