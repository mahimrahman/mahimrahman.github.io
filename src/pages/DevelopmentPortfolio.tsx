import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star, GitFork, Calendar, Code, Globe, Github, ExternalLink, Loader2, AlertCircle, RefreshCw } from 'lucide-react'

// GitHub Repository interface
interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  watchers_count: number
  language: string | null
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
  size: number
  default_branch: string
  visibility: string
  archived: boolean
  disabled: boolean
}

// Language colors for badges
const languageColors: Record<string, { bg: string; text: string; border: string }> = {
  JavaScript: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  TypeScript: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  Python: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  Java: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
  HTML: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30' },
  CSS: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30' },
  'C++': { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/30' },
  'C#': { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/30' },
  PHP: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  Ruby: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  Go: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' },
  Shell: { bg: 'bg-lime-500/10', text: 'text-lime-400', border: 'border-lime-500/30' },
  Vue: { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/30' },
  default: { bg: 'bg-neutral-500/10', text: 'text-neutral-400', border: 'border-neutral-500/30' }
}

const DevelopmentPortfolio = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all')
  const [expandedRepo, setExpandedRepo] = useState<number | null>(null)

  // Fetch GitHub repositories
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch('https://api.github.com/users/mahimrahman/repos?sort=updated&per_page=100')

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }

        const data: GitHubRepo[] = await response.json()

        // Filter out archived and disabled repos, sort by updated date
        const activeRepos = data
          .filter(repo => !repo.archived && !repo.disabled && repo.visibility === 'public')
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())

        setRepos(activeRepos)
      } catch (err) {
        console.error('Error fetching GitHub repos:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories')
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  // Get unique languages from repos
  const languages = Array.from(new Set(repos.map(repo => repo.language).filter(Boolean))) as string[]

  // Filter repositories based on selected language
  const filteredRepos = selectedLanguage === 'all'
    ? repos
    : repos.filter(repo => repo.language === selectedLanguage)

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    })
  }

  // Get language styling
  const getLanguageStyle = (language: string | null) => {
    if (!language) return languageColors.default
    return languageColors[language] || languageColors.default
  }

  // Stats
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0)

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 mx-auto mb-6"
          >
            <Loader2 className="w-16 h-16 text-teal-400" />
          </motion.div>
          <p className="text-neutral-400 text-lg">Fetching repositories from GitHub...</p>
        </div>
      </motion.div>
    )
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 flex items-center justify-center"
      >
        <div className="text-center max-w-md px-6">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Connection Failed</h2>
          <p className="text-neutral-400 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-xl hover:bg-teal-500/20 transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5" />
            Retry
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/#portfolio"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-teal-400 transition-colors mb-8 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                <Code className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-3 font-mono">
                  DEVELOPMENT
                </span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-neutral-100">
                  GitHub{' '}
                  <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h1>
              </div>
            </div>
            <p className="text-xl text-neutral-400 max-w-3xl mb-10">
              Real-time projects from my GitHub profile. Full-stack applications, web experiences, and open-source contributions.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="px-6 py-4 bg-neutral-800/30 border border-neutral-700/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-teal-400" />
                  <span className="text-2xl font-bold text-white">{repos.length}</span>
                  <span className="text-neutral-400">Repositories</span>
                </div>
              </div>
              <div className="px-6 py-4 bg-neutral-800/30 border border-neutral-700/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-amber-400" />
                  <span className="text-2xl font-bold text-white">{totalStars}</span>
                  <span className="text-neutral-400">Stars</span>
                </div>
              </div>
              <div className="px-6 py-4 bg-neutral-800/30 border border-neutral-700/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <GitFork className="w-5 h-5 text-purple-400" />
                  <span className="text-2xl font-bold text-white">{totalForks}</span>
                  <span className="text-neutral-400">Forks</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedLanguage('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedLanguage === 'all'
                  ? 'bg-teal-500/20 border border-teal-500/50 text-teal-400'
                  : 'bg-neutral-800/50 border border-neutral-700/50 text-neutral-400 hover:text-white hover:border-neutral-600'
              }`}
            >
              All ({repos.length})
            </button>
            {languages.map((lang) => {
              const style = getLanguageStyle(lang)
              const count = repos.filter(r => r.language === lang).length
              return (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedLanguage === lang
                      ? `${style.bg} border ${style.border} ${style.text}`
                      : 'bg-neutral-800/50 border border-neutral-700/50 text-neutral-400 hover:text-white hover:border-neutral-600'
                  }`}
                >
                  {lang} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            <AnimatePresence mode="popLayout">
              {filteredRepos.map((repo, index) => {
                const langStyle = getLanguageStyle(repo.language)
                return (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    layout
                    className="group"
                  >
                    <div
                      className="relative p-6 lg:p-8 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl hover:border-teal-500/30 transition-all duration-500 cursor-pointer overflow-hidden"
                      onClick={() => setExpandedRepo(expandedRepo === repo.id ? null : repo.id)}
                    >
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:to-transparent transition-all duration-500"></div>

                      <div className="relative">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-display font-bold text-neutral-100 group-hover:text-teal-400 transition-colors">
                                {repo.name}
                              </h3>
                              {repo.language && (
                                <span className={`px-3 py-1 ${langStyle.bg} border ${langStyle.border} rounded-lg ${langStyle.text} text-sm font-mono`}>
                                  {repo.language}
                                </span>
                              )}
                            </div>
                            <p className="text-neutral-400 leading-relaxed">
                              {repo.description || 'No description provided'}
                            </p>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-3">
                            <a
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="px-4 py-2 bg-neutral-800/50 border border-neutral-700/50 text-neutral-300 rounded-lg hover:bg-neutral-800/80 hover:text-white transition-all duration-300 text-sm font-medium inline-flex items-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              Code
                            </a>
                            {repo.homepage && (
                              <a
                                href={repo.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-lg hover:bg-teal-500/20 transition-all duration-300 text-sm font-medium inline-flex items-center gap-2"
                              >
                                <Globe className="w-4 h-4" />
                                Live Demo
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Stats Row */}
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <div className="flex items-center gap-1.5 text-neutral-400 text-sm">
                            <Star className="w-4 h-4 text-amber-400" />
                            <span>{repo.stargazers_count}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-neutral-400 text-sm">
                            <GitFork className="w-4 h-4 text-purple-400" />
                            <span>{repo.forks_count}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-neutral-400 text-sm">
                            <Calendar className="w-4 h-4 text-teal-400" />
                            <span>Updated {formatDate(repo.updated_at)}</span>
                          </div>
                        </div>

                        {/* Topics */}
                        {repo.topics && repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {repo.topics.map((topic, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-xs text-neutral-400 font-mono"
                              >
                                #{topic}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Expandable Details */}
                        <AnimatePresence>
                          {expandedRepo === repo.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-6 mt-6 border-t border-neutral-800/50">
                                <div className="grid md:grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="text-sm font-bold text-neutral-300 uppercase tracking-wider mb-3">Repository Info</h4>
                                    <ul className="space-y-2 text-sm text-neutral-400">
                                      <li className="flex items-center gap-2">
                                        <span className="text-neutral-500">Created:</span>
                                        <span>{formatDate(repo.created_at)}</span>
                                      </li>
                                      <li className="flex items-center gap-2">
                                        <span className="text-neutral-500">Last Push:</span>
                                        <span>{formatDate(repo.pushed_at)}</span>
                                      </li>
                                      <li className="flex items-center gap-2">
                                        <span className="text-neutral-500">Size:</span>
                                        <span>{(repo.size / 1024).toFixed(2)} MB</span>
                                      </li>
                                      <li className="flex items-center gap-2">
                                        <span className="text-neutral-500">Default Branch:</span>
                                        <span className="font-mono">{repo.default_branch}</span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-bold text-neutral-300 uppercase tracking-wider mb-3">Quick Links</h4>
                                    <div className="flex flex-col gap-2">
                                      <a
                                        href={`${repo.html_url}/issues`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-neutral-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <ExternalLink className="w-4 h-4" />
                                        Issues
                                      </a>
                                      <a
                                        href={`${repo.html_url}/pulls`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-neutral-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <ExternalLink className="w-4 h-4" />
                                        Pull Requests
                                      </a>
                                      <a
                                        href={`${repo.html_url}/commits`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-neutral-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <ExternalLink className="w-4 h-4" />
                                        Commits
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Expand Indicator */}
                        <div className="flex items-center justify-center mt-4 pt-4 border-t border-neutral-800/50">
                          <motion.svg
                            className="w-5 h-5 text-teal-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={{ rotate: expandedRepo === repo.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
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
              Interested in working together?
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              Let's discuss how I can help bring your project to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://github.com/mahimrahman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-800/50 border border-neutral-700/50 text-white font-bold rounded-xl hover:bg-neutral-800/80 hover:border-neutral-600 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                View GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DevelopmentPortfolio
