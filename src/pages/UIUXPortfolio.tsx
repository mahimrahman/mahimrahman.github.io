import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const CLOUDINARY_CLOUD_NAME = 'dacbxyltq'

interface Project {
  id: string
  title: string
  tagline: string
  description: string
  tools: string[]
  role: string
  process: string[]
  screenshots: string[]
  year: string
  color: string
}

const projects: Project[] = [
  {
    id: 'apptracka',
    title: 'Apptracka',
    tagline: 'Application Tracking App',
    description: 'A comprehensive application tracking system designed to help job seekers organize and manage their job applications efficiently.',
    tools: ['Figma', 'UI/UX Design', 'Prototyping'],
    role: 'UI/UX Designer',
    process: ['Research', 'Wireframing', 'Visual Design', 'Prototyping'],
    screenshots: Array.from({ length: 6 }, (_, i) =>
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/Portfolio/UI%20UX/Apptracka%20Application%20Tracking%20App/${i + 1}.png`
    ),
    year: '2024',
    color: 'purple',
  },
  {
    id: 'bangla-editor',
    title: 'BANGLA Editor Panel',
    tagline: 'Dashboard UI Design',
    description: 'A comprehensive dashboard interface for BANGLA content management system with intuitive navigation and data visualization.',
    tools: ['Figma', 'Dashboard Design', 'Data Visualization'],
    role: 'UI Designer',
    process: ['User Research', 'Information Architecture', 'Visual Design'],
    screenshots: Array.from({ length: 5 }, (_, i) =>
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/Portfolio/UI%20UX/BANGLA%20Editor%20Panel/${i + 1}.png`
    ),
    year: '2024',
    color: 'teal',
  },
  {
    id: 'bassilichat-ai',
    title: 'BassiliChat AI',
    tagline: 'UI Redesign Project',
    description: 'A comprehensive UI redesign comparing the original interface with an updated, cleaner design focusing on improved usability and modern aesthetics.',
    tools: ['Figma', 'UI Redesign', 'UX Audit'],
    role: 'UI/UX Designer',
    process: ['UX Audit', 'Competitive Analysis', 'Redesign', 'User Testing'],
    screenshots: [
      ...Array.from({ length: 4 }, (_, i) =>
        `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/Portfolio/UI%20UX/BassiliChat%20AI/The%20UI%20I%20redesigned/${i + 1}.png`
      ),
      ...Array.from({ length: 3 }, (_, i) =>
        `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/Portfolio/UI%20UX/BassiliChat%20AI/The%20original%20UI/${i + 1}.png`
      ),
    ],
    year: '2024',
    color: 'primary',
  },
  {
    id: 'bassilichat-inc',
    title: 'BassiliChat Inc',
    tagline: 'Website UI Design',
    description: 'Corporate website design for BassiliChat Inc, featuring modern aesthetics and clear communication of services.',
    tools: ['Figma', 'Web Design', 'Branding'],
    role: 'UI Designer',
    process: ['Brand Analysis', 'Wireframing', 'Visual Design'],
    screenshots: Array.from({ length: 3 }, (_, i) =>
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/Portfolio/UI%20UX/BassiliChat%20Inc/${i + 1}.png`
    ),
    year: '2024',
    color: 'accent',
  },
  {
    id: 'bassilitrade',
    title: 'BassiliTrade',
    tagline: 'Trading Platform UI',
    description: 'Trading/product UI screens designed to present data clearly and reduce cognitive load for users making financial decisions.',
    tools: ['Figma', 'UI Design', 'Data UI', 'Financial Dashboard'],
    role: 'UI/UX Designer',
    process: ['Data Analysis', 'User Flow', 'Visual Design', 'Iteration'],
    screenshots: Array.from({ length: 5 }, (_, i) =>
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/Portfolio/UI%20UX/BassiliTrade/${i + 1}.png`
    ),
    year: '2024',
    color: 'purple',
  },
  {
    id: 'monheure',
    title: 'MonHeure',
    tagline: 'Mobile App UI Design',
    description: 'Mobile UI design set demonstrating key screens and user flow continuity for a time management application.',
    tools: ['Figma', 'Mobile UI', 'UX Flow'],
    role: 'UI/UX Designer',
    process: ['User Research', 'Wireframing', 'Prototyping', 'Testing'],
    screenshots: Array.from({ length: 4 }, (_, i) =>
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/Portfolio/UI%20UX/MonHeure%20Mobile%20App/${i + 1}.jpg`
    ),
    year: '2023',
    color: 'teal',
  },
  {
    id: 'legym',
    title: 'LeGym Concordia',
    tagline: 'Gym Management App',
    description: 'Comprehensive gym management mobile app designed for Concordia University students and staff.',
    tools: ['Figma', 'Mobile UI', 'UX Research'],
    role: 'UI/UX Designer',
    process: ['User Research', 'Persona Development', 'UI Design', 'Usability Testing'],
    screenshots: Array.from({ length: 8 }, (_, i) =>
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773616/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_${i + 1}.png`
    ),
    year: '2024',
    color: 'primary',
  },
  {
    id: 'artemis',
    title: 'Artemis Arthouse',
    tagline: 'Art Gallery Website',
    description: 'Elegant web interface designed for a contemporary art gallery, featuring immersive visual experiences.',
    tools: ['Figma', 'Web UI', 'Visual Design'],
    role: 'UI Designer',
    process: ['Creative Direction', 'Visual Design', 'Responsive Design'],
    screenshots: Array.from({ length: 4 }, (_, i) =>
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773561/Portfolio/UI%20UX/Artemis%20Arthouse/artemis${i + 1}.png`
    ),
    year: '2023',
    color: 'accent',
  },
  {
    id: 'soulcouture',
    title: 'Soul Couture Shopping',
    tagline: 'E-commerce Platform',
    description: 'Premium online shopping platform designed for luxury fashion, featuring elegant product showcases and seamless checkout.',
    tools: ['Figma', 'E-commerce', 'Luxury Brand Design'],
    role: 'UI/UX Designer',
    process: ['Market Research', 'User Journey Mapping', 'Visual Design', 'Checkout Optimization'],
    screenshots: Array.from({ length: 6 }, (_, i) =>
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773652/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_${i + 1}.png`
    ),
    year: '2023',
    color: 'purple',
  },
  {
    id: 'stayinn',
    title: 'StayInn',
    tagline: 'Hotel Booking App',
    description: 'Modern hotel booking application with intuitive search, filtering, and reservation management features.',
    tools: ['Figma', 'Mobile UI', 'Booking UX'],
    role: 'UI/UX Designer',
    process: ['Competitive Analysis', 'User Flow Design', 'UI Design'],
    screenshots: Array.from({ length: 5 }, (_, i) =>
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/Portfolio/UI%20UX/StayInn/${i + 1}.png`
    ),
    year: '2023',
    color: 'teal',
  },
  {
    id: 'bdgsa',
    title: 'BDGSA Website',
    tagline: 'Community Platform',
    description: 'A community-focused digital platform designed for the Bangladeshi Graduate Students\' Association, facilitating member connections and event management.',
    tools: ['Figma', 'Web Design', 'Community Platform'],
    role: 'UI/UX Designer',
    process: ['User Research', 'Information Architecture', 'Visual Design', 'Accessibility Testing'],
    screenshots: Array.from({ length: 8 }, (_, i) =>
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773578/Portfolio/UI%20UX/BDGSA/bdgsa${i + 1}.png`
    ),
    year: '2024',
    color: 'primary',
  },
  {
    id: 'cafe',
    title: 'Simple Cafe Menu',
    tagline: 'FreeCodeCamp Project',
    description: 'A clean and appetizing cafe menu interface developed as part of FreeCodeCamp curriculum with mobile-first responsive design.',
    tools: ['HTML', 'CSS', 'Responsive Design'],
    role: 'Frontend Developer',
    process: ['Design Patterns Research', 'Layout Design', 'Responsive Implementation'],
    screenshots: Array.from({ length: 9 }, (_, i) =>
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773588/Portfolio/UI%20UX/Codecamp%20Cafe/cafe${i + 1}.png`
    ),
    year: '2023',
    color: 'accent',
  },
  {
    id: 'fashionista',
    title: 'Fashionista App',
    tagline: 'Fashion Discovery Platform',
    description: 'A contemporary mobile application designed for fashion enthusiasts to discover trends, create style profiles, and shop curated collections.',
    tools: ['Figma', 'Mobile UI', 'E-commerce'],
    role: 'UI/UX Designer',
    process: ['Trend Analysis', 'User Flow Design', 'Visual Design', 'Style Preference Testing'],
    screenshots: [
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773603/Portfolio/UI%20UX/fashionista/fashionista_1.png`,
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773607/Portfolio/UI%20UX/fashionista/fashionista_3.png`,
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773609/Portfolio/UI%20UX/fashionista/fashionista_4.png`,
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773610/Portfolio/UI%20UX/fashionista/fashionista_5.png`,
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773611/Portfolio/UI%20UX/fashionista/fashionista_6.png`,
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773613/Portfolio/UI%20UX/fashionista/fashionista_7.png`,
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773614/Portfolio/UI%20UX/fashionista/fashionista_8.png`,
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773615/Portfolio/UI%20UX/fashionista/fashionista_9.png`,
    ],
    year: '2023',
    color: 'purple',
  },
  {
    id: 'friendship',
    title: 'Friendship Tribute',
    tagline: 'Digital Memorial',
    description: 'A heartfelt digital tribute website designed to celebrate and commemorate meaningful friendships through visual storytelling.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    role: 'Web Developer',
    process: ['Emotional Design Research', 'Story Flow Design', 'Interactive Implementation'],
    screenshots: Array.from({ length: 5 }, (_, i) =>
      `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1765773645/Portfolio/UI%20UX/Simple%20Friendship%20Tribute%20Page/friendshiptribute${i + 1}.png`
    ),
    year: '2023',
    color: 'teal',
  },
]

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
    purple: {
      bg: 'from-purple-500/20 to-purple-600/10',
      border: 'border-purple-500/30 hover:border-purple-400/50',
      text: 'text-purple-400',
      gradient: 'from-purple-500 to-purple-600',
    },
    teal: {
      bg: 'from-teal-500/20 to-teal-600/10',
      border: 'border-teal-500/30 hover:border-teal-400/50',
      text: 'text-teal-400',
      gradient: 'from-teal-500 to-teal-600',
    },
    primary: {
      bg: 'from-primary-500/20 to-primary-600/10',
      border: 'border-primary-500/30 hover:border-primary-400/50',
      text: 'text-primary-400',
      gradient: 'from-primary-500 to-primary-600',
    },
    accent: {
      bg: 'from-accent-500/20 to-accent-600/10',
      border: 'border-accent-500/30 hover:border-accent-400/50',
      text: 'text-accent-500',
      gradient: 'from-accent-500 to-accent-600',
    },
  }
  return colors[color] || colors.purple
}

const UIUXPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setShowLightbox(true)
  }

  const closeLightbox = () => {
    setShowLightbox(false)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.screenshots.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length)
    }
  }

  return (
    <div
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
              to="/#portfolio"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-purple-400 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>

            <div className="mb-6">
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
            <p className="text-xl text-neutral-400 max-w-3xl">
              Crafting intuitive interfaces and delightful user experiences through research-driven design.
              Explore {projects.length} UI/UX projects across mobile apps, web platforms, and dashboards.
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

      {/* Projects Grid */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const colorClasses = getColorClasses(project.color)
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openProject(project)}
                >
                  <div className={`h-full p-6 bg-gradient-to-br ${colorClasses.bg} backdrop-blur-sm border ${colorClasses.border} rounded-2xl transition-all duration-500 hover:shadow-2xl`}>
                    {/* Thumbnail */}
                    <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-neutral-800/50">
                      <img
                        src={project.screenshots[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                        <span className={`px-2 py-1 bg-neutral-900/80 backdrop-blur-sm rounded text-xs ${colorClasses.text} font-medium`}>
                          {project.screenshots.length} screens
                        </span>
                        <span className="px-2 py-1 bg-neutral-900/80 backdrop-blur-sm rounded text-xs text-neutral-400">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <h3 className="text-xl font-display font-bold text-neutral-100 mb-1 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className={`${colorClasses.text} text-sm font-medium mb-3`}>{project.tagline}</p>
                    <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-2 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded text-xs text-neutral-400"
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

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto px-4 py-8">
              {/* Close Button */}
              <button
                onClick={closeProject}
                className="fixed top-6 right-6 p-3 bg-neutral-800/80 backdrop-blur-sm rounded-full text-neutral-400 hover:text-white hover:bg-neutral-700/80 transition-all z-50"
              >
                <X size={24} />
              </button>

              {/* Project Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <Link
                  to="/portfolio/uiux"
                  onClick={(e) => { e.preventDefault(); closeProject(); }}
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-purple-400 transition-colors mb-6"
                >
                  <ArrowLeft size={18} />
                  Back to Projects
                </Link>

                <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-xl text-purple-400 mb-4">{selectedProject.tagline}</p>
                <p className="text-neutral-400 max-w-3xl">{selectedProject.description}</p>
              </motion.div>

              {/* Project Details */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-neutral-900/50 border border-neutral-800/50 rounded-xl">
                  <h4 className="text-sm text-neutral-500 mb-2">Role</h4>
                  <p className="text-neutral-200 font-medium">{selectedProject.role}</p>
                </div>
                <div className="p-4 bg-neutral-900/50 border border-neutral-800/50 rounded-xl">
                  <h4 className="text-sm text-neutral-500 mb-2">Year</h4>
                  <p className="text-neutral-200 font-medium">{selectedProject.year}</p>
                </div>
                <div className="p-4 bg-neutral-900/50 border border-neutral-800/50 rounded-xl">
                  <h4 className="text-sm text-neutral-500 mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.tools.map((tool, i) => (
                      <span key={i} className="px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Screenshots Gallery */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Screenshots ({selectedProject.screenshots.length})</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {selectedProject.screenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={screenshot}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 transition-colors flex items-center justify-center">
                        <ExternalLink className="opacity-0 group-hover:opacity-100 text-white transition-opacity" size={24} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Design Process</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.process.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <span className="text-neutral-300">{step}</span>
                      {index < selectedProject.process.length - 1 && (
                        <ChevronRight className="text-neutral-600" size={16} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {showLightbox && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-neutral-800/80 rounded-full text-white hover:bg-neutral-700 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 p-3 bg-neutral-800/80 rounded-full text-white hover:bg-neutral-700 transition-colors"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 p-3 bg-neutral-800/80 rounded-full text-white hover:bg-neutral-700 transition-colors"
            >
              <ChevronRight size={28} />
            </button>

            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedProject.screenshots[currentImageIndex]}
              alt={`${selectedProject.title} screenshot`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-800/80 backdrop-blur-sm rounded-full text-white text-sm">
              {currentImageIndex + 1} / {selectedProject.screenshots.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              to="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              Start a Project
              <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default UIUXPortfolio
