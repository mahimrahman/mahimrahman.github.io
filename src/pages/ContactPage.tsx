import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@yourportfolio.com',
      href: 'mailto:hello@yourportfolio.com',
      color: 'primary',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com',
      color: 'teal',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/yourusername',
      href: 'https://github.com',
      color: 'neutral',
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@yourhandle',
      href: 'https://twitter.com',
      color: 'accent',
    },
  ]

  const services = [
    { icon: '💻', label: 'Web Development' },
    { icon: '📱', label: 'Mobile Apps' },
    { icon: '🎨', label: 'UI/UX Design' },
    { icon: '🏷️', label: 'Brand Identity' },
    { icon: '📸', label: 'Photography' },
    { icon: '🤝', label: 'Consulting' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
              to="/"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-primary-400 transition-colors mb-8 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-neutral-100 mb-6">
              Let's{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl">
              Have a project in mind? Let's discuss how we can work together to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50 rounded-2xl hover:border-primary-500/30 transition-all duration-500"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-100 mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-neutral-400 break-all group-hover:text-primary-400 transition-colors">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold text-neutral-100 mb-6">
                Send a Message
              </h2>
              <p className="text-neutral-400 mb-8">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800/50 rounded-xl text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-primary-500/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800/50 rounded-xl text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-primary-500/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800/50 rounded-xl text-neutral-100 focus:outline-none focus:border-primary-500/50 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="uiux-design">UI/UX Design</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="photography">Photography</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800/50 rounded-xl text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-primary-500/50 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-neutral-950 font-bold rounded-xl hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-accent-500/10 border border-accent-500/30 rounded-xl text-accent-400 text-sm"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Services */}
              <div className="p-8 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50 rounded-2xl">
                <h3 className="text-2xl font-display font-bold text-neutral-100 mb-6">
                  Services Offered
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-neutral-900/50 border border-neutral-800/50 rounded-xl"
                    >
                      <span className="text-2xl">{service.icon}</span>
                      <span className="text-sm text-neutral-300 font-medium">{service.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="p-8 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50 rounded-2xl">
                <h3 className="text-2xl font-display font-bold text-neutral-100 mb-6">
                  Availability
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mt-2"></div>
                    <div>
                      <p className="text-neutral-300 font-medium mb-1">Open for Projects</p>
                      <p className="text-sm text-neutral-400">Currently accepting new client work</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                    <div>
                      <p className="text-neutral-300 font-medium mb-1">Response Time</p>
                      <p className="text-sm text-neutral-400">Usually within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
                    <div>
                      <p className="text-neutral-300 font-medium mb-1">Time Zone</p>
                      <p className="text-sm text-neutral-400">PST (UTC-8)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="p-8 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50 rounded-2xl">
                <h3 className="text-2xl font-display font-bold text-neutral-100 mb-6">
                  Quick FAQ
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-neutral-300 font-medium mb-1">Do you work remotely?</p>
                    <p className="text-sm text-neutral-400">Yes, I work with clients worldwide.</p>
                  </div>
                  <div>
                    <p className="text-neutral-300 font-medium mb-1">Project minimum?</p>
                    <p className="text-sm text-neutral-400">Typically $5,000 for comprehensive projects.</p>
                  </div>
                  <div>
                    <p className="text-neutral-300 font-medium mb-1">Typical timeline?</p>
                    <p className="text-sm text-neutral-400">4-12 weeks depending on project scope.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location (Optional) */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-8 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50 rounded-2xl">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-display font-bold text-neutral-100 mb-2">
                Based in San Francisco
              </h3>
              <p className="text-neutral-400">
                Working with clients globally. Open to remote collaboration and on-site projects.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default ContactPage
