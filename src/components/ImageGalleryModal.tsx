import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Image {
  id: number
  title: string
  category: string
  description?: string
  placeholder: string // emoji or color
}

interface ImageGalleryModalProps {
  images: Image[]
  initialIndex?: number
  onClose: () => void
}

const ImageGalleryModal = ({ images, initialIndex = 0, onClose }: ImageGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-[60] bg-neutral-950/95 backdrop-blur-md">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-neutral-900/80 hover:bg-neutral-800 transition-colors text-neutral-400 hover:text-white"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Main Content */}
      <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Image Container */}
        <div className="relative w-full max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl overflow-hidden border border-neutral-800/50 flex items-center justify-center"
            >
              {/* Placeholder (In real app, this would be an actual image) */}
              <div className="text-9xl opacity-40">
                {currentImage.placeholder}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-neutral-900/80 hover:bg-neutral-800 transition-colors text-white"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-neutral-900/80 hover:bg-neutral-800 transition-colors text-white"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Image Info */}
        <motion.div
          key={`info-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 max-w-5xl w-full text-center"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-2">
            {currentImage.title}
          </h3>
          {currentImage.description && (
            <p className="text-neutral-400">
              {currentImage.description}
            </p>
          )}
          <div className="mt-4 text-sm text-neutral-500">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-8 flex gap-2 overflow-x-auto max-w-full pb-4">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? 'border-primary-500 scale-110'
                    : 'border-neutral-800 opacity-50 hover:opacity-100'
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-3xl">
                  {image.placeholder}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageGalleryModal
