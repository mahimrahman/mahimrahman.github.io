import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const DevelopmentPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      year: '2024',
      description: 'A comprehensive e-commerce solution with advanced features including real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      longDescription: 'Built with modern technologies to ensure scalability and performance. Features include user authentication, product catalog management, shopping cart functionality, order tracking, and integrated analytics.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
      image: '🛒',
      link: '#',
      github: '#',
      highlights: [
        'Real-time inventory sync across multiple warehouses',
        'Optimized checkout flow increasing conversion by 35%',
        'Admin dashboard with comprehensive analytics',
        'Multi-currency and payment gateway support',
      ],
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      category: 'Data Visualization',
      year: '2024',
      description: 'Interactive dashboard leveraging machine learning to provide actionable insights from complex datasets.',
      longDescription: 'Advanced analytics platform that processes millions of data points to generate predictive insights. Features custom visualization components and real-time data streaming.',
      tech: ['Next.js', 'Python', 'TensorFlow', 'D3.js', 'MongoDB', 'WebSocket'],
      image: '📊',
      link: '#',
      github: '#',
      highlights: [
        'Custom ML models for predictive analytics',
        'Real-time data visualization with D3.js',
        'Handles 10M+ data points efficiently',
        'Export reports in multiple formats',
      ],
    },
    {
      title: 'Collaborative Task Management',
      category: 'Productivity',
      year: '2023',
      description: 'Real-time collaboration tool for teams with advanced project management features.',
      longDescription: 'A sophisticated project management platform enabling seamless team collaboration with features like real-time updates, task dependencies, time tracking, and integrations with popular tools.',
      tech: ['Vue.js', 'Firebase', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      image: '✅',
      link: '#',
      github: '#',
      highlights: [
        'Real-time collaborative editing',
        'Kanban and Gantt chart views',
        'Third-party integrations (Slack, GitHub)',
        'Advanced permission system',
      ],
    },
    {
      title: 'Social Media Automation Tool',
      category: 'SaaS',
      year: '2023',
      description: 'Multi-platform social media management and automation suite for content creators and businesses.',
      longDescription: 'Comprehensive social media management platform with scheduling, analytics, and AI-powered content suggestions. Supports major platforms including Twitter, Instagram, LinkedIn, and Facebook.',
      tech: ['React', 'Express', 'MongoDB', 'AWS', 'OAuth', 'OpenAI API'],
      image: '📱',
      link: '#',
      github: '#',
      highlights: [
        'Schedule posts across 5+ platforms',
        'AI-generated content suggestions',
        'Comprehensive analytics and reporting',
        'Team collaboration features',
      ],
    },
    {
      title: 'Video Streaming Platform',
      category: 'Media',
      year: '2023',
      description: 'Custom video streaming service with adaptive bitrate streaming and CDN integration.',
      longDescription: 'High-performance video platform supporting HD and 4K streaming with features like live streaming, video transcoding, user subscriptions, and content monetization.',
      tech: ['React', 'Go', 'FFmpeg', 'AWS S3', 'CloudFront', 'PostgreSQL'],
      image: '🎬',
      link: '#',
      github: '#',
      highlights: [
        'Adaptive bitrate streaming (HLS)',
        'Live streaming capabilities',
        'Video transcoding pipeline',
        'Subscription and payment integration',
      ],
    },
    {
      title: 'Healthcare Appointment System',
      category: 'Healthcare',
      year: '2022',
      description: 'HIPAA-compliant appointment scheduling and telemedicine platform for healthcare providers.',
      longDescription: 'Secure healthcare platform featuring appointment booking, video consultations, electronic health records, and prescription management with full HIPAA compliance.',
      tech: ['Angular', 'NestJS', 'PostgreSQL', 'WebRTC', 'Socket.io'],
      image: '🏥',
      link: '#',
      github: '#',
      highlights: [
        'HIPAA-compliant architecture',
        'Integrated video consultation',
        'Electronic health records (EHR)',
        'Automated appointment reminders',
      ],
    },
  ]

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-teal-400 transition-colors mb-8 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">⌨️</span>
              <div>
                <span className="inline-block px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-3 font-mono">
                  DEVELOPMENT
                </span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-neutral-100">
                  Technical{' '}
                  <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h1>
              </div>
            </div>
            <p className="text-xl text-neutral-400 max-w-3xl">
              Full-stack applications, web experiences, and technical solutions built with modern technologies and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className="relative p-8 lg:p-10 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl hover:border-teal-500/30 transition-all duration-500 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:to-transparent transition-all duration-500"></div>

                  <div className="relative">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                      <div className="flex items-start gap-6">
                        <div className="text-6xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                          {project.image}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-3xl font-display font-bold text-neutral-100 group-hover:text-teal-400 transition-colors">
                              {project.title}
                            </h3>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-lg text-teal-400 font-mono">
                              {project.category}
                            </span>
                            <span className="text-neutral-500 font-mono">{project.year}</span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-lg hover:bg-teal-500/20 transition-colors text-sm font-medium"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 bg-neutral-800/50 border border-neutral-700/50 text-neutral-300 rounded-lg hover:bg-neutral-800/80 transition-colors text-sm font-medium"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-sm text-neutral-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Details */}
                    <motion.div
                      initial={false}
                      animate={{ height: selectedProject === index ? 'auto' : 0, opacity: selectedProject === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-neutral-800/50">
                        <h4 className="text-xl font-bold text-neutral-100 mb-4">Project Details</h4>
                        <p className="text-neutral-400 mb-6 leading-relaxed">
                          {project.longDescription}
                        </p>

                        <h4 className="text-lg font-bold text-neutral-100 mb-3">Key Highlights</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-3 text-neutral-400">
                              <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Expand Indicator */}
                    <div className="flex items-center justify-center mt-6 pt-6 border-t border-neutral-800/50">
                      <motion.svg
                        className="w-6 h-6 text-teal-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ rotate: selectedProject === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Interested in working together?
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              Let's discuss how I can help bring your project to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
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

export default DevelopmentPortfolio
