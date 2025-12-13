import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
      achievements: [
        'Built and deployed 5+ production applications',
        'Improved application performance by 40%',
        'Led a team of 4 developers',
      ],
    },
    {
      role: 'UI/UX Designer & Developer',
      company: 'Creative Studio',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: 'Designed and developed user interfaces for web and mobile applications.',
      achievements: [
        'Designed 20+ user interfaces',
        'Increased user engagement by 60%',
        'Conducted user research and testing',
      ],
    },
    {
      role: 'Junior Developer',
      company: 'Startup XYZ',
      period: '2019 - 2020',
      location: 'San Francisco, CA',
      description: 'Developed features for SaaS platform using modern web technologies.',
      achievements: [
        'Implemented 50+ features',
        'Reduced bug reports by 30%',
        'Collaborated with cross-functional teams',
      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900/50"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Professional
            <span className="block text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="glass p-6 lg:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gradient transition-all">
                          {exp.role}
                        </h3>
                        <p className="text-primary-400 font-semibold mb-1">{exp.company}</p>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400">
                          <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 shadow-lg shadow-primary-500/50 group-hover:scale-150 transition-transform"></div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
