import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Users, Settings, Palette, LucideIcon } from 'lucide-react'

interface SkillCategory {
  title: string
  icon: LucideIcon
  color: string
  skills: { name: string; level: number }[]
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend & Design',
      icon: Palette,
      color: 'from-orange-500 to-yellow-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 92 },
        { name: 'Tailwind CSS', level: 94 },
        { name: 'Figma', level: 90 },
        { name: 'Adobe Photoshop', level: 88 },
        { name: 'Adobe Illustrator', level: 85 },
        { name: 'UI/UX Design', level: 90 },
        { name: 'WordPress', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 88 },
        { name: 'Java', level: 85 },
        { name: 'Node.js', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'Docker', level: 80 },
        { name: 'REST APIs', level: 92 },
        { name: 'Git/GitHub', level: 95 },
      ],
    },
    {
      title: 'Project Management',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Agile/Scrum', level: 92 },
        { name: 'Jira', level: 88 },
        { name: 'Azure DevOps', level: 85 },
        { name: 'Trello', level: 90 },
        { name: 'Team Leadership', level: 90 },
        { name: 'Resource Planning', level: 85 },
        { name: 'SEO Strategy', level: 82 },
        { name: 'Analytics', level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'Microsoft Office', level: 95 },
        { name: 'Power BI', level: 85 },
        { name: 'LaTeX/Overleaf', level: 88 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Digital Marketing', level: 82 },
        { name: 'Content Strategy', level: 85 },
        { name: 'AI/Prompt Engineering', level: 90 },
        { name: 'Cloud Services', level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4">
            What I Do
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Skills &
            <span className="block text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )})}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'Java', 'Tailwind CSS',
              'MongoDB', 'PostgreSQL', 'Docker', 'Git/GitHub', 'Vue.js', 'Laravel',
              'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'WordPress', 'Jira', 'Azure DevOps',
              'REST APIs', 'Power BI', 'LaTeX', 'AI/Prompt Engineering', 'Cloud Services', 'Trello',
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-accent-500/20 hover:border-primary-500/30 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
