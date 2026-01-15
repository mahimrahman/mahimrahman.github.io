import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import HomeNew from './pages/HomeNew'
import UIUXPortfolio from './pages/UIUXPortfolio'
import PhotographyPortfolio from './pages/PhotographyPortfolio'
import DesignPortfolio from './pages/DesignPortfolio'
import DevelopmentPortfolio from './pages/DevelopmentPortfolio'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  // Handle /contact redirect to /#contact
  useEffect(() => {
    if (location.pathname === '/contact') {
      navigate('/#contact', { replace: true })
    }
  }, [location.pathname, navigate])

  // Scroll to top on route change, but respect hash anchors
  useEffect(() => {
    if (location.pathname !== '/') {
      // For portfolio pages, scroll to top immediately
      window.scrollTo(0, 0)
    } else if (location.hash) {
      // For home page with hash, scroll to section
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return (
    <div className="relative min-h-screen bg-neutral-950">
      <Cursor />
      <ScrollProgress />
      <Routes location={location}>
        <Route path="/" element={<HomeNew />} />
        <Route path="/portfolio/uiux" element={<UIUXPortfolio />} />
        <Route path="/portfolio/photography" element={<PhotographyPortfolio />} />
        <Route path="/portfolio/graphics" element={<DesignPortfolio />} />
        <Route path="/portfolio/development" element={<DevelopmentPortfolio />} />
      </Routes>
    </div>
  )
}

export default App
