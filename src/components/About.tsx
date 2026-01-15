import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Users, Settings, Palette } from 'lucide-react'

const ABOUT_ME = {
  title: "About Me",
  subtitle: "Software Engineer & Full-Stack Developer",
  description: [
    "Software Engineering graduate with a strong foundation in IT solutions, project management, and data analysis. Driven to transform complex challenges into elegant solutions through innovative thinking and continuous learning.",
    "Specialized in full-stack development, UI/UX design, and data-driven decision making. Passionate about creating impactful digital experiences that bridge the gap between human needs and technical excellence.",
    "Committed to collaborative excellence, bringing teams together to deliver solutions that drive real-world impact and push the boundaries of modern technology."
  ]
}

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend & Design',
    icon: Palette,
    color: 'from-orange-500 to-yellow-500',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Design', 'WordPress']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: ['Python', 'Java', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'REST APIs', 'Git/GitHub']
  },
  {
    id: 'management',
    title: 'Project Management',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    skills: ['Agile/Scrum', 'Jira', 'Azure DevOps', 'Trello', 'Team Leadership', 'Resource Planning', 'SEO Strategy', 'Analytics']
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    icon: Settings,
    color: 'from-red-500 to-orange-500',
    skills: ['Microsoft Office', 'Power BI', 'LaTeX/Overleaf', 'Data Analysis', 'Digital Marketing', 'Content Strategy', 'AI/Prompt Engineering', 'Cloud Services']
  }
]

const stats = [
  { number: '12+', label: 'Projects Completed' },
  { number: '3+', label: 'Years Experience' },
  { number: '4+', label: 'Domains of Expertise' },
  { number: '15+', label: 'Technologies Mastered' },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4">
            {ABOUT_ME.title}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Turning Ideas Into
            <span className="block text-gradient">Digital Reality</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-bold text-white">
              {ABOUT_ME.subtitle.split('&')[0]}
              <span className="text-gradient">&{ABOUT_ME.subtitle.split('&')[1]}</span>
            </h3>

            {ABOUT_ME.description.map((para, i) => (
              <p key={i} className="text-lg text-slate-400 leading-relaxed">
                {para}
              </p>
            ))}

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Skills Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {SKILL_CATEGORIES.map((category, index) => {
              const CategoryIcon = category.icon
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass p-5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <CategoryIcon size={20} className="text-white" />
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-gradient transition-all">
                      {category.title}
                    </h4>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-slate-400 hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
