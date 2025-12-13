import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { name: 'GitHub', icon: 'G', href: 'https://github.com/mahimrahman' },
    { name: 'LinkedIn', icon: 'L', href: 'https://www.linkedin.com/in/mahimurrahman-khan' },
    { name: 'Behance', icon: 'B', href: 'https://www.behance.net/mahimrahman' },
    { name: 'Instagram', icon: 'I', href: 'https://www.instagram.com/snazzy_memories/' },
  ]

  return (
    <footer className="relative bg-slate-900/50 border-t border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center font-bold text-white shadow-lg shadow-primary-500/50">
                <span className="text-xl font-display">M</span>
              </div>
              <span className="text-xl font-display font-bold text-white">Mahimur</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Crafting exceptional digital experiences through innovative design and cutting-edge technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:border-transparent transition-all duration-300"
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">More</h3>
            <ul className="space-y-3">
              {quickLinks.slice(3).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get notified about new projects and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 transition-all duration-300"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Portfolio. All rights reserved. Built with{' '}
              <span className="text-gradient">❤️</span> and{' '}
              <span className="text-primary-400">React</span>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full shadow-lg shadow-primary-500/50 flex items-center justify-center hover:shadow-2xl transition-all duration-300 z-50"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  )
}

export default Footer
