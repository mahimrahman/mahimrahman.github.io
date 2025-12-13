import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const UIUXPortfolio = () => {
  const projects = [
    {
      title: 'Banking App Redesign',
      category: 'Mobile UI/UX',
      year: '2024',
      description: 'Complete redesign of a mobile banking application focusing on accessibility and user trust',
      challenge: 'Simplify complex financial operations while maintaining security perception',
      solution: 'Implemented a card-based interface with biometric authentication and real-time transaction feedback',
      impact: '45% increase in daily active users, 60% reduction in support tickets',
      tools: ['Figma', 'Principle', 'Maze', 'UserTesting'],
      image: '💳',
      color: 'purple',
      size: 'large',
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Application',
      year: '2024',
      description: 'Analytics dashboard for B2B SaaS platform with complex data visualization',
      challenge: 'Present massive datasets in an intuitive, actionable format',
      solution: 'Developed a modular widget system with customizable views and smart insights',
      impact: '35% faster decision-making, 4.8/5 user satisfaction',
      tools: ['Sketch', 'InVision', 'After Effects'],
      image: '📊',
      color: 'teal',
      size: 'medium',
    },
    {
      title: 'E-Learning Platform',
      category: 'EdTech',
      year: '2023',
      description: 'Interactive learning platform for K-12 students with gamification',
      challenge: 'Engage young learners while ensuring educational effectiveness',
      solution: 'Created a playful design system with progress tracking and rewards',
      impact: '70% course completion rate, 90% student engagement',
      tools: ['Figma', 'ProtoPie', 'Notion'],
      image: '📚',
      color: 'primary',
      size: 'medium',
    },
    {
      title: 'Healthcare Portal',
      category: 'Patient Experience',
      year: '2023',
      description: 'Patient portal for scheduling, telemedicine, and health records',
      challenge: 'Design for diverse user groups including elderly patients',
      solution: 'Accessibility-first design with large touch targets and clear hierarchy',
      impact: '80% adoption rate among 65+ age group',
      tools: ['Adobe XD', 'Optimal Workshop'],
      image: '🏥',
      color: 'accent',
      size: 'large',
    },
    {
      title: 'Design System',
      category: 'Component Library',
      year: '2023',
      description: 'Comprehensive design system for enterprise product suite',
      challenge: 'Ensure consistency across 15+ products and 50+ developers',
      solution: 'Built a scalable component library with extensive documentation',
      impact: '60% faster design-to-development handoff',
      tools: ['Figma', 'Storybook', 'Zeroheight'],
      image: '🎨',
      color: 'purple',
      size: 'medium',
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile App',
      year: '2022',
      description: 'End-to-end experience for restaurant discovery and ordering',
      challenge: 'Streamline ordering process in a crowded market',
      solution: 'One-tap reordering, smart recommendations, real-time tracking',
      impact: '25% increase in repeat orders',
      tools: ['Figma', 'Lottie', 'Mixpanel'],
      image: '🍔',
      color: 'terra',
      size: 'small',
    },
  ]

  const getGridClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2'
      case 'medium':
        return 'md:col-span-1 md:row-span-1'
      case 'small':
        return 'md:col-span-1 md:row-span-1'
      default:
        return ''
    }
  }

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      purple: {
        bg: 'from-purple-500/20 to-purple-600/10',
        border: 'border-purple-500/30',
        hover: 'hover:border-purple-400/50',
        text: 'text-purple-400',
        bgAccent: 'bg-purple-500/10',
      },
      teal: {
        bg: 'from-teal-500/20 to-teal-600/10',
        border: 'border-teal-500/30',
        hover: 'hover:border-teal-400/50',
        text: 'text-teal-400',
        bgAccent: 'bg-teal-500/10',
      },
      primary: {
        bg: 'from-primary-500/20 to-primary-600/10',
        border: 'border-primary-500/30',
        hover: 'hover:border-primary-400/50',
        text: 'text-primary-400',
        bgAccent: 'bg-primary-500/10',
      },
      accent: {
        bg: 'from-accent-500/20 to-accent-600/10',
        border: 'border-accent-500/30',
        hover: 'hover:border-accent-400/50',
        text: 'text-accent-500',
        bgAccent: 'bg-accent-500/10',
      },
      terra: {
        bg: 'from-terra-500/20 to-terra-600/10',
        border: 'border-terra-500/30',
        hover: 'hover:border-terra-400/50',
        text: 'text-terra-400',
        bgAccent: 'bg-terra-500/10',
      },
    }
    return colors[color] || colors.purple
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(192,132,252,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-purple-400 transition-colors mb-8 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">✨</span>
              <div>
                <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-3 font-mono">
                  UI/UX DESIGN
                </span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-neutral-100">
                  User{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </h1>
              </div>
            </div>
            <p className="text-xl text-neutral-400 max-w-3xl">
              Crafting intuitive interfaces and delightful user experiences through research-driven design and iterative testing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-neutral-100 mb-8">Design Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Research', desc: 'User interviews, competitive analysis, personas' },
                { step: '02', title: 'Ideation', desc: 'Wireframes, user flows, information architecture' },
                { step: '03', title: 'Design', desc: 'Visual design, prototyping, design systems' },
                { step: '04', title: 'Test', desc: 'Usability testing, iteration, validation' },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50 rounded-xl"
                >
                  <div className="text-4xl font-display font-bold text-purple-500/20 mb-2">{phase.step}</div>
                  <h3 className="text-xl font-bold text-neutral-100 mb-2">{phase.title}</h3>
                  <p className="text-sm text-neutral-400">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Masonry Grid */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 auto-rows-auto">
            {projects.map((project, index) => {
              const colorClasses = getColorClasses(project.color)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group ${getGridClass(project.size)}`}
                >
                  <div className={`h-full p-8 bg-gradient-to-br ${colorClasses.bg} backdrop-blur-sm border ${colorClasses.border} rounded-2xl ${colorClasses.hover} transition-all duration-500 hover:shadow-2xl`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-5xl lg:text-6xl group-hover:scale-110 transition-transform duration-500">
                        {project.image}
                      </span>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 ${colorClasses.bgAccent} border ${colorClasses.border} rounded-lg ${colorClasses.text} text-xs font-medium font-mono mb-2`}>
                          {project.category}
                        </span>
                        <div className="text-neutral-500 text-sm font-mono">{project.year}</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-neutral-100 mb-3 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Details (for large cards) */}
                    {project.size === 'large' && (
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-bold text-neutral-300 mb-1">Challenge</h4>
                          <p className="text-sm text-neutral-400">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-neutral-300 mb-1">Solution</h4>
                          <p className="text-sm text-neutral-400">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-neutral-300 mb-1">Impact</h4>
                          <p className={`text-sm ${colorClasses.text} font-medium`}>{project.impact}</p>
                        </div>
                      </div>
                    )}

                    {/* Impact (for medium/small cards) */}
                    {project.size !== 'large' && (
                      <div className="mb-6">
                        <div className={`text-sm ${colorClasses.text} font-medium`}>{project.impact}</div>
                      </div>
                    )}

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-2.5 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-xs text-neutral-400 font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
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
              Need a designer for your project?
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              Let's create user experiences that your customers will love.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
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

export default UIUXPortfolio
