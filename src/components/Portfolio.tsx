import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'Professional Portfolio',
      category: 'web',
      description: 'A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and interactive elements.',
      image: '💻',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
    },
    {
      title: 'E-Commerce Solution',
      category: 'web',
      description: 'Full-stack e-commerce platform with secure payment processing, user authentication, and inventory management.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      title: 'Task Management System',
      category: 'web',
      description: 'Collaborative project management tool with real-time updates, task assignment, and progress tracking.',
      image: '📋',
      tags: ['React', 'Firebase', 'Material UI', 'Redux'],
      link: '#',
    },
    {
      title: 'Data Analytics Dashboard',
      category: 'data',
      description: 'Interactive dashboard for visualizing complex datasets, providing actionable insights through charts and graphs.',
      image: '📊',
      tags: ['Python', 'Pandas', 'React', 'D3.js'],
      link: '#',
    },
    {
      title: 'Mobile App UI Kit',
      category: 'design',
      description: 'Comprehensive UI kit for mobile applications, including design system, component library, and high-fidelity prototypes.',
      image: '📱',
      tags: ['Figma', 'UI/UX', 'Prototyping', 'Design System'],
      link: '#',
    },
    {
      title: 'API Gateway Service',
      category: 'web',
      description: 'Scalable API gateway handling authentication, rate limiting, and request routing for microservices architecture.',
      image: '⚙️',
      tags: ['Node.js', 'Express', 'Docker', 'Redis'],
      link: '#',
    },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'data', label: 'Data Analysis' },
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="portfolio" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900/50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Featured
            <span className="block text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filterItem) => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === filterItem.id
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/50 scale-105'
                  : 'glass text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {filterItem.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl group-hover:scale-125 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-accent-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.link}
                      className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:scale-110 transition-transform"
                    >
                      View Project
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6 text-lg">
            Want to see more of my work?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
