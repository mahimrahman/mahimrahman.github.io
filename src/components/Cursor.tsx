import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      )
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', updateCursorType)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', updateCursorType)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-400 to-accent-400 opacity-80"></div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 50,
          mass: 0.1,
        }}
      >
        <div className="w-full h-full rounded-full bg-white"></div>
      </motion.div>
    </>
  )
}

export default Cursor
