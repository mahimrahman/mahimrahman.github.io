import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code2, Palette, Sparkles, Wrench, CheckCircle2, Briefcase, Rocket, GraduationCap, ScrollText, Calendar, MapPin, ArrowRight, Monitor, Figma, PenTool, Camera, Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react'
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

  // Portfolio data (modern design with lucide icons)
  const portfolioCategories = [
    {
      id: 'development',
      title: 'Development',
      Icon: Monitor,
      description: 'Web & Mobile Applications',
      gradient: 'from-dev-500/20 to-dev-600/10',
      color: 'dev',
      count: '12+ Projects',
      onClick: () => setDevModalOpen(true),
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      Icon: Figma,
      description: 'User Experience & Interfaces',
      gradient: 'from-uiux-500/20 to-uiux-600/10',
      color: 'uiux',
      count: '8+ Projects',
      onClick: () => setUiuxModalOpen(true),
    },
    {
      id: 'design',
      title: 'Graphic Design',
      Icon: PenTool,
      description: 'Brand Identity & Visuals',
      gradient: 'from-design-500/20 to-design-600/10',
      color: 'design',
      count: '15+ Projects',
      onClick: () => setDesignModalOpen(true),
    },
    {
      id: 'photography',
      title: 'Photography',
      Icon: Camera,
      description: 'Visual Storytelling',
      gradient: 'from-photo-500/20 to-photo-600/10',
      color: 'photo',
      count: '20+ Projects',
      onClick: () => setPhotoModalOpen(true),
    },
  ]

  // Skills data (modern design with lucide icons)
  const skillCategories = [
    {
      title: 'Development',
      Icon: Code2,
      color: 'dev',
      skills: ['React & Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'],
    },
    {
      title: 'Design',
      Icon: Palette,
      color: 'uiux',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Design Systems', 'User Research'],
    },
    {
      title: 'Creative',
      Icon: Sparkles,
      color: 'design',
      skills: ['Photoshop', 'Illustrator', 'After Effects', 'Branding', 'Typography'],
    },
    {
      title: 'Tools',
      Icon: Wrench,
      color: 'photo',
      skills: ['Git', 'VS Code', 'Jira', 'Notion', 'Postman', 'Analytics'],
    },
  ]

  // Experience data (modern timeline design)
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      Icon: Briefcase,
      color: 'dev',
      description: 'Leading development of scalable web applications and mentoring junior developers',
      achievements: ['Architected microservices infrastructure', 'Improved performance by 40%', 'Led team of 5 developers']
    },
    {
      title: 'UI/UX Designer',
      company: 'DesignLab',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      Icon: Palette,
      color: 'uiux',
      description: 'Crafted user-centered designs for enterprise SaaS products',
      achievements: ['Redesigned core product UI', 'Increased user engagement by 60%', 'Built design system']
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2018 - 2020',
      type: 'Freelance',
      Icon: Rocket,
      color: 'design',
      description: 'Delivered custom web solutions for diverse clients across industries',
      achievements: ['Completed 30+ projects', 'Maintained 5-star rating', 'Built recurring client base']
    },
  ]

  const education = [
    {
      degree: 'B.S. Computer Science',
      institution: 'University of Technology',
      period: '2013 - 2017',
      Icon: GraduationCap,
      details: 'Graduated with Honors - GPA 3.8/4.0'
    },
    {
      degree: 'UX Design Certificate',
      institution: 'Design Institute',
      period: '2019',
      Icon: ScrollText,
      details: 'Professional certification in User Experience Design'
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

      {/* Portfolio Section - Modern Grid Design */}
      <section id="portfolio" className="relative py-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}></div>
        </div>

        {/* Radial gradient overlays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full"
            >
              <span className="text-accent-400 font-medium text-sm tracking-wide uppercase">Portfolio</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Featured Work
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto">
              Explore my latest projects across different disciplines and creative domains
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioCategories.map((category, index) => {
              const IconComponent = category.Icon
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={category.onClick}
                  className="group relative text-left overflow-hidden"
                >
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-secondary-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>

                  {/* Card container */}
                  <div className="relative h-full p-10 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 rounded-2xl hover:border-neutral-700/50 transition-all duration-500 overflow-hidden">
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${category.color}-500 via-${category.color}-400 to-${category.color}-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    {/* Background decorative element */}
                    <div className={`absolute -right-12 -bottom-12 w-48 h-48 bg-gradient-to-tl from-${category.color}-500/10 to-transparent rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700`}></div>

                    <div className="relative">
                      {/* Icon badge */}
                      <div className="flex items-center justify-between mb-8">
                        <div className={`flex items-center justify-center w-20 h-20 bg-${category.color}-500/10 border border-${category.color}-500/30 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <IconComponent className={`w-10 h-10 text-${category.color}-400`} strokeWidth={1.5} />
                        </div>

                        {/* Project count badge */}
                        <div className={`px-4 py-2 bg-${category.color}-500/10 border border-${category.color}-500/30 rounded-full`}>
                          <span className={`text-${category.color}-400 text-sm font-bold font-mono`}>{category.count}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3 group-hover:text-accent-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Call to action */}
                      <div className="flex items-center gap-3 text-neutral-400 group-hover:text-white transition-colors duration-300">
                        <span className="text-sm font-bold tracking-wider uppercase">Explore Projects</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2} />
                      </div>

                      {/* Animated line */}
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-${category.color}-500 to-transparent w-0 group-hover:w-full transition-all duration-700`}></div>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Section - Modern Professional Design */}
      <section id="skills" className="relative py-32 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full"
            >
              <span className="text-accent-400 font-medium text-sm tracking-wide uppercase">Expertise</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto">
              A curated selection of technologies and tools I leverage to craft exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.Icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative"
                >
                  {/* Card background with gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 via-secondary-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                  <div className="relative h-full p-8 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl hover:border-neutral-600/50 transition-all duration-300 overflow-hidden">
                    {/* Subtle top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-${category.color}-500 to-transparent opacity-50`}></div>

                    {/* Icon with animated background */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-${category.color}-500/20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
                      <div className={`relative w-16 h-16 flex items-center justify-center bg-${category.color}-500/10 border border-${category.color}-500/30 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <IconComponent className={`w-8 h-8 text-${category.color}-400`} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-bold text-white mb-6 group-hover:text-accent-400 transition-colors duration-300">
                      {category.title}
                    </h3>

                    {/* Skills list with refined styling */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          className="flex items-center gap-3 text-neutral-300 group/item hover:text-white transition-colors duration-200"
                        >
                          <CheckCircle2 className={`w-4 h-4 text-${category.color}-500 flex-shrink-0`} strokeWidth={2} />
                          <span className="text-sm font-medium">{skill}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Decorative corner element */}
                    <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-${category.color}-500/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience & Education Section - Modern Card Grid Design */}
      <section id="experience" className="relative py-32 bg-neutral-950">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-secondary-500/10 border border-secondary-500/20 rounded-full"
            >
              <span className="text-secondary-400 font-medium text-sm tracking-wide uppercase">Career Journey</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Professional Experience
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto">
              Highlighting key roles and achievements throughout my career
            </p>
          </motion.div>

          {/* Experience Grid */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-3 gap-6">
              {experiences.map((exp, index) => {
                const IconComponent = exp.Icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group relative"
                  >
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${exp.color}-500/20 via-${exp.color}-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>

                    <div className="relative h-full p-8 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/50 rounded-2xl hover:border-neutral-700/50 transition-all duration-300 overflow-hidden flex flex-col">
                      {/* Top decorative line */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${exp.color}-500 to-${exp.color}-400 opacity-70`}></div>

                      {/* Header with icon and badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`flex items-center justify-center w-16 h-16 bg-${exp.color}-500/10 border border-${exp.color}-500/30 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-8 h-8 text-${exp.color}-400`} strokeWidth={1.5} />
                        </div>
                        <div className={`px-3 py-1.5 bg-${exp.color}-500/10 border border-${exp.color}-500/30 rounded-full`}>
                          <span className={`text-${exp.color}-400 text-xs font-bold uppercase tracking-wide`}>{exp.type}</span>
                        </div>
                      </div>

                      {/* Title and company */}
                      <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-neutral-300 font-semibold mb-4">{exp.company}</p>

                      {/* Meta information */}
                      <div className="flex flex-col gap-2 mb-5 pb-5 border-b border-neutral-800/50">
                        <div className="flex items-center gap-2 text-sm text-neutral-400">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-400">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-neutral-300 mb-5 leading-relaxed flex-grow">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2.5 mt-auto">
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Key Achievements</h4>
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-400">
                            <CheckCircle2 className={`w-4 h-4 text-${exp.color}-500 flex-shrink-0 mt-0.5`} strokeWidth={2} />
                            <span className="leading-snug">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom decorative element */}
                      <div className={`absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-tl from-${exp.color}-500/10 to-transparent rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700`}></div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              Education
            </h3>
            <p className="text-neutral-400">Academic background and professional certifications</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => {
              const IconComponent = edu.Icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group relative"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/10 to-accent-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                  <div className="relative p-8 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/50 rounded-2xl hover:border-neutral-700/50 transition-all duration-300">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary-500/10 border border-secondary-500/30 rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-secondary-400" strokeWidth={1.5} />
                    </div>

                    {/* Degree */}
                    <h4 className="text-xl font-display font-bold text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">
                      {edu.degree}
                    </h4>

                    {/* Institution */}
                    <p className="text-lg text-neutral-300 font-medium mb-3">{edu.institution}</p>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>

                    {/* Details */}
                    <p className="text-sm text-neutral-400 leading-relaxed">{edu.details}</p>

                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary-500/5 to-transparent rounded-bl-full"></div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section - Professional Modern Design */}
      <section id="contact" className="relative py-32 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full"
            >
              <span className="text-accent-400 font-medium text-sm tracking-wide uppercase">Get In Touch</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto">
              Have a project in mind? I'm always open to discussing new opportunities and collaborations.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="mailto:hello@example.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/20 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Send Email
              </span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 text-white font-bold rounded-xl hover:bg-neutral-800/80 hover:border-neutral-600/50 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 group-hover:text-accent-400 transition-colors" />
                Connect on LinkedIn
              </span>
            </a>
          </motion.div>

          {/* Social Links - Modern Icon Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h3 className="text-center text-neutral-400 text-sm font-medium uppercase tracking-wider mb-8">
              Connect With Me
            </h3>
            <div className="flex items-center justify-center gap-4">
              {[
                { Icon: Linkedin, label: 'LinkedIn', href: '#', color: 'accent' },
                { Icon: Github, label: 'GitHub', href: '#', color: 'secondary' },
                { Icon: Twitter, label: 'Twitter', href: '#', color: 'accent' },
                { Icon: Instagram, label: 'Instagram', href: '#', color: 'secondary' },
              ].map((social, index) => {
                const IconComponent = social.Icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="group relative"
                    title={social.label}
                  >
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 bg-${social.color}-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                    <div className={`relative w-14 h-14 flex items-center justify-center rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-${social.color}-500/50 hover:bg-neutral-800/80 transition-all duration-300`}>
                      <IconComponent className={`w-6 h-6 text-neutral-400 group-hover:text-${social.color}-400 transition-colors duration-300`} strokeWidth={1.5} />
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Email Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative p-8 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/50 rounded-2xl hover:border-neutral-700/50 transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 bg-accent-500/10 border border-accent-500/30 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-accent-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Email</h3>
                <p className="text-neutral-400 mb-4">Drop me a line anytime</p>
                <a href="mailto:hello@example.com" className="text-accent-400 hover:text-accent-300 transition-colors font-medium">
                  hello@example.com
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative p-8 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/50 rounded-2xl hover:border-neutral-700/50 transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 bg-secondary-500/10 border border-secondary-500/30 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-7 h-7 text-secondary-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-neutral-400 mb-4">Let's connect professionally</p>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-secondary-300 transition-colors font-medium">
                  /in/yourprofile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Minimal Modern Design */}
      <footer className="relative py-12 bg-neutral-950 border-t border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <p className="text-white font-display font-bold text-lg">Your Name</p>
                <p className="text-neutral-500 text-xs">Full Stack Developer & Designer</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-neutral-500 text-sm text-center md:text-left">
              <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>

            {/* Quick Social Links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
              ].map((social, index) => {
                const IconComponent = social.Icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-900/50 border border-neutral-800/50 hover:border-accent-500/50 hover:bg-neutral-800/80 transition-all duration-300 group"
                    title={social.label}
                  >
                    <IconComponent className="w-4 h-4 text-neutral-500 group-hover:text-accent-400 transition-colors duration-300" strokeWidth={1.5} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Decorative line */}
          <div className="mt-8 pt-6 border-t border-neutral-800/30">
            <p className="text-center text-neutral-600 text-xs">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
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
