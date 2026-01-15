import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { GraduationCap, Briefcase, Users } from 'lucide-react'

type RegionFilter = 'All' | 'Canada' | 'Malaysia' | 'Bangladesh'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeRegion, setActiveRegion] = useState<RegionFilter>('All')

  const experiences = [
    {
      type: 'education',
      role: 'MEng in Software Engineering',
      company: 'Concordia University',
      period: 'Sep 2023 - Aug 2025',
      location: 'Montreal, QC',
      region: 'Canada',
      description: 'Mastering advanced software engineering techniques, focusing on project management, software comprehension, and human-computer interaction.',
      achievements: [
        'Specializing in Software Architecture and Design.',
        'Active member of the Graduate Students Association.',
        'Conducting research on modern software engineering methodologies.',
      ],
      skills: ['Software Architecture', 'Project Management', 'Research'],
    },
    {
      type: 'work',
      role: 'Software Engineer',
      company: 'Bassili Group',
      period: '2023 - 2024',
      location: 'Montreal, QC',
      region: 'Canada',
      description: 'Developed and deployed BassiliChat AI and BassiliTrade platforms. Architected scalable backend solutions using modern frameworks and cloud technologies.',
      achievements: [
        'Built AI-powered chat applications using React and Node.js.',
        'Architected trading platform with TypeScript and cloud technologies.',
        'Optimized application performance across both flagship products.',
      ],
      skills: ['React', 'Node.js', 'AI Development', 'Trading Platform', 'Cloud Technologies', 'TypeScript'],
    },
    {
      type: 'education',
      role: 'Graduate Teaching Assistant',
      company: 'Gina Cody School of Engineering',
      period: 'Fall 2024 - Winter 2025',
      location: 'Montreal, QC',
      region: 'Canada',
      description: 'Teaching Assistant for SOEN 6431 Software Systems Requirements Engineering. Graded assignments and projects for 80+ graduate students with detailed feedback.',
      achievements: [
        'Facilitated learning for graduate students in software engineering principles.',
        'Provided detailed feedback and grading for assignments and projects.',
        'Mentored students on complex software architecture and design patterns.',
      ],
      skills: ['Teaching', 'Software Engineering', 'Requirements Engineering', 'Mentoring'],
    },
    {
      type: 'leadership',
      role: 'VP Marketing',
      company: 'HackConcordia',
      period: 'May 2024 - Present',
      location: 'Montreal, QC',
      region: 'Canada',
      description: "Led comprehensive marketing strategies for Canada's largest student-run hackathon. Managed social media campaigns reaching 10,000+ students across universities.",
      achievements: [
        'Managed social media presence and executed strategic marketing campaigns.',
        'Coordinated with sponsors and partners to secure funding and support for events.',
        'Increased student engagement and participation in hackathons through targeted outreach.',
      ],
      skills: ['Marketing Strategy', 'Social Media', 'Event Planning', 'Community Engagement'],
    },
    {
      type: 'leadership',
      role: 'Director',
      company: 'Graduate Students Association',
      period: 'June 2024 - Present',
      location: 'Montreal, QC',
      region: 'Canada',
      description: 'Elected Director representing graduate student interests university-wide. Participated in Student Handbook and Healthcare Committee initiatives.',
      achievements: [
        'Represented graduate student interests at university-wide meetings.',
        'Participated in Student Handbook and Healthcare Committee initiatives.',
        'Advocated for policy improvements benefiting graduate students.',
      ],
      skills: ['Leadership', 'Student Advocacy', 'Policy Development', 'Committee Management'],
    },
    {
      type: 'education',
      role: 'Student Facilitator',
      company: 'Dean of Students Office',
      period: 'Sep 2024 - Present',
      location: 'Montreal, QC',
      region: 'Canada',
      description: 'Facilitated peer-led discussions and collaborative learning activities for new students. Provided mentorship and guidance to support academic transition.',
      achievements: [
        'Facilitated peer-led discussions and collaborative learning activities.',
        'Provided mentorship and guidance to support academic transition.',
        'Built community among new students through engagement activities.',
      ],
      skills: ['Mentorship', 'Facilitation', 'Student Support', 'Community Building'],
    },
    {
      type: 'leadership',
      role: 'Marketing/Communications',
      company: 'TEDx Concordia',
      period: 'Jan 2025 - Mar 2025',
      location: 'Montreal, QC',
      region: 'Canada',
      description: 'Developed and executed marketing strategies for TEDx Concordia University 2025 event. Created compelling content and managed social media campaigns.',
      achievements: [
        'Developed and executed marketing strategies for TEDx event.',
        'Created compelling content for social media campaigns.',
        'Managed event promotion and audience engagement.',
      ],
      skills: ['Marketing', 'Social Media', 'Content Creation', 'Event Promotion'],
    },
    {
      type: 'leadership',
      role: 'VP - Events',
      company: 'Best Buddies Concordia',
      period: 'Jan 2024 - May 2025',
      location: 'Montreal, QC',
      region: 'Canada',
      description: 'Plan and execute inclusive events for the Best Buddies Concordia Chapter, promoting friendships and social inclusion for individuals with intellectual and developmental disabilities.',
      achievements: [
        'Planned and executed inclusive events promoting friendships and social inclusion.',
        'Collaborated with team members and community partners to design engaging activities.',
        'Managed event logistics for individuals with intellectual and developmental disabilities.',
      ],
      skills: ['Event Planning', 'Inclusive Design', 'Community Engagement', 'Team Collaboration'],
    },
    {
      type: 'leadership',
      role: 'Peer Ambassador',
      company: 'Sexual Assault Resource Center (SARC) - Concordia University',
      period: 'Aug 2024 - Present',
      location: 'Montreal, QC',
      region: 'Canada',
      description: 'Provide compassionate support and connect survivors of sexual assault to essential resources. Raise awareness about sexual violence through prevention initiatives and advocacy.',
      achievements: [
        'Provided compassionate support and connected survivors to essential resources.',
        'Raised awareness about sexual violence through prevention initiatives and advocacy.',
        'Collaborated with campus organizations to foster a safe, inclusive, and supportive environment.',
      ],
      skills: ['Peer Support', 'Advocacy', 'Prevention Education', 'Community Building'],
    },
    {
      type: 'leadership',
      role: 'Portfolio Member - Finance',
      company: 'AIESEC Concordia',
      period: 'July 2024 - Aug 2025',
      location: 'Montreal, QC',
      region: 'Canada',
      description: 'Manage and oversee financial activities, including budgeting, financial planning, and expense tracking.',
      achievements: [
        'Managed and oversaw financial activities for the organization.',
        'Handled budgeting, financial planning, and expense tracking.',
        'Ensured financial transparency and accountability.',
      ],
      skills: ['Financial Management', 'Budgeting', 'Financial Planning', 'Expense Tracking'],
    },
    {
      type: 'leadership',
      role: 'Project Manager',
      company: 'TECH-NEST',
      period: 'Jan 2025 - Aug 2025',
      location: 'Montreal, QC',
      region: 'Canada',
      description: 'Led TECH-NEST as Project Manager for the Forces AVENIR Competition, overseeing a multidisciplinary team and project execution from concept to delivery.',
      achievements: [
        'Led TECH-NEST for the Forces AVENIR Competition.',
        'Oversaw a multidisciplinary team and project execution from concept to delivery.',
        'Coordinated planning, stakeholder engagement, and team collaboration, resulting in innovative solutions and impactful outcomes.',
      ],
      skills: ['Project Management', 'Team Leadership', 'Stakeholder Engagement', 'Strategic Planning'],
    },
    {
      type: 'work',
      role: 'Web Developer',
      company: 'Zavy Technologies',
      period: 'Dec 2021 - Aug 2022',
      location: 'Cyberjaya, Malaysia',
      region: 'Malaysia',
      description: 'Delivered customized web solutions for diverse clients. Developed responsive websites using modern web technologies and managed ERP systems.',
      achievements: [
        'Developed responsive websites using Vue.js and Laravel.',
        'Managed ERP systems and client solutions.',
        'Collaborated with cross-functional teams to deliver robust software solutions.',
      ],
      skills: ['Web Development', 'Vue.js', 'Laravel', 'ERP Systems', 'Client Solutions'],
    },
    {
      type: 'leadership',
      role: 'General Secretary',
      company: 'BD Student Assoc. LUCT',
      period: '2019 - 2021',
      location: 'Cyberjaya, Malaysia',
      region: 'Malaysia',
      description: 'Coordinated events and cultural programs to promote Bangladeshi culture. Managed communication between executive committee and members.',
      achievements: [
        'Organized cultural events and programs.',
        'Managed communication and coordination between committee members.',
        'Built community among Bangladeshi students in Malaysia.',
      ],
      skills: ['Event Coordination', 'Administration', 'Cultural Programs', 'Leadership'],
    },
    {
      type: 'education',
      role: 'BSc in Software Engineering with Multimedia',
      company: 'Limkokwing University of Creative Technology',
      period: 'Aug 2019 - July 2022',
      location: 'Cyberjaya, Malaysia',
      region: 'Malaysia',
      description: 'Honed skills in Software Engineering with Multimedia specialization. Mastered business communication, interaction design, and database architecture.',
      achievements: [
        'Graduated with First Class Honours.',
        'Developed strong foundation in full-stack development and multimedia design.',
        'Completed final year project on "Smart Attendance System using Face Recognition".',
      ],
      skills: ['Software Engineering', 'Multimedia Design', 'Database Architecture'],
    },
    {
      type: 'leadership',
      role: 'Public Relations Team Member',
      company: 'Volunteer for Bangladesh, JAAGO Foundation',
      period: 'May 2015 - July 2019',
      location: 'Dhaka, Bangladesh',
      region: 'Bangladesh',
      description: "Worked with JAAGO Foundation's youth wing to develop and implement campaigns from the UN Sustainable Development Goals (SDGs) that promote quality education, gender equality, and climate awareness.",
      achievements: [
        'Coordinated public outreach and social media, creating effective design and written content utilizing Canva and comparable programs to build youth advocacy and engagement.',
        'Coordinated outreach programs in the community and awareness campaigns, coordinating logistics, volunteers, and impact evaluations to ensure the successful implementation of sustainability initiatives.',
        'Recipient of multiple awards for leadership, innovation, and outstanding contribution to advancing the organization\'s cause and community impact.',
      ],
      skills: ['Public Relations', 'Social Media', 'Campaign Development', 'Youth Advocacy', 'Community Outreach'],
    },
    {
      type: 'leadership',
      role: 'Senior Member',
      company: 'Connecting Youth for Change',
      period: 'Jun 2014 - May 2019',
      location: 'Dhaka, Bangladesh',
      region: 'Bangladesh',
      description: 'Led youth-driven social service projects focused on education and community welfare. Mentored junior members and coordinated cross-organizational partnerships.',
      achievements: [
        'Led community service projects focused on education.',
        'Mentored junior members and volunteers.',
        'Coordinated partnerships with other organizations.',
      ],
      skills: ['Youth Leadership', 'Social Service', 'Mentoring', 'Community Development'],
    },
    {
      type: 'leadership',
      role: 'Member',
      company: 'Bangladesh Scouts',
      period: '2011 - 2019',
      location: 'Dhaka, Bangladesh',
      region: 'Bangladesh',
      description: 'Participated in national scouting programs developing leadership and teamwork. Contributed to community service initiatives including disaster relief.',
      achievements: [
        'Participated in national scouting programs.',
        'Developed leadership and teamwork skills.',
        'Contributed to disaster relief efforts.',
      ],
      skills: ['Leadership', 'Community Service', 'Disaster Relief', 'Teamwork'],
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education':
        return GraduationCap
      case 'leadership':
        return Users
      default:
        return Briefcase
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'from-cyan-500 to-blue-500'
      case 'leadership':
        return 'from-purple-500 to-pink-500'
      default:
        return 'from-primary-500 to-accent-500'
    }
  }

  return (
    <section id="experience" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900/50"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Experience &
            <span className="block text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Region Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {(['All', 'Canada', 'Malaysia', 'Bangladesh'] as RegionFilter[]).map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeRegion === region
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30 scale-105'
                  : 'glass text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {region}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences
              .filter(exp => activeRegion === 'All' || exp.region === activeRegion)
              .map((exp, index) => (
              <motion.div
                key={`${exp.role}-${exp.company}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="glass p-6 lg:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-start gap-4 mb-4">
                      {(() => {
                        const IconComponent = getTypeIcon(exp.type)
                        return (
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${getTypeColor(exp.type)} flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        )
                      })()}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gradient transition-all">
                          {exp.role}
                        </h3>
                        <p className="text-primary-400 font-semibold mb-1">{exp.company}</p>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400">
                          <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 shadow-lg shadow-primary-500/50 group-hover:scale-150 transition-transform"></div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
