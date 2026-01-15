import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Code2, Monitor, Figma, PenTool, Camera } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '#home', label: 'Home' },
    { path: '#experience', label: 'Experience' },
    { path: '#contact', label: 'Contact' },
  ]

  const portfolioItems = [
    { path: '#portfolio', label: 'Development', Icon: Monitor, color: 'dev' },
    { path: '#portfolio', label: 'UI/UX Design', Icon: Figma, color: 'uiux' },
    { path: '#portfolio', label: 'Graphic Design', Icon: PenTool, color: 'design' },
    { path: '#portfolio', label: 'Photography', Icon: Camera, color: 'photo' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsPortfolioOpen(false)
  }, [location])

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return location.hash === path
    }
    return location.pathname === path
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(path)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        // Update URL hash without jumping
        window.history.pushState(null, '', path)
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-900/80 backdrop-blur-xl shadow-lg shadow-neutral-950/50 border-b border-neutral-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-accent-500/20 group-hover:shadow-accent-500/40 transition-all duration-300 group-hover:scale-105">
                <Code2 className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-display font-bold text-white hidden sm:block">
                Mahimur
              </span>
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a 
                key={item.path} 
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`relative px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-secondary-500/10 rounded-lg border border-accent-500/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </a>
            ))}

            {/* Portfolio Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPortfolioOpen(true)}
              onMouseLeave={() => setIsPortfolioOpen(false)}
            >
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`relative px-5 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  portfolioItems.some(item => isActive(item.path))
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Portfolio
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isPortfolioOpen ? 'rotate-180' : ''}`}
                  strokeWidth={2}
                />
                {portfolioItems.some(item => isActive(item.path)) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-secondary-500/10 rounded-lg border border-accent-500/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>

              <AnimatePresence>
                {isPortfolioOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 w-64 bg-neutral-900/95 backdrop-blur-xl border border-neutral-800/50 rounded-xl shadow-2xl shadow-neutral-950/50 overflow-hidden"
                  >
                    {portfolioItems.map((item, index) => {
                      const IconComponent = item.Icon
                      return (
                        <Link key={item.path} to={item.path}>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`px-4 py-3 flex items-center gap-3 transition-all duration-300 ${
                              isActive(item.path)
                                ? `bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-500/10 text-white border-l-2 border-${item.color}-500`
                                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                            }`}
                          >
                            <div className={`w-9 h-9 flex items-center justify-center rounded-lg bg-${item.color}-500/10 border border-${item.color}-500/30`}>
                              <IconComponent className={`w-5 h-5 text-${item.color}-400`} strokeWidth={1.5} />
                            </div>
                            <span className="font-medium">{item.label}</span>
                          </motion.div>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Button */}
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-accent-500/50 transition-all duration-300 hover:scale-105"
            >
              Let's Talk
            </motion.button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
              }}
              className="w-6 h-0.5 bg-white transition-all"
            />
            <motion.span
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              className="w-6 h-0.5 bg-white transition-all"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
              }}
              className="w-6 h-0.5 bg-white transition-all"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-neutral-900/95 backdrop-blur-xl border-t border-neutral-800/50"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <div
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-accent-500/20 to-secondary-500/10 text-white border border-accent-500/30'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}

              {/* Mobile Portfolio Section */}
              <div>
                <button
                  onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-all duration-300"
                >
                  Portfolio
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isPortfolioOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {isPortfolioOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 ml-4 space-y-2"
                    >
                      {portfolioItems.map((item) => {
                        const IconComponent = item.Icon
                        return (
                          <Link key={item.path} to={item.path}>
                            <div
                              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                                isActive(item.path)
                                  ? `bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-500/10 text-white border border-${item.color}-500/30`
                                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                              }`}
                            >
                              <div className={`w-8 h-8 flex items-center justify-center rounded-lg bg-${item.color}-500/10 border border-${item.color}-500/30`}>
                                <IconComponent className={`w-4 h-4 text-${item.color}-400`} strokeWidth={1.5} />
                              </div>
                              <span className="text-sm">{item.label}</span>
                            </div>
                          </Link>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="#contact" onClick={(e) => { handleNavClick(e, '#contact'); setIsMobileMenuOpen(false); }}>
                <div className="w-full px-4 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-accent-500/50 transition-all duration-300 text-center">
                  Let's Talk
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
