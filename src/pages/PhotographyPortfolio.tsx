import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowLeft, X, ChevronLeft, ChevronRight, MapPin, Camera } from 'lucide-react'

interface Photo {
  name: string
  path: string
  metadata?: {
    location?: string
    model?: string
    client?: string
  }
}

interface Category {
  name: string
  path: string
  imageCount: number
  images: Photo[]
}

interface ManifestData {
  categories: Category[]
  totalImages: number
  cloudName: string
}

const PhotographyPortfolio = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [allPhotos, setAllPhotos] = useState<Photo[]>([])

  useEffect(() => {
    fetch('/assets/Photography/photography-manifest.json')
      .then(res => res.json())
      .then((data: ManifestData) => {
        setCategories(data.categories)
        const all = data.categories.flatMap(cat => cat.images)
        setAllPhotos(all)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading photography:', err)
        setLoading(false)
      })
  }, [])

  const getDisplayPhotos = () => {
    if (activeCategory === 'all') {
      return allPhotos
    }
    const category = categories.find(c => c.name.toLowerCase() === activeCategory)
    return category ? category.images : allPhotos
  }

  const displayPhotos = getDisplayPhotos()

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo)
    setCurrentPhotoIndex(index)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    const photos = getDisplayPhotos()
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
    setSelectedPhoto(photos[(currentPhotoIndex + 1) % photos.length])
  }

  const prevPhoto = () => {
    const photos = getDisplayPhotos()
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
    setSelectedPhoto(photos[(currentPhotoIndex - 1 + photos.length) % photos.length])
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedPhoto) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextPhoto()
      if (e.key === 'ArrowLeft') prevPhoto()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedPhoto, currentPhotoIndex])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-400 text-xl">Loading Photography...</p>
        </div>
      </div>
    )
  }

  return (
    <div
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
              to="/#portfolio"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-rose-400 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-3 font-mono">
                PHOTOGRAPHY
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white drop-shadow-lg">
                Visual{' '}
                <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent drop-shadow-lg">
                  Stories
                </span>
              </h1>
            </div>
            <p className="text-xl text-neutral-300 max-w-3xl">
              Capturing moments, emotions, and stories through the lens. Explore {allPhotos.length} photographs
              from landscapes across Montreal, Bangladesh, and Malaysia to portraits and product photography.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-xl font-medium font-mono text-sm transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/30 scale-105'
                  : 'bg-neutral-900/50 border border-neutral-800/50 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700/50'
              }`}
            >
              All ({allPhotos.length})
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name.toLowerCase())}
                className={`px-6 py-3 rounded-xl font-medium font-mono text-sm transition-all duration-300 ${
                  activeCategory === category.name.toLowerCase()
                    ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/30 scale-105'
                    : 'bg-neutral-900/50 border border-neutral-800/50 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700/50'
                }`}
              >
                {category.name} ({category.imageCount})
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {displayPhotos.map((photo, index) => (
              <motion.div
                key={photo.path}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.5) }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(photo, index)}
              >
                <img
                  src={photo.path}
                  alt={photo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay Info */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.metadata?.location && (
                    <div className="flex items-center gap-1 text-white text-sm mb-1">
                      <MapPin size={14} />
                      <span className="truncate">{photo.metadata.location}</span>
                    </div>
                  )}
                  {photo.metadata?.model && (
                    <div className="flex items-center gap-1 text-white/70 text-xs">
                      <Camera size={12} />
                      <span>Model: {photo.metadata.model}</span>
                    </div>
                  )}
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-rose-500/0 group-hover:border-rose-500/50 rounded-xl transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-neutral-800/80 backdrop-blur-sm rounded-full text-white hover:bg-neutral-700 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              className="absolute left-4 p-4 bg-neutral-800/80 backdrop-blur-sm rounded-full text-white hover:bg-neutral-700 transition-colors"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              className="absolute right-4 p-4 bg-neutral-800/80 backdrop-blur-sm rounded-full text-white hover:bg-neutral-700 transition-colors"
            >
              <ChevronRight size={32} />
            </button>

            {/* Main Image */}
            <motion.img
              key={selectedPhoto.path}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedPhoto.path}
              alt={selectedPhoto.name}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Photo Info */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-neutral-800/80 backdrop-blur-sm rounded-xl text-white text-center">
              {selectedPhoto.metadata?.location && (
                <div className="flex items-center justify-center gap-2 text-lg mb-1">
                  <MapPin size={18} className="text-rose-400" />
                  <span>{selectedPhoto.metadata.location}</span>
                </div>
              )}
              {selectedPhoto.metadata?.model && (
                <div className="text-sm text-neutral-400">
                  Model: {selectedPhoto.metadata.model}
                </div>
              )}
              <div className="text-sm text-neutral-500 mt-2">
                {currentPhotoIndex + 1} / {displayPhotos.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                { icon: MapPin, title: 'Landscape', desc: 'Nature, architecture, and cityscape photography' },
                { icon: Camera, title: 'Portrait', desc: 'Professional headshots and lifestyle photography' },
                { icon: Camera, title: 'Product', desc: 'Commercial product photography for brands' },
                { icon: Camera, title: 'Events', desc: 'Weddings, corporate events, and celebrations' },
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-neutral-900/30 border border-neutral-800/50 rounded-xl hover:border-rose-500/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                      <Icon className="text-rose-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-100 mb-2">{service.title}</h3>
                    <p className="text-sm text-neutral-400">{service.desc}</p>
                  </motion.div>
                )
              })}
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
              to="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-rose-500/30 transition-all duration-300 hover:scale-105"
            >
              Book a Session
              <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PhotographyPortfolio
