import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Palette, Camera, Code2, Image } from 'lucide-react'

const CLOUDINARY_CLOUD_NAME = 'dacbxyltq'

const cloudinaryImageUrl = (publicPath: string) => {
  const encoded = publicPath
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/')
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${encoded}`
}

interface PortfolioCategory {
  id: string
  title: string
  description: string
  icon: React.ElementType
  thumbnail: string
  link: string
  projectCount: number
  tags: string[]
}

const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually stunning digital experiences through thoughtful design and user-centered approach.',
    icon: Palette,
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/Apptracka Application Tracking App/1.png'),
    link: '/portfolio/uiux',
    projectCount: 14,
    tags: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
  },
  {
    id: 'photography',
    title: 'Photography',
    description: 'Capturing moments and stories through the lens. Landscapes, portraits, and product photography from around the world.',
    icon: Camera,
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773382/Portfolio/Photography/Landscapes/1_Old_Port_Montreal_Canada_2.jpg',
    link: '/portfolio/photography',
    projectCount: 83,
    tags: ['Landscape', 'Portrait', 'Product', 'Travel'],
  },
  {
    id: 'graphics',
    title: 'Graphic Design',
    description: 'Creative visual solutions including branding, print design, illustrations, and digital graphics.',
    icon: Image,
    thumbnail: cloudinaryImageUrl('Portfolio/Graphic Design/01-Branding-Identity/Logos/1.png'),
    link: '/portfolio/graphics',
    projectCount: 200,
    tags: ['Branding', 'Print', 'Illustration', 'Digital'],
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Full-stack web applications and software solutions built with modern technologies and best practices.',
    icon: Code2,
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/BassiliChat AI/The UI I redesigned/1.png'),
    link: '/portfolio/development',
    projectCount: 8,
    tags: ['React', 'Node.js', 'TypeScript', 'Cloud'],
  },
]

// Featured UI/UX Projects for showcase
const featuredProjects = [
  {
    id: 'bassilichat-ai',
    title: 'BassiliChat AI',
    category: 'uiux',
    description: 'A UI redesign comparing the original interface with an updated, cleaner design.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/BassiliChat AI/The UI I redesigned/1.png'),
    tags: ['Figma', 'UI Redesign', 'UX Audit'],
    link: '/portfolio/uiux?project=bassilichat-ai',
  },
  {
    id: 'bassilitrade',
    title: 'BassiliTrade',
    category: 'uiux',
    description: 'Trading/product UI screens designed to present data clearly and reduce cognitive load.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/BassiliTrade/1.png'),
    tags: ['Figma', 'UI Design', 'Data UI'],
    link: '/portfolio/uiux?project=bassilitrade',
  },
  {
    id: 'legym',
    title: 'LeGym Concordia',
    category: 'uiux',
    description: 'Comprehensive gym management mobile app for Concordia University.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773616/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_1.png',
    tags: ['Figma', 'Mobile UI', 'UX Research'],
    link: '/portfolio/uiux?project=legym',
  },
  {
    id: 'artemis',
    title: 'Artemis Arthouse',
    category: 'uiux',
    description: 'Elegant web interface for contemporary art gallery.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773561/Portfolio/UI%20UX/Artemis%20Arthouse/artemis1.png',
    tags: ['Figma', 'Web UI', 'Visual Design'],
    link: '/portfolio/uiux?project=artemis',
  },
  {
    id: 'monheure',
    title: 'MonHeure Mobile App',
    category: 'uiux',
    description: 'Mobile UI design set demonstrating key screens and user flow continuity.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/MonHeure Mobile App/1.jpg'),
    tags: ['Figma', 'Mobile UI', 'UX Flow'],
    link: '/portfolio/uiux?project=monheure',
  },
  {
    id: 'soulcouture',
    title: 'Soul Couture Shopping',
    category: 'uiux',
    description: 'Premium online shopping platform for luxury fashion.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773652/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_1.png',
    tags: ['Figma', 'E-commerce', 'Luxury Brand'],
    link: '/portfolio/uiux?project=soulcouture',
  },
]

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<'categories' | 'projects'>('categories')

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
            <span className="block text-gradient">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'categories'
                ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/50 scale-105'
                : 'glass text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'projects'
                ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/50 scale-105'
                : 'glass text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            Featured Projects
          </button>
        </motion.div>

        {/* Categories View */}
        {activeTab === 'categories' && (
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={category.link}>
                    <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                      {/* Category Thumbnail */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={category.thumbnail}
                          alt={category.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                        {/* Icon Badge */}
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                          <IconComponent size={24} className="text-white" />
                        </div>

                        {/* Project Count */}
                        <div className="absolute bottom-4 left-4">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            {category.projectCount} Projects
                          </span>
                        </div>
                      </div>

                      {/* Category Info */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                          {category.title}
                        </h3>
                        <p className="text-slate-400 mb-4 line-clamp-2">
                          {category.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {category.tags.map((tag, tagIndex) => (
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
                  </Link>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* Featured Projects View */}
        {activeTab === 'projects' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                className="group"
              >
                <Link to={project.link}>
                  <div className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                    {/* Project Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 to-accent-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg">
                          View Project
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 mb-4 line-clamp-2 text-sm">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6 text-lg">
            Explore my complete portfolio across all categories
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/portfolio/uiux"
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              UI/UX Design
            </Link>
            <Link
              to="/portfolio/photography"
              className="px-6 py-3 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Photography
            </Link>
            <Link
              to="/portfolio/graphics"
              className="px-6 py-3 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Graphic Design
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
