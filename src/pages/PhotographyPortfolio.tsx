import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const PhotographyPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'landscape', label: 'Landscape' },
    { id: 'street', label: 'Street' },
    { id: 'product', label: 'Product' },
  ]

  const photos = [
    {
      title: 'Urban Reflections',
      category: 'street',
      location: 'Tokyo, Japan',
      year: '2024',
      camera: 'Sony A7IV',
      settings: 'f/2.8 | 1/125s | ISO 800',
      description: 'Capturing the interplay of light and shadow in modern architecture',
      image: '🌃',
      size: 'large',
    },
    {
      title: 'Golden Hour Portrait',
      category: 'portrait',
      location: 'California Coast',
      year: '2024',
      camera: 'Canon R5',
      settings: 'f/1.8 | 1/500s | ISO 200',
      description: 'Natural light portrait during the magic hour',
      image: '👤',
      size: 'medium',
    },
    {
      title: 'Mountain Majesty',
      category: 'landscape',
      location: 'Swiss Alps',
      year: '2023',
      camera: 'Nikon Z9',
      settings: 'f/11 | 1/250s | ISO 100',
      description: 'Panoramic vista of snow-capped peaks at dawn',
      image: '🏔️',
      size: 'large',
    },
    {
      title: 'Artisan Coffee',
      category: 'product',
      location: 'Studio',
      year: '2024',
      camera: 'Sony A7IV',
      settings: 'f/5.6 | 1/60s | ISO 100',
      description: 'Commercial product photography with dramatic lighting',
      image: '☕',
      size: 'medium',
    },
    {
      title: 'Monsoon Magic',
      category: 'street',
      location: 'Mumbai, India',
      year: '2023',
      camera: 'Fujifilm X-T5',
      settings: 'f/4 | 1/250s | ISO 1600',
      description: 'Street photography capturing the essence of urban life',
      image: '🌧️',
      size: 'medium',
    },
    {
      title: 'Fashion Editorial',
      category: 'portrait',
      location: 'NYC Studio',
      year: '2023',
      camera: 'Canon R5',
      settings: 'f/2.2 | 1/160s | ISO 400',
      description: 'High-fashion editorial shoot with dramatic styling',
      image: '👗',
      size: 'small',
    },
    {
      title: 'Desert Dawn',
      category: 'landscape',
      location: 'Sahara Desert',
      year: '2023',
      camera: 'Nikon Z9',
      settings: 'f/8 | 1/500s | ISO 64',
      description: 'First light over endless dunes',
      image: '🏜️',
      size: 'medium',
    },
    {
      title: 'Luxury Timepiece',
      category: 'product',
      location: 'Studio',
      year: '2023',
      camera: 'Phase One',
      settings: 'f/16 | 1/125s | ISO 50',
      description: 'Precision product photography for luxury brand',
      image: '⌚',
      size: 'small',
    },
    {
      title: 'Neon Nights',
      category: 'street',
      location: 'Seoul, Korea',
      year: '2022',
      camera: 'Sony A7IV',
      settings: 'f/1.4 | 1/80s | ISO 3200',
      description: 'Vibrant street scenes in neon-lit districts',
      image: '🌆',
      size: 'medium',
    },
  ]

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === activeCategory)

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(248,113,113,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-terra-400 transition-colors mb-8 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">📸</span>
              <div>
                <span className="inline-block px-3 py-1 bg-terra-500/10 border border-terra-500/20 rounded-full text-terra-400 text-sm font-medium mb-3 font-mono">
                  PHOTOGRAPHY
                </span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-neutral-100">
                  Visual{' '}
                  <span className="bg-gradient-to-r from-terra-400 to-terra-600 bg-clip-text text-transparent">
                    Stories
                  </span>
                </h1>
              </div>
            </div>
            <p className="text-xl text-neutral-400 max-w-3xl">
              Capturing moments, emotions, and stories through the lens. From portraits to landscapes, each image tells a unique narrative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium font-mono text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-terra-500 to-terra-600 text-white shadow-lg shadow-terra-500/30 scale-105'
                    : 'bg-neutral-900/50 border border-neutral-800/50 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-3 gap-6 auto-rows-auto"
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group ${getGridClass(photo.size)}`}
              >
                <div className="relative h-full min-h-[300px] bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-terra-500/30 transition-all duration-500 cursor-pointer">
                  {/* Image Placeholder with Emoji */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-800/50 to-neutral-900/80">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.5 }}
                      className="text-9xl opacity-20"
                    >
                      {photo.image}
                    </motion.div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Category Badge */}
                    <div className="mb-auto">
                      <span className="inline-block px-3 py-1 bg-terra-500/20 border border-terra-500/30 rounded-lg text-terra-400 text-xs font-medium font-mono backdrop-blur-sm">
                        {categories.find(c => c.id === photo.category)?.label}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        {photo.title}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{photo.location}</span>
                        <span className="text-neutral-600">•</span>
                        <span>{photo.year}</span>
                      </div>

                      <p className="text-neutral-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {photo.description}
                      </p>

                      {/* Technical Info */}
                      <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                        <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {photo.camera}
                        </div>
                        <div className="text-xs text-neutral-600 font-mono">
                          {photo.settings}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photography Services */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold text-neutral-100 mb-12 text-center">Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '👤', title: 'Portrait', desc: 'Professional headshots and lifestyle photography' },
                { icon: '🏞️', title: 'Landscape', desc: 'Nature and architectural photography' },
                { icon: '📦', title: 'Product', desc: 'Commercial product photography' },
                { icon: '🎉', title: 'Events', desc: 'Weddings, corporate events, and celebrations' },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-neutral-900/30 border border-neutral-800/50 rounded-xl hover:border-terra-500/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-100 mb-2">{service.title}</h3>
                  <p className="text-sm text-neutral-400">{service.desc}</p>
                </motion.div>
              ))}
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
              Need a photographer?
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              Let's capture your story through compelling visuals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-terra-500 to-terra-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-terra-500/30 transition-all duration-300 hover:scale-105"
            >
              Book a Session
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

export default PhotographyPortfolio
