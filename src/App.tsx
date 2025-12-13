import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-primary-500/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-primary-500 border-r-accent-500 rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-display font-bold text-gradient">Loading Portfolio</h2>
          <div className="mt-4 w-48 h-1 mx-auto bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-500 to-accent-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
