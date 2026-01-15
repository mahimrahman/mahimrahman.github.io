import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowLeft, X, ChevronLeft, ChevronRight, Filter, Palette, FileText, Monitor, Pen, Image as ImageIcon, Briefcase, Trophy, Folder, Award, GraduationCap, Box, LucideIcon } from 'lucide-react'

interface ImageData {
  name: string
  path: string
}

interface Subcategory {
  id: string
  title: string
  folder: string
  description: string
}

interface Category {
  id: string
  title: string
  description: string
  icon: string
  color: string
  folder: string
  images: ImageData[]
  subcategories?: Subcategory[]
  hasSubfolders?: boolean
  subfoldersAsCategories?: boolean
  dynamicSubfolders?: Subcategory[]
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Palette,
  FileText,
  Monitor,
  Pen,
  Image: ImageIcon,
  Briefcase,
  Trophy,
  Folder,
  Award,
  GraduationCap,
  Box
}

const DesignPortfolio = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [allImages, setAllImages] = useState<ImageData[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const imagesPerPage = 40

  useEffect(() => {
    Promise.all([
      fetch('/assets/Graphics/categories.json').then(res => res.json()),
      fetch('/assets/Graphics/images-manifest.json').then(res => res.json())
    ])
      .then(([categoriesData, manifestData]) => {
        setAllImages(manifestData.images)

        const categoriesWithImages = categoriesData.categories.map((cat: Category) => {
          if (cat.hasSubfolders && cat.subfoldersAsCategories) {
            const folderImages = manifestData.images.filter((img: ImageData) =>
              img.path.includes(cat.folder)
            )

            const subfolderSet = new Set<string>()
            folderImages.forEach((img: ImageData) => {
              let pathToProcess = img.path
              if (pathToProcess.includes('cloudinary.com')) {
                const urlParts = decodeURIComponent(pathToProcess).split('/Portfolio/Graphic Design/')
                if (urlParts.length > 1) {
                  pathToProcess = urlParts[1]
                }
              } else {
                pathToProcess = pathToProcess.replace('/assets/Graphics/', '')
              }

              const pathParts = pathToProcess.split('/')
              if (pathParts.length > 1) {
                subfolderSet.add(pathParts[1])
              }
            })

            const dynamicSubfolders = Array.from(subfolderSet).map(folderName => ({
              id: folderName.toLowerCase().replace(/\s+/g, '-'),
              title: folderName.replace(/-/g, ' '),
              folder: folderName,
              description: `${folderName.replace(/-/g, ' ')} project`
            }))

            return {
              ...cat,
              dynamicSubfolders,
              images: folderImages
            }
          }

          const categoryImages = manifestData.images.filter((img: ImageData) =>
            img.path.includes(cat.folder)
          )

          return {
            ...cat,
            images: categoryImages
          }
        }).filter((cat: Category) => cat.images.length > 0)

        setCategories(categoriesWithImages)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading graphics:', err)
        setLoading(false)
      })
  }, [])

  const getDisplayImages = () => {
    if (activeCategory === 'all') {
      return allImages
    }
    const category = categories.find(cat => cat.id === activeCategory)
    return category ? category.images : allImages
  }

  const displayImages = getDisplayImages()
  const totalPages = Math.ceil(displayImages.length / imagesPerPage)
  const paginatedImages = displayImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  )

  const openLightbox = (image: ImageData, index: number) => {
    setSelectedImage(image)
    setCurrentImageIndex((currentPage - 1) * imagesPerPage + index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const images = getDisplayImages()
    const newIndex = (currentImageIndex + 1) % images.length
    setCurrentImageIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  const prevImage = () => {
    const images = getDisplayImages()
    const newIndex = (currentImageIndex - 1 + images.length) % images.length
    setCurrentImageIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedImage) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedImage, currentImageIndex])

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-400 text-xl">Loading Graphics...</p>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(90,143,72,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/#portfolio"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-primary-400 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-3 font-mono">
                GRAPHIC DESIGN
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-neutral-100">
                Visual{' '}
                <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Identity
                </span>
              </h1>
            </div>
            <p className="text-xl text-neutral-400 max-w-3xl">
              Explore {allImages.length} creative works across {categories.length} categories.
              From branding and print design to illustrations and digital graphics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Filter size={20} className="text-primary-400" />
            <span className="text-neutral-400 font-medium">Filter by Category</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30 scale-105'
                  : 'bg-neutral-900/50 border border-neutral-800/50 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700/50'
              }`}
            >
              All ({allImages.length})
            </button>
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon] || Folder
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30 scale-105'
                      : 'bg-neutral-900/50 border border-neutral-800/50 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700/50'
                  }`}
                >
                  <IconComponent size={16} />
                  {category.title} ({category.images.length})
                </button>
              )
            })}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-neutral-500 text-sm">
            <span>Showing {paginatedImages.length} of {displayImages.length} images</span>
            {totalPages > 1 && (
              <span>Page {currentPage} of {totalPages}</span>
            )}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {paginatedImages.map((image, index) => (
              <motion.div
                key={image.path}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.02, 0.4) }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-neutral-800/50"
                onClick={() => openLightbox(image, index)}
              >
                {image.path.endsWith('.mp4') ? (
                  <video
                    src={image.path}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause()
                      e.currentTarget.currentTime = 0
                    }}
                  />
                ) : (
                  <img
                    src={image.path}
                    alt={image.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-primary-500 text-white rounded-lg font-medium text-sm">
                    View
                  </span>
                </div>

                {/* Border Effect */}
                <div className="absolute inset-0 border-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-xl transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-neutral-800/80 backdrop-blur-sm text-neutral-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-700/80 transition-colors flex items-center gap-2"
              >
                <ChevronLeft size={18} />
                Previous
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-lg font-medium transition-all ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                          : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-neutral-800/80 backdrop-blur-sm text-neutral-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-700/80 transition-colors flex items-center gap-2"
              >
                Next
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
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
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 p-4 bg-neutral-800/80 backdrop-blur-sm rounded-full text-white hover:bg-neutral-700 transition-colors"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 p-4 bg-neutral-800/80 backdrop-blur-sm rounded-full text-white hover:bg-neutral-700 transition-colors"
            >
              <ChevronRight size={32} />
            </button>

            {/* Main Content */}
            {selectedImage.path.endsWith('.mp4') ? (
              <video
                key={selectedImage.path}
                src={selectedImage.path}
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
                controls
                autoPlay
                loop
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.img
                key={selectedImage.path}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={selectedImage.path}
                alt={selectedImage.name}
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}

            {/* Image Info */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-neutral-800/80 backdrop-blur-sm rounded-xl text-white text-center">
              <p className="font-medium truncate max-w-md">{selectedImage.name}</p>
              <p className="text-sm text-neutral-400 mt-1">
                {currentImageIndex + 1} / {displayImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Capabilities */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-neutral-100 mb-8 text-center">Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Palette, label: 'Branding' },
              { icon: FileText, label: 'Print Design' },
              { icon: Monitor, label: 'Digital Design' },
              { icon: Pen, label: 'Illustration' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-neutral-900/30 border border-neutral-800/50 rounded-xl hover:border-primary-500/30 transition-all"
                >
                  <div className="w-12 h-12 mx-auto rounded-lg bg-primary-500/10 flex items-center justify-center mb-3">
                    <Icon className="text-primary-400" size={24} />
                  </div>
                  <div className="text-sm text-neutral-300 font-medium">{item.label}</div>
                </motion.div>
              )
            })}
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
              Ready to elevate your brand?
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              Let's collaborate on creating a visual identity that stands out.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-neutral-950 font-bold rounded-xl hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105"
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

export default DesignPortfolio
