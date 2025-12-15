import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code2, Palette, Sparkles, Wrench, CheckCircle2, Briefcase, Rocket, GraduationCap, ScrollText, Calendar, MapPin, ArrowRight, Monitor, Figma, PenTool, Camera, Mail, Linkedin, Github, Twitter, Instagram, ChevronLeft, ChevronRight, Grid3x3 } from 'lucide-react'
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
  const [showAllExperiences, setShowAllExperiences] = useState(false)
  const [currentExperienceSlide, setCurrentExperienceSlide] = useState(0)

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
      title: 'Frontend & Design',
      Icon: Palette,
      color: 'dev',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Design', 'WordPress'],
    },
    {
      title: 'Backend Development',
      Icon: Code2,
      color: 'uiux',
      skills: ['Python', 'Java', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'REST APIs', 'Git/GitHub'],
    },
    {
      title: 'Project Management',
      Icon: Wrench,
      color: 'design',
      skills: ['Agile/Scrum', 'Jira', 'Azure DevOps', 'Trello', 'Team Leadership', 'Resource Planning', 'SEO Strategy', 'Analytics'],
    },
    {
      title: 'Tools & Technologies',
      Icon: Sparkles,
      color: 'photo',
      skills: ['Microsoft Office', 'Power BI', 'LaTeX/Overleaf', 'Data Analysis', 'Digital Marketing', 'Content Strategy', 'AI/Prompt Engineering', 'Cloud Services'],
    },
  ]

  // Experience data (modern timeline design)
  const experiences = [
    {
      title: 'VP – Marketing',
      company: 'HackConcordia',
      location: 'Montreal, QC, Canada',
      period: 'Present',
      type: 'Volunteer',
      Icon: Rocket,
      color: 'dev',
      description: 'Leading marketing initiatives for HackConcordia, organizing large-scale hackathons and tech events to foster the student developer community.',
      achievements: [
        'Managed social media presence and executed strategic marketing campaigns.',
        'Coordinated with sponsors and partners to secure funding and support for events.',
        'Increased student engagement and participation in hackathons through targeted outreach.',
      ],
    },
    {
      title: 'Graduate Teaching Assistant',
      company: 'SOEN 6431, Concordia University',
      location: 'Montreal, QC, Canada',
      period: 'Sep 2023 - Present',
      type: 'Part-time',
      Icon: GraduationCap,
      color: 'uiux',
      description: 'Assisting in the instruction of SOEN 6431, providing guidance to students on software engineering concepts and methodologies.',
      achievements: [
        'Facilitated learning for graduate students in software engineering principles.',
        'Provided detailed feedback and grading for assignments and projects.',
        'Mentored students on complex software architecture and design patterns.',
      ],
    },
    {
      title: 'Director',
      company: 'Graduate Students\' Association',
      location: 'Montreal, QC, Canada',
      period: 'Recent',
      type: 'Leadership',
      Icon: Briefcase,
      color: 'design',
      description: 'Serving as Director for the Graduate Students\' Association, representing graduate student interests and organizing community events.',
      achievements: [
        'Advocated for graduate student needs and concerns.',
        'Organized networking events and professional development workshops.',
        'Collaborated with university administration on policy matters.',
      ],
    },
    {
      title: 'Student Facilitator',
      company: 'Homeroom, Dean of Students Office',
      location: 'Montreal, QC, Canada',
      period: 'Recent',
      type: 'Part-time',
      Icon: Palette,
      color: 'photo',
      description: 'Facilitated student programs and initiatives through the Dean of Students Office.',
      achievements: [
        'Supported new student orientation and integration programs.',
        'Coordinated student engagement activities.',
        'Provided peer mentorship and guidance to undergraduate students.',
      ],
    },
    {
      title: 'Marketing/Communications',
      company: 'TEDx Concordia University',
      location: 'Montreal, QC, Canada',
      period: 'Recent',
      type: 'Volunteer',
      Icon: Sparkles,
      color: 'dev',
      description: 'Managed marketing and communications for TEDx Concordia University events.',
      achievements: [
        'Developed and executed comprehensive marketing strategies.',
        'Created engaging content for social media and promotional materials.',
        'Increased event attendance and community engagement.',
      ],
    },
    {
      title: 'Web Developer & UI/UX Designer',
      company: 'Zavy Technologies Sdn Bhd',
      location: 'Malaysia',
      period: '2022',
      type: 'Full-time',
      Icon: Monitor,
      color: 'uiux',
      description: 'Developed and maintained web applications, ensuring high performance and responsiveness across various devices and platforms.',
      achievements: [
        'Collaborated with cross-functional teams to deliver robust software solutions.',
        'Implemented responsive designs and optimized user experience for web platforms.',
        'Participated in the full software development lifecycle from concept to deployment.',
      ],
    },
    {
      title: 'General Secretary',
      company: 'Bangladeshi Student Association',
      location: 'Malaysia',
      period: 'Past',
      type: 'Leadership',
      Icon: Briefcase,
      color: 'design',
      description: 'Led administrative operations for the Bangladeshi Student Association.',
      achievements: [
        'Coordinated cultural events and community gatherings.',
        'Managed organizational communications and documentation.',
        'Strengthened connections within the Bangladeshi student community.',
      ],
    },
    {
      title: 'Senior Member',
      company: 'Connecting Youth Foundation',
      location: 'Bangladesh',
      period: 'Past',
      type: 'Volunteer',
      Icon: Rocket,
      color: 'photo',
      description: 'Contributed to youth development initiatives and community outreach programs.',
      achievements: [
        'Organized workshops and training sessions for youth development.',
        'Participated in community service projects.',
        'Mentored younger members in leadership and skill development.',
      ],
    },
    {
      title: 'Member',
      company: 'Bangladesh Scouts',
      location: 'Bangladesh',
      period: 'Past',
      type: 'Volunteer',
      Icon: Sparkles,
      color: 'dev',
      description: 'Active member of Bangladesh Scouts, participating in community service and leadership activities.',
      achievements: [
        'Participated in community service and outreach programs.',
        'Developed leadership and teamwork skills.',
        'Engaged in environmental and social initiatives.',
      ],
    },
  ]

  const education = [
    {
      degree: 'MEng in Software Engineering',
      institution: 'Concordia University',
      period: 'Sep 2023 - Present',
      Icon: GraduationCap,
      details: 'Focusing on advanced software architecture, design patterns, and cloud computing.'
    },
    {
      degree: 'BSc in Software Engineering with Multimedia',
      institution: 'Limkokwing University',
      period: 'Aug 2019 – July 2022',
      Icon: ScrollText,
      details: 'Graduated with First Class Honours. Final year project on "Smart Attendance System using Face Recognition".'
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
              <span className="block text-white mb-2">Mahimur Rahman Khan</span>
              <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Specialized in full-stack development, UI/UX design, and data-driven decision making.
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

      {/* Experience & Education Section - Carousel Design */}
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
            className="text-center mb-12"
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
            <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
              Highlighting key roles and achievements throughout my career
            </p>

            {/* View Toggle Buttons */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setShowAllExperiences(!showAllExperiences)}
                className="group px-6 py-3 bg-neutral-800/50 hover:bg-neutral-800/80 border border-neutral-700/50 hover:border-accent-500/50 rounded-xl transition-all duration-300 flex items-center gap-2"
              >
                <Grid3x3 className="w-5 h-5 text-neutral-400 group-hover:text-accent-400 transition-colors" strokeWidth={1.5} />
                <span className="text-white font-medium">{showAllExperiences ? 'Show Carousel' : 'Show All'}</span>
              </button>
            </div>
          </motion.div>

          {/* Experience Content - Conditional Rendering */}
          <div className="mb-24">
            {!showAllExperiences ? (
              /* Carousel View */
              <div className="relative">
                {/* Carousel Container */}
                <div className="overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {experiences.slice(currentExperienceSlide, currentExperienceSlide + 3).map((exp, index) => {
                      const IconComponent = exp.Icon
                      return (
                        <motion.div
                          key={currentExperienceSlide + index}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
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

                {/* Carousel Controls */}
                <div className="flex items-center justify-center gap-6 mt-12">
                  {/* Previous Button */}
                  <button
                    onClick={() => setCurrentExperienceSlide(Math.max(0, currentExperienceSlide - 3))}
                    disabled={currentExperienceSlide === 0}
                    className="group p-4 bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800/50 hover:border-accent-500/50 rounded-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-neutral-800/50"
                  >
                    <ChevronLeft className="w-6 h-6 text-neutral-400 group-hover:text-accent-400 transition-colors" strokeWidth={2} />
                  </button>

                  {/* Pagination Dots */}
                  <div className="flex items-center gap-3">
                    {Array.from({ length: Math.ceil(experiences.length / 3) }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentExperienceSlide(index * 3)}
                        className={`transition-all duration-300 rounded-full ${
                          currentExperienceSlide === index * 3
                            ? 'w-12 h-3 bg-gradient-to-r from-accent-500 to-accent-600'
                            : 'w-3 h-3 bg-neutral-700 hover:bg-neutral-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => setCurrentExperienceSlide(Math.min(experiences.length - 3, currentExperienceSlide + 3))}
                    disabled={currentExperienceSlide >= experiences.length - 3}
                    className="group p-4 bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800/50 hover:border-accent-500/50 rounded-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-neutral-800/50"
                  >
                    <ChevronRight className="w-6 h-6 text-neutral-400 group-hover:text-accent-400 transition-colors" strokeWidth={2} />
                  </button>
                </div>

                {/* Experience Counter */}
                <div className="text-center mt-8">
                  <p className="text-neutral-500 text-sm font-medium">
                    Showing <span className="text-accent-400 font-bold">{currentExperienceSlide + 1}-{Math.min(currentExperienceSlide + 3, experiences.length)}</span> of <span className="text-accent-400 font-bold">{experiences.length}</span> experiences
                  </p>
                </div>
              </div>
            ) : (
              /* Grid View - Show All */
              <div className="grid lg:grid-cols-3 gap-6">
                {experiences.map((exp, index) => {
                  const IconComponent = exp.Icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
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
            )}
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
              href="mailto:mahimrk.a@gmail.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/20 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Send Email
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/mahimurrahman-khan"
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
                { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mahimurrahman-khan', color: 'accent' },
                { Icon: Github, label: 'GitHub', href: 'https://github.com/mahimrahman', color: 'secondary' },
                { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/snazzy_memories/', color: 'secondary' },
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
            {/* Email Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative p-8 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/50 rounded-2xl hover:border-neutral-700/50 transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 bg-accent-500/10 border border-accent-500/30 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-accent-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Email</h3>
                <p className="text-neutral-400 mb-4">Drop me a line anytime</p>
                <a href="mailto:mahimrk.a@gmail.com" className="text-accent-400 hover:text-accent-300 transition-colors font-medium">
                  mahimrk.a@gmail.com
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
                <a href="https://www.linkedin.com/in/mahimurrahman-khan" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-secondary-300 transition-colors font-medium">
                  /in/mahimurrahman-khan
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
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <p className="text-white font-display font-bold text-lg">Mahimur Rahman Khan</p>
                <p className="text-neutral-500 text-xs">Software Engineer & Designer</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-neutral-500 text-sm text-center md:text-left">
              <p>© {new Date().getFullYear()} Mahimur Rahman Khan. All rights reserved.</p>
            </div>

            {/* Quick Social Links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Github, href: 'https://github.com/mahimrahman', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/mahimurrahman-khan', label: 'LinkedIn' },
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
        </div>
      </footer>

      {/* Modals */}
      <PortfolioModal
        isOpen={devModalOpen}
        onClose={() => setDevModalOpen(false)}
        title="Development Projects"
      >
        <div className="space-y-8">
          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'E-Commerce Platform', desc: 'Full-stack e-commerce solution with payment integration', tech: ['React', 'Node.js', 'PostgreSQL'], icon: '🛒' },
              { title: 'Task Management App', desc: 'Collaborative task management with real-time updates', tech: ['TypeScript', 'Firebase', 'Tailwind'], icon: '✅' },
              { title: 'Portfolio Website', desc: 'Modern portfolio with smooth animations and responsive design', tech: ['React', 'Framer Motion', 'Vite'], icon: '🎨' },
              { title: 'API Gateway Service', desc: 'Microservices architecture with API gateway pattern', tech: ['Node.js', 'Docker', 'MongoDB'], icon: '🔌' },
            ].map((project, i) => (
              <div key={i} className="group p-6 bg-neutral-800/30 hover:bg-neutral-800/50 rounded-xl border border-neutral-700/50 hover:border-dev-500/50 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg mb-4 flex items-center justify-center text-6xl border border-neutral-700/30 group-hover:scale-105 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-dev-400 transition-colors">{project.title}</h3>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-dev-500/10 border border-dev-500/20 text-dev-400 text-xs rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center pt-4 border-t border-neutral-800/50">
            <p className="text-neutral-400 text-sm mb-4">Interested in my development work?</p>
            <a href="https://github.com/mahimrahman" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-dev-500/10 hover:bg-dev-500/20 border border-dev-500/30 hover:border-dev-500/50 text-dev-400 rounded-xl transition-all duration-300 font-medium">
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </PortfolioModal>

      <PortfolioModal
        isOpen={uiuxModalOpen}
        onClose={() => setUiuxModalOpen(false)}
        title="UI/UX Design Projects"
      >
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Mobile Banking App', desc: 'Redesigned banking experience with focus on accessibility', tools: ['Figma', 'User Research'], icon: '💳' },
              { title: 'Food Delivery Platform', desc: 'End-to-end design system for food ordering service', tools: ['Sketch', 'Prototyping'], icon: '🍔' },
              { title: 'Healthcare Dashboard', desc: 'Data visualization dashboard for medical professionals', tools: ['Figma', 'User Testing'], icon: '🏥' },
              { title: 'Social Media App', desc: 'Modern social platform with engaging user interactions', tools: ['Adobe XD', 'Wireframing'], icon: '📱' },
            ].map((project, i) => (
              <div key={i} className="group p-6 bg-neutral-800/30 hover:bg-neutral-800/50 rounded-xl border border-neutral-700/50 hover:border-uiux-500/50 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg mb-4 flex items-center justify-center text-6xl border border-neutral-700/30 group-hover:scale-105 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-uiux-400 transition-colors">{project.title}</h3>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 bg-uiux-500/10 border border-uiux-500/20 text-uiux-400 text-xs rounded-lg font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PortfolioModal>

      <PortfolioModal
        isOpen={designModalOpen}
        onClose={() => setDesignModalOpen(false)}
        title="Graphic Design Portfolio"
      >
        <div className="space-y-6">
          <p className="text-neutral-400 text-center">A collection of branding, print, and digital design work</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { emoji: '🎨', title: 'Brand Identity', category: 'Branding' },
              { emoji: '🖼️', title: 'Poster Design', category: 'Print' },
              { emoji: '🏷️', title: 'Logo Collection', category: 'Logos' },
              { emoji: '📱', title: 'App Icons', category: 'Digital' },
              { emoji: '🎭', title: 'Event Branding', category: 'Branding' },
              { emoji: '📰', title: 'Magazine Layout', category: 'Print' },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => openGallery([
                  { id: 1, title: item.title, category: item.category, placeholder: item.emoji },
                  { id: 2, title: 'Design Variation 1', category: item.category, placeholder: item.emoji },
                  { id: 3, title: 'Design Variation 2', category: item.category, placeholder: item.emoji },
                ], 0)}
                className="group aspect-square bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/50 hover:border-design-500/50 rounded-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-5xl md:text-6xl"
              >
                <span className="mb-2">{item.emoji}</span>
                <span className="text-xs text-neutral-400 group-hover:text-design-400 transition-colors font-medium">{item.category}</span>
              </button>
            ))}
          </div>
        </div>
      </PortfolioModal>

      <PortfolioModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        title="Photography Gallery"
      >
        <div className="space-y-6">
          <p className="text-neutral-400 text-center">Capturing moments through the lens - Street, Portrait & Landscape photography</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { emoji: '🌆', title: 'Urban Landscape', desc: 'City lights at golden hour', category: 'Street' },
              { emoji: '👤', title: 'Portrait Series', desc: 'Natural light portraiture', category: 'Portrait' },
              { emoji: '🏔️', title: 'Mountain Vista', desc: 'Dawn in the mountains', category: 'Landscape' },
              { emoji: '🌃', title: 'Night Photography', desc: 'Urban nightscapes', category: 'Street' },
              { emoji: '🌅', title: 'Sunrise Collection', desc: 'Morning golden hour', category: 'Landscape' },
              { emoji: '📸', title: 'Event Coverage', desc: 'Candid moments', category: 'Portrait' },
              { emoji: '🏙️', title: 'Architecture', desc: 'Modern buildings', category: 'Street' },
              { emoji: '🌲', title: 'Nature Series', desc: 'Natural landscapes', category: 'Landscape' },
              { emoji: '🎭', title: 'Cultural Events', desc: 'Festival photography', category: 'Portrait' },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => openGallery([
                  { id: 1, title: item.title, category: item.category, placeholder: item.emoji, description: item.desc },
                  { id: 2, title: `${item.title} - Shot 2`, category: item.category, placeholder: item.emoji, description: item.desc },
                  { id: 3, title: `${item.title} - Shot 3`, category: item.category, placeholder: item.emoji, description: item.desc },
                ], 0)}
                className="group aspect-square bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/50 hover:border-photo-500/50 rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center text-5xl md:text-6xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{item.emoji}</span>
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs text-white font-medium">{item.title}</p>
                  <p className="text-xs text-neutral-400">{item.category}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Social Link */}
          <div className="text-center pt-4 border-t border-neutral-800/50">
            <p className="text-neutral-400 text-sm mb-4">See more on my photography page</p>
            <a href="https://www.instagram.com/snazzy_memories/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-photo-500/10 hover:bg-photo-500/20 border border-photo-500/30 hover:border-photo-500/50 text-photo-400 rounded-xl transition-all duration-300 font-medium">
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>
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
