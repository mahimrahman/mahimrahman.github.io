import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { number: '12+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '4+', label: 'Domains of Expertise' },
    { number: '15+', label: 'Technologies Mastered' },
  ]

  return (
    <section id="about" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Turning Ideas Into
            <span className="block text-gradient">Digital Reality</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary-500 rounded-tl-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-accent-500 rounded-br-3xl"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-1">
                <div className="w-full h-full rounded-xl bg-slate-800 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -right-6 top-1/4 glass px-6 py-4 rounded-xl shadow-xl"
              >
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-sm text-slate-400">Years Exp.</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-bold text-white">
              Software Engineer & {' '}
              <span className="text-gradient">Full-Stack Developer</span>
            </h3>

            <p className="text-lg text-slate-400 leading-relaxed">
              Software Engineering graduate with a strong foundation in IT solutions, project
              management, and data analysis. I am driven to transform complex challenges into
              elegant solutions through innovative thinking and continuous learning.
            </p>

            <p className="text-lg text-slate-400 leading-relaxed">
              Specialized in full-stack development, UI/UX design, and data-driven decision
              making. I am passionate about creating impactful digital experiences and committed
              to collaborative excellence, bringing teams together to deliver solutions that
              drive real-world impact.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105">
                Download Resume
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
