import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience')

  const experiences = [
    {
      title: 'Public Relations Team Member',
      company: 'Volunteer for Bangladesh, JAAGO Foundation',
      location: 'Dhaka, Bangladesh',
      period: 'May 2015 – July 2019',
      type: 'Bangladesh',
      description: 'Worked with JAAGO Foundation\'s youth wing to develop and implement campaigns aligned with the UN Sustainable Development Goals (SDGs), promoting quality education, gender equality, and climate awareness.',
      achievements: [
        'Coordinated public outreach and social media, creating effective design and written content using Canva and comparable tools.',
        'Coordinated community outreach programs and awareness campaigns, managing logistics, volunteers, and impact evaluations.',
        'Received multiple awards for leadership, innovation, and outstanding contribution to advancing community impact.',
      ],
      skills: ['Public Relations', 'Social Media', 'Canva', 'Campaigns', 'Community Outreach', 'SDGs'],
      icon: '🇧🇩',
      color: 'accent',
    },
    {
      title: 'VP - Events',
      company: 'Best Buddies Concordia',
      location: 'Montreal, QC, Canada',
      period: 'Jan 2024 - May 2025',
      type: 'Canada',
      description: 'Plan and execute inclusive events for the Best Buddies Concordia Chapter, promoting friendships and social inclusion for individuals with intellectual and developmental disabilities.',
      achievements: [
        'Planned and executed inclusive events promoting friendships and social inclusion.',
        'Collaborated with team members and community partners to design engaging activities.',
        'Managed event logistics and day-of coordination to support accessible participation.',
      ],
      skills: ['Event Planning', 'Community Engagement', 'Accessibility', 'Team Collaboration'],
      icon: '🇨🇦',
      color: 'teal',
    },
    {
      title: 'Peer Ambassador',
      company: 'Sexual Assault Resource Center (SARC) - Concordia University',
      location: 'Montreal, QC, Canada',
      period: 'Aug 2024 - Present',
      type: 'Canada',
      description: 'Provide compassionate support and connect survivors of sexual assault to essential resources. Raise awareness about sexual violence through prevention initiatives and advocacy.',
      achievements: [
        'Provided compassionate support and connected survivors to essential resources.',
        'Raised awareness through prevention initiatives and advocacy.',
        'Collaborated with campus organizations to foster a safe, inclusive environment.',
      ],
      skills: ['Peer Support', 'Advocacy', 'Prevention Education', 'Collaboration'],
      icon: '🇨🇦',
      color: 'purple',
    },
    {
      title: 'Portfolio Member - Finance',
      company: 'AIESEC Concordia',
      location: 'Montreal, QC, Canada',
      period: 'July 2024 - Aug 2025',
      type: 'Canada',
      description: 'Manage and oversee financial activities, including budgeting, financial planning, and expense tracking.',
      achievements: [
        'Supported budgeting and financial planning for chapter initiatives.',
        'Tracked expenses and maintained organized records for reporting.',
        'Helped ensure transparency and accountability across financial activities.',
      ],
      skills: ['Budgeting', 'Financial Planning', 'Expense Tracking'],
      icon: '🇨🇦',
      color: 'primary',
    },
    {
      title: 'Project Manager',
      company: 'TECH-NEST',
      location: 'Montreal, QC, Canada',
      period: 'Jan 2025 - Aug 2025',
      type: 'Canada',
      description: 'Led TECH-NEST as Project Manager for the Forces AVENIR Competition, overseeing a multidisciplinary team and project execution from concept to delivery.',
      achievements: [
        'Coordinated planning, stakeholder engagement, and team collaboration.',
        'Managed project execution from concept to delivery with clear milestones.',
        'Drove innovative solutions and impactful outcomes through structured teamwork.',
      ],
      skills: ['Project Management', 'Stakeholder Engagement', 'Team Leadership'],
      icon: '🇨🇦',
      color: 'teal',
    },
  ]

  const education = [
    {
      degree: 'MEng in Software Engineering',
      institution: 'Concordia University',
      location: 'Montreal, QC, Canada',
      period: 'Sep 2023 - Aug 2025',
      description: 'Graduated Aug 2025. Focused on advanced software engineering, including project management, software comprehension, and human-computer interaction.',
      achievements: [
        'Graduated in Aug 2025.',
        'Completed advanced coursework in software design methodologies and project management.',
        'Applied research-backed practices to real-world software engineering problems.',
      ],
      icon: '🎓',
    },
    {
      degree: 'BSc in Software Engineering with Multimedia',
      institution: 'Limkokwing University of Creative Technology',
      location: 'Cyberjaya, Malaysia',
      period: 'Aug 2019 - July 2022',
      description: 'Software engineering foundation with multimedia specialization, including interaction design, business communication, and database architecture.',
      achievements: [
        'Graduated with First Class Honours.',
        'Completed final year project on "Smart Attendance System using Face Recognition".',
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
