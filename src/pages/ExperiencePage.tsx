import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience')

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of enterprise-scale applications and mentoring junior developers',
      achievements: [
        'Architected and deployed microservices infrastructure serving 1M+ users',
        'Reduced application load time by 65% through performance optimization',
        'Led team of 5 developers in agile development environment',
        'Implemented CI/CD pipeline reducing deployment time by 80%',
      ],
      skills: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript', 'PostgreSQL'],
      icon: '💼',
      color: 'teal',
    },
    {
      title: 'UI/UX Designer',
      company: 'DesignLab Studio',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Creating user-centered designs for web and mobile applications',
      achievements: [
        'Redesigned flagship product increasing user engagement by 45%',
        'Established comprehensive design system used across 10+ products',
        'Conducted user research with 200+ participants',
        'Mentored 3 junior designers',
      ],
      skills: ['Figma', 'Sketch', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      icon: '🎨',
      color: 'purple',
    },
    {
      title: 'Freelance Developer & Designer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2018 - 2020',
      type: 'Freelance',
      description: 'Building custom solutions for startups and small businesses',
      achievements: [
        'Delivered 30+ projects for clients across 5 countries',
        'Maintained 5-star rating with 100% client satisfaction',
        'Specialized in e-commerce and SaaS platforms',
        'Generated $200K+ in revenue',
      ],
      skills: ['Full Stack Development', 'Brand Design', 'Client Management', 'WordPress'],
      icon: '🚀',
      color: 'primary',
    },
    {
      title: 'Junior Front-End Developer',
      company: 'StartupHub Inc',
      location: 'Austin, TX',
      period: '2017 - 2018',
      type: 'Full-time',
      description: 'Developing responsive web applications and collaborating with design team',
      achievements: [
        'Built 15+ responsive landing pages',
        'Improved website accessibility score from 65 to 95',
        'Collaborated with UX team to implement design systems',
        'Reduced bug count by 40% through comprehensive testing',
      ],
      skills: ['JavaScript', 'HTML/CSS', 'React', 'Git', 'Responsive Design'],
      icon: '💻',
      color: 'accent',
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      location: 'California, USA',
      period: '2013 - 2017',
      description: 'Focused on software engineering, algorithms, and human-computer interaction',
      achievements: [
        'Graduated with Honors (GPA: 3.8/4.0)',
        'President of Computer Science Student Association',
        'Research on Machine Learning applications',
        'Dean\'s List for 6 semesters',
      ],
      icon: '🎓',
    },
    {
      degree: 'Professional Certificate in UX Design',
      institution: 'Design Institute',
      location: 'Online',
      period: '2019',
      description: 'Comprehensive program covering user research, prototyping, and usability testing',
      achievements: [
        'Completed 12-week intensive program',
        'Created 5 portfolio-ready case studies',
        'Mastered Figma, Sketch, and Adobe XD',
      ],
      icon: '📜',
    },
  ]

  const skills = {
    technical: [
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'React/Next.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'AWS/Cloud', level: 75 },
      { name: 'Docker/Kubernetes', level: 70 },
    ],
    design: [
      { name: 'Figma', level: 95 },
      { name: 'Adobe Creative Suite', level: 90 },
      { name: 'UI/UX Design', level: 90 },
      { name: 'Prototyping', level: 85 },
      { name: 'Design Systems', level: 85 },
      { name: 'User Research', level: 80 },
    ],
  }

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      teal: 'border-teal-500/30 bg-teal-500/10',
      purple: 'border-purple-500/30 bg-purple-500/10',
      primary: 'border-primary-500/30 bg-primary-500/10',
      accent: 'border-accent-500/30 bg-accent-500/10',
    }
    return colors[color] || colors.primary
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.1),transparent_50%)]"></div>
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

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-neutral-100 mb-6">
              Experience &{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl">
              A journey of continuous learning, building, and creating across development, design, and photography.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 border-b border-neutral-800/50 mb-12">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-4 font-medium font-mono text-sm transition-all duration-300 relative ${
                activeTab === 'experience'
                  ? 'text-primary-400'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              WORK EXPERIENCE
              {activeTab === 'experience' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-4 font-medium font-mono text-sm transition-all duration-300 relative ${
                activeTab === 'education'
                  ? 'text-primary-400'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              EDUCATION
              {activeTab === 'education' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"
                />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'experience' ? (
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-neutral-700 to-transparent hidden md:block"></div>
                  )}

                  <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl ${getColorClasses(exp.color)} border flex items-center justify-center text-2xl`}>
                        {exp.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="p-8 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50 rounded-2xl hover:border-neutral-700/50 transition-all duration-500">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl font-display font-bold text-neutral-100 mb-1">
                              {exp.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-neutral-400">
                              <span className="font-medium">{exp.company}</span>
                              <span className="text-neutral-600">•</span>
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-start lg:items-end gap-2">
                            <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-sm text-neutral-300 font-mono">
                              {exp.period}
                            </span>
                            <span className="text-xs text-neutral-500 font-mono">{exp.type}</span>
                          </div>
                        </div>

                        <p className="text-neutral-400 mb-6">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-neutral-300 mb-3 font-mono">KEY ACHIEVEMENTS</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, aIndex) => (
                              <li key={aIndex} className="flex items-start gap-3 text-neutral-400 text-sm">
                                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, sIndex) => (
                            <span
                              key={sIndex}
                              className="px-3 py-1.5 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-xs text-neutral-400 font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50 rounded-2xl hover:border-neutral-700/50 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">{edu.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-display font-bold text-neutral-100 mb-1">
                            {edu.degree}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-neutral-400">
                            <span className="font-medium">{edu.institution}</span>
                            <span className="text-neutral-600">•</span>
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-sm text-neutral-300 font-mono">
                          {edu.period}
                        </span>
                      </div>

                      <p className="text-neutral-400 mb-6">
                        {edu.description}
                      </p>

                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, aIndex) => (
                          <li key={aIndex} className="flex items-start gap-3 text-neutral-400 text-sm">
                            <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold text-neutral-100 mb-12 text-center">Skills & Proficiency</h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Technical Skills */}
              <div>
                <h3 className="text-xl font-bold text-neutral-100 mb-6 flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {skills.technical.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-neutral-300 font-medium text-sm">{skill.name}</span>
                        <span className="text-neutral-500 text-sm font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-neutral-800/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Skills */}
              <div>
                <h3 className="text-xl font-bold text-neutral-100 mb-6 flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Design Skills
                </h3>
                <div className="space-y-4">
                  {skills.design.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-neutral-300 font-medium text-sm">{skill.name}</span>
                        <span className="text-neutral-500 text-sm font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-neutral-800/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
              Let's work together
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-neutral-950 font-bold rounded-xl hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105"
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

export default ExperiencePage
