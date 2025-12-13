import { useEffect, useState } from 'react'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import HomeNew from './pages/HomeNew'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-primary-500/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-primary-500 border-r-accent-500 rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">Loading Portfolio</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-neutral-950">
      <Cursor />
      <ScrollProgress />
      <HomeNew />
    </div>
  )
}

export default App
