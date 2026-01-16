import { Code2, Rocket, Briefcase, GraduationCap, Palette, Sparkles, Wrench, Monitor, ScrollText, LucideIcon } from 'lucide-react'

export type ExperienceType = 'work' | 'education' | 'leadership'
export type Region = 'canada' | 'malaysia' | 'bangladesh'

export interface Experience {
  id: string
  type: ExperienceType
  title: string
  company: string
  location: string
  period: string
  region: Region
  Icon: LucideIcon
  color: string
  description: string
  achievements: string[]
  skills: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  period: string
  Icon: LucideIcon
  details: string
}

export const experiences: Experience[] = [
  {
    id: 'bassilichat-se',
    type: 'work',
    title: 'Software Engineer',
    company: 'Bassilichat Inc.',
    location: 'Montreal, QC, Canada',
    period: 'Sep 2025 - Present',
    region: 'canada',
    Icon: Code2,
    color: 'dev',
    description: 'Developed and deployed BassiliChat AI and BassiliTrade platforms. Architected scalable backend solutions using modern frameworks and cloud technologies.',
    achievements: [
      'Built BassiliChat AI conversational platform with real-time capabilities.',
      'Developed BassiliTrade trading platform with data visualization.',
      'Optimized application performance across both flagship products.',
    ],
    skills: ['React', 'Node.js', 'AI Development', 'Trading Platform', 'Cloud Technologies', 'TypeScript'],
  },
  {
    id: 'technest-pm',
    type: 'leadership',
    title: 'Project Manager',
    company: 'TECH-NEST',
    location: 'Montreal, QC, Canada',
    period: 'Jan 2025 - Aug 2025',
    region: 'canada',
    Icon: Rocket,
    color: 'uiux',
    description: 'Led TECH-NEST as Project Manager for the Forces AVENIR Competition, overseeing a multidisciplinary team and project execution from concept to delivery.',
    achievements: [
      'Coordinated planning, stakeholder engagement, and team collaboration.',
      'Managed project execution from concept to delivery with clear milestones.',
      'Drove innovative solutions and impactful outcomes through structured teamwork.',
    ],
    skills: ['Project Management', 'Team Leadership', 'Stakeholder Engagement', 'Strategic Planning'],
  },
  {
    id: 'hackconcordia-vp',
    type: 'leadership',
    title: 'VP Marketing',
    company: 'HackConcordia',
    location: 'Montreal, QC, Canada',
    period: 'May 2024 - Present',
    region: 'canada',
    Icon: Rocket,
    color: 'dev',
    description: "Leading marketing initiatives for Canada's largest student-run hackathon. Managed social media campaigns reaching 10,000+ students.",
    achievements: [
      'Managed social media presence and executed strategic marketing campaigns.',
      'Coordinated with sponsors and partners to secure funding and support for events.',
      'Increased student engagement and participation in hackathons through targeted outreach.',
    ],
    skills: ['Marketing Strategy', 'Social Media', 'Event Planning', 'Community Engagement'],
  },
  {
    id: 'gsa-director',
    type: 'leadership',
    title: 'Director',
    company: "Graduate Students' Association",
    location: 'Montreal, QC, Canada',
    period: 'June 2024 - May 2025',
    region: 'canada',
    Icon: Briefcase,
    color: 'design',
    description: 'Elected Director representing graduate student interests university-wide. Participated in Student Handbook and Healthcare Committee initiatives.',
    achievements: [
      'Advocated for graduate student needs and concerns.',
      'Organized networking events and professional development workshops.',
      'Collaborated with university administration on policy matters.',
    ],
    skills: ['Leadership', 'Student Advocacy', 'Policy Development', 'Committee Management'],
  },
  {
    id: 'concordia-ta',
    type: 'education',
    title: 'Graduate Teaching Assistant',
    company: 'SOEN 6431, Gina Cody School',
    location: 'Montreal, QC, Canada',
    period: 'Fall 2024 - Winter 2025',
    region: 'canada',
    Icon: GraduationCap,
    color: 'uiux',
    description: 'Teaching Assistant for SOEN 6431 Software Systems Requirements Engineering. Graded assignments and projects for 80+ graduate students.',
    achievements: [
      'Facilitated learning for graduate students in software engineering principles.',
      'Provided detailed feedback and grading for assignments and projects.',
      'Mentored students on complex software architecture and design patterns.',
    ],
    skills: ['Teaching', 'Software Engineering', 'Requirements Engineering', 'Mentoring'],
  },
  {
    id: 'dos-facilitator',
    type: 'education',
    title: 'Student Facilitator',
    company: 'Dean of Students Office',
    location: 'Montreal, QC, Canada',
    period: 'Sep 2024 - Aug 2025',
    region: 'canada',
    Icon: Palette,
    color: 'photo',
    description: 'Facilitated peer-led discussions and collaborative learning activities for new students. Provided mentorship and guidance to support academic transition.',
    achievements: [
      'Supported new student orientation and integration programs.',
      'Coordinated student engagement activities.',
      'Provided peer mentorship and guidance to undergraduate students.',
    ],
    skills: ['Mentorship', 'Facilitation', 'Student Support', 'Community Building'],
  },
  {
    id: 'tedx-marketing',
    type: 'leadership',
    title: 'Marketing/Communications',
    company: 'TEDx Concordia University',
    location: 'Montreal, QC, Canada',
    period: 'Jan 2025 - Mar 2025',
    region: 'canada',
    Icon: Sparkles,
    color: 'dev',
    description: 'Developed and executed marketing strategies for TEDx Concordia University 2025 event. Created compelling content and managed social media campaigns.',
    achievements: [
      'Developed and executed comprehensive marketing strategies.',
      'Created engaging content for social media and promotional materials.',
      'Increased event attendance and community engagement.',
    ],
    skills: ['Marketing', 'Social Media', 'Content Creation', 'Event Promotion'],
  },
  {
    id: 'bestbuddies-vp',
    type: 'leadership',
    title: 'VP - Events',
    company: 'Best Buddies Concordia',
    location: 'Montreal, QC, Canada',
    period: 'Jan 2024 - May 2025',
    region: 'canada',
    Icon: Briefcase,
    color: 'design',
    description: 'Planned and executed inclusive events for the Best Buddies Concordia Chapter, promoting friendships and social inclusion for individuals with intellectual and developmental disabilities.',
    achievements: [
      'Planned and executed inclusive events promoting friendships and social inclusion.',
      'Collaborated with team members and community partners to design engaging activities.',
      'Managed event logistics and day-of coordination to support accessible participation.',
    ],
    skills: ['Event Planning', 'Community Engagement', 'Accessibility', 'Team Collaboration'],
  },
  {
    id: 'sarc-ambassador',
    type: 'leadership',
    title: 'Peer Ambassador',
    company: 'Sexual Assault Resource Center (SARC) - Concordia University',
    location: 'Montreal, QC, Canada',
    period: 'Aug 2024 - Present',
    region: 'canada',
    Icon: Sparkles,
    color: 'photo',
    description: 'Provided compassionate support and connected survivors of sexual assault to essential resources while supporting prevention and advocacy initiatives.',
    achievements: [
      'Provided compassionate support and connected survivors to essential resources.',
      'Raised awareness about sexual violence through prevention initiatives and advocacy.',
      'Collaborated with campus organizations to foster a safe, inclusive, and supportive environment.',
    ],
    skills: ['Peer Support', 'Advocacy', 'Prevention Education', 'Community Building'],
  },
  {
    id: 'aiesec-finance',
    type: 'leadership',
    title: 'Portfolio Member - Finance',
    company: 'AIESEC Concordia',
    location: 'Montreal, QC, Canada',
    period: 'July 2024 - Aug 2025',
    region: 'canada',
    Icon: Wrench,
    color: 'dev',
    description: 'Managed and oversaw financial activities, including budgeting, financial planning, and expense tracking.',
    achievements: [
      'Supported budgeting and financial planning for chapter initiatives.',
      'Tracked expenses and maintained organized records for reporting.',
      'Helped ensure transparency and accountability across financial activities.',
    ],
    skills: ['Financial Management', 'Budgeting', 'Financial Planning', 'Expense Tracking'],
  },
  {
    id: 'zavy-webdev',
    type: 'work',
    title: 'Web Developer & UI/UX Designer',
    company: 'Zavy Technologies Sdn Bhd',
    location: 'Cyberjaya, Malaysia',
    period: 'Dec 2021 - Aug 2022',
    region: 'malaysia',
    Icon: Monitor,
    color: 'uiux',
    description: 'Delivered customized web solutions for diverse clients. Developed responsive websites using modern web technologies and managed ERP systems.',
    achievements: [
      'Collaborated with cross-functional teams to deliver robust software solutions.',
      'Implemented responsive designs and optimized user experience for web platforms.',
      'Participated in the full software development lifecycle from concept to deployment.',
    ],
    skills: ['Web Development', 'Vue.js', 'Laravel', 'ERP Systems', 'Client Solutions'],
  },
  {
    id: 'bdsa-secretary',
    type: 'leadership',
    title: 'General Secretary',
    company: 'BD Student Association LUCT',
    location: 'Cyberjaya, Malaysia',
    period: '2019 - 2021',
    region: 'malaysia',
    Icon: Briefcase,
    color: 'design',
    description: 'Coordinated events and cultural programs to promote Bangladeshi culture. Managed communication between executive committee and members.',
    achievements: [
      'Coordinated cultural events and community gatherings.',
      'Managed organizational communications and documentation.',
      'Strengthened connections within the Bangladeshi student community.',
    ],
    skills: ['Event Coordination', 'Administration', 'Cultural Programs', 'Leadership'],
  },
  {
    id: 'jaago-pr',
    type: 'leadership',
    title: 'Public Relations Team Member',
    company: 'Volunteer for Bangladesh, JAAGO Foundation',
    location: 'Dhaka, Bangladesh',
    period: 'May 2015 - July 2019',
    region: 'bangladesh',
    Icon: Palette,
    color: 'design',
    description: "Worked with JAAGO Foundation's youth wing to develop and implement campaigns aligned with the UN Sustainable Development Goals (SDGs), promoting quality education, gender equality, and climate awareness.",
    achievements: [
      'Coordinated public outreach and social media, creating effective design and written content using Canva and comparable tools.',
      'Coordinated community outreach programs and awareness campaigns, managing logistics, volunteers, and impact evaluations.',
      'Received multiple awards for leadership, innovation, and outstanding contribution to advancing community impact.',
    ],
    skills: ['Public Relations', 'Social Media', 'Campaign Development', 'Youth Advocacy', 'Community Outreach'],
  },
  {
    id: 'cyfc-senior',
    type: 'leadership',
    title: 'Senior Member',
    company: 'Connecting Youth for Change',
    location: 'Dhaka, Bangladesh',
    period: 'Jun 2014 - May 2019',
    region: 'bangladesh',
    Icon: Rocket,
    color: 'photo',
    description: 'Led youth-driven social service projects focused on education and community welfare. Mentored junior members and coordinated cross-organizational partnerships.',
    achievements: [
      'Organized workshops and training sessions for youth development.',
      'Participated in community service projects.',
      'Mentored younger members in leadership and skill development.',
    ],
    skills: ['Youth Leadership', 'Social Service', 'Mentoring', 'Community Development'],
  },
  {
    id: 'scouts-member',
    type: 'leadership',
    title: 'Member',
    company: 'Bangladesh Scouts',
    location: 'Dhaka, Bangladesh',
    period: '2011 - 2019',
    region: 'bangladesh',
    Icon: Sparkles,
    color: 'dev',
    description: 'Participated in national scouting programs developing leadership and teamwork. Contributed to community service initiatives including disaster relief.',
    achievements: [
      'Participated in community service and outreach programs.',
      'Developed leadership and teamwork skills.',
      'Engaged in environmental and social initiatives.',
    ],
    skills: ['Leadership', 'Community Service', 'Disaster Relief', 'Teamwork'],
  },
]

export const education: Education[] = [
  {
    id: 'concordia-meng',
    degree: 'MEng in Software Engineering',
    institution: 'Concordia University',
    location: 'Montreal, QC, Canada',
    period: 'Sep 2023 - Aug 2025',
    Icon: GraduationCap,
    details: 'Graduated Aug 2025. Focused on advanced software architecture, design patterns, and cloud computing.',
  },
  {
    id: 'limkokwing-bsc',
    degree: 'BSc in Software Engineering with Multimedia',
    institution: 'Limkokwing University',
    location: 'Cyberjaya, Malaysia',
    period: 'Aug 2019 - July 2022',
    Icon: ScrollText,
    details: 'Graduated with First Class Honours. Final year project on "Smart Attendance System using Face Recognition".',
  },
]
