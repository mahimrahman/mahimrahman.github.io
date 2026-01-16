import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'

const CLOUDINARY_CLOUD_NAME = 'dacbxyltq'

interface ScreenshotGroup {
  label: string
  images: string[]
}

interface Project {
  id: string
  title: string
  tagline: string
  shortDescription: string
  fullDescription: string
  thumbnail: string
  category: string
  tools: string[]
  role: string[]
  process: {
    step: string
    description: string
  }[]
  screenshots: string[]
  screenshotGroups?: ScreenshotGroup[]
}

// Helper to check if a project is a mobile app
const isMobileApp = (category: string): boolean => {
  return category === 'Mobile App'
}

const cloudinaryImageUrl = (publicPath: string) => {
  const encoded = publicPath
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/')

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${encoded}`
}

const uiuxScreens = (folderPath: string, start: number, end: number, extension: string = 'png') =>
  Array.from({ length: end - start + 1 }, (_, index) =>
    cloudinaryImageUrl(`${folderPath}/${start + index}.${extension}`)
  )

const projects: Project[] = [
  {
    id: 'apptracka',
    title: 'Apptracka - Application Tracking UI',
    tagline: 'Clean, task-focused tracking experience',
    shortDescription: 'UI screens for an application tracking product, designed for clarity and quick scanning.',
    fullDescription: 'A UI/UX design exploration for an application tracking workflow. The screens prioritize clear information hierarchy, fast navigation, and a minimal visual system to keep focus on the user\'s progress and tasks.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/Apptracka Application Tracking App/1.png'),
    category: 'Product UI',
    tools: ['Figma', 'UI Design', 'UX Flow'],
    role: ['UI Design', 'UX Design', 'Prototyping'],
    process: [
      { step: 'Research', description: 'Review common tracking flows and user needs' },
      { step: 'Wireframe', description: 'Define layout, hierarchy, and key components' },
      { step: 'Design', description: 'Apply a consistent visual system and spacing rules' },
      { step: 'Refine', description: 'Iterate based on readability and interaction clarity' }
    ],
    screenshots: uiuxScreens('Portfolio/UI UX/Apptracka Application Tracking App', 1, 9)
  },
  {
    id: 'bangla-editor-panel',
    title: 'BANGLA Editor Panel - Dashboard UI',
    tagline: 'Efficient editorial workflow dashboard',
    shortDescription: 'Admin/editor panel UI screens designed for content operations and management.',
    fullDescription: 'A dashboard UI concept for an editor/admin panel. The design emphasizes fast navigation, clear status visibility, and scalable components for managing content and editorial tasks.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/BANGLA Editor Panel/1.png'),
    category: 'Dashboard',
    tools: ['Figma', 'Design System', 'UX'],
    role: ['UI Design', 'Information Architecture', 'Component Design'],
    process: [
      { step: 'Structure', description: 'Define sidebar navigation and primary sections' },
      { step: 'Components', description: 'Design tables, forms, and status indicators' },
      { step: 'Visual', description: 'Apply spacing, typography, and color tokens' },
      { step: 'Polish', description: 'Refine states, empty screens, and micro-details' }
    ],
    screenshots: uiuxScreens('Portfolio/UI UX/BANGLA Editor Panel', 1, 6)
  },
  {
    id: 'bassilichat-ai',
    title: 'BassiliChat AI - UI Redesign',
    tagline: 'Before/after redesign with improved hierarchy',
    shortDescription: 'A UI redesign comparing the original interface with an updated, cleaner design.',
    fullDescription: 'This project documents a UI redesign: improving layout structure, readability, and visual hierarchy while keeping the product intent intact. The gallery includes both the redesigned UI and the original UI for comparison.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/BassiliChat AI/The UI I redesigned/1.png'),
    category: 'Web App',
    tools: ['Figma', 'UI Redesign', 'UX Audit'],
    role: ['UI Design', 'UX Improvement', 'Visual Refinement'],
    process: [
      { step: 'Audit', description: 'Identify friction points and visual inconsistencies' },
      { step: 'Redesign', description: 'Rebuild layout and typography for clarity' },
      { step: 'Consistency', description: 'Standardize spacing and component patterns' },
      { step: 'Compare', description: 'Present redesigned screens alongside original UI' }
    ],
    screenshots: uiuxScreens('Portfolio/UI UX/BassiliChat AI/The UI I redesigned', 1, 6),
    screenshotGroups: [
      {
        label: 'New Redesigned UI',
        images: uiuxScreens('Portfolio/UI UX/BassiliChat AI/The UI I redesigned', 1, 6)
      },
      {
        label: 'Old UI',
        images: uiuxScreens('Portfolio/UI UX/BassiliChat AI/Old UI', 1, 4)
      }
    ]
  },
  {
    id: 'bassilichat-inc-website',
    title: 'BassiliChat Inc - Website UI',
    tagline: 'Marketing site layout and visual direction',
    shortDescription: 'Website UI screens focusing on messaging, layout, and clean presentation.',
    fullDescription: 'A website UI concept for BassiliChat Inc. The layout focuses on strong messaging blocks, a clear content hierarchy, and a modern visual tone suitable for a product/company landing experience.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/BassiliChat Inc Website/1.png'),
    category: 'Website',
    tools: ['Figma', 'Web UI', 'Visual Design'],
    role: ['UI Design', 'Visual Design', 'Layout Design'],
    process: [
      { step: 'Content', description: 'Define sections and message hierarchy' },
      { step: 'Layout', description: 'Design responsive-friendly page structure' },
      { step: 'Style', description: 'Apply typography and color direction' },
      { step: 'Refine', description: 'Polish spacing, alignment, and component rhythm' }
    ],
    screenshots: uiuxScreens('Portfolio/UI UX/BassiliChat Inc Website', 1, 6)
  },
  {
    id: 'bassilitrade',
    title: 'BassiliTrade - Trading Platform UI',
    tagline: 'Data-dense UI with readable structure',
    shortDescription: 'Trading/product UI screens designed to present data clearly and reduce cognitive load.',
    fullDescription: 'A UI design set for a trading platform interface. The focus is on readable data presentation, consistent component patterns, and visual grouping to help users scan and act quickly.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/BassiliTrade/1.png'),
    category: 'Web Platform',
    tools: ['Figma', 'UI Design', 'Data UI'],
    role: ['UI Design', 'UX Structure', 'Component Design'],
    process: [
      { step: 'Structure', description: 'Define data groupings and navigation model' },
      { step: 'Components', description: 'Design cards, tables, and key widgets' },
      { step: 'Hierarchy', description: 'Tune typography and contrast for scanning' },
      { step: 'Iteration', description: 'Refine based on density and readability checks' }
    ],
    screenshots: uiuxScreens('Portfolio/UI UX/BassiliTrade', 1, 7)
  },
  {
    id: 'monheure',
    title: 'MonHeure - Mobile App UI',
    tagline: 'Mobile flow with consistent UI patterns',
    shortDescription: 'A mobile UI design set demonstrating key screens and user flow continuity.',
    fullDescription: 'A mobile UI/UX design set for MonHeure. The screens focus on consistent interaction patterns, clean layouts, and flow continuity across core tasks within the app.',
    thumbnail: cloudinaryImageUrl('Portfolio/UI UX/MonHeure Mobile App/1.jpg'),
    category: 'Mobile App',
    tools: ['Figma', 'Mobile UI', 'UX Flow'],
    role: ['UI Design', 'UX Design', 'Prototype Flow'],
    process: [
      { step: 'Flow', description: 'Map key tasks and navigation structure' },
      { step: 'Screens', description: 'Design reusable patterns and components' },
      { step: 'Visual', description: 'Apply consistent spacing and typography' },
      { step: 'Review', description: 'Check accessibility and interaction consistency' }
    ],
    screenshots: [
      cloudinaryImageUrl('Portfolio/UI UX/MonHeure Mobile App/1.jpg'),
      ...uiuxScreens('Portfolio/UI UX/MonHeure Mobile App', 2, 13, 'png')
    ]
  },
  {
    id: 'legym',
    title: 'LeGym Concordia Mobile Application UI',
    tagline: 'Modern Fitness Management System',
    shortDescription: 'Comprehensive gym management mobile app for Concordia University',
    fullDescription: 'A sophisticated mobile application designed for gym management at Concordia University. The app provides seamless user experience for gym members to book equipment, track workouts, manage memberships, and access fitness resources. Features include real-time equipment availability, personalized workout plans, and social fitness tracking.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773616/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_1.png',
    category: 'Mobile App',
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
    role: ['UX Research', 'UI Design', 'Prototyping', 'User Testing'],
    process: [
      { step: 'Research', description: 'University gym user interviews and behavioral analysis' },
      { step: 'Wireframe', description: 'App architecture and user flow mapping' },
      { step: 'Prototype', description: 'Interactive prototypes with micro-interactions' },
      { step: 'Test', description: 'Usability testing with student focus groups' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773616/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773634/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_2.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773636/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773637/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773638/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_5.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773639/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_6.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773641/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_7.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773642/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_8.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773644/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_9.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773617/Portfolio/UI%20UX/LeGym/LeGym_UI_Design_10.png'
    ]
  },
  {
    id: 'artemis',
    title: 'Artemis Arthouse UI',
    tagline: 'Elegant Art Gallery Experience',
    shortDescription: 'Sophisticated web interface for contemporary art gallery',
    fullDescription: 'An elegant and immersive web interface designed for Artemis Arthouse, showcasing contemporary art collections with a focus on visual storytelling. The design emphasizes clean aesthetics, intuitive navigation, and seamless artwork browsing experience. Features include virtual gallery tours, artist portfolios, and exhibition management.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773561/Portfolio/UI%20UX/Artemis%20Arthouse/artemis1.png',
    category: 'Web App',
    tools: ['Figma', 'Adobe Creative Suite', 'Webflow'],
    role: ['UI Design', 'Visual Design', 'Art Direction'],
    process: [
      { step: 'Research', description: 'Art gallery user behavior and aesthetic preferences study' },
      { step: 'Wireframe', description: 'Gallery navigation and artwork presentation flows' },
      { step: 'Prototype', description: 'High-fidelity visual designs and interactions' },
      { step: 'Test', description: 'A/B testing for optimal artwork display layouts' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773561/Portfolio/UI%20UX/Artemis%20Arthouse/artemis1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773562/Portfolio/UI%20UX/Artemis%20Arthouse/artemis2.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773564/Portfolio/UI%20UX/Artemis%20Arthouse/artemis3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773565/Portfolio/UI%20UX/Artemis%20Arthouse/artemis4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773566/Portfolio/UI%20UX/Artemis%20Arthouse/artemis5.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773567/Portfolio/UI%20UX/Artemis%20Arthouse/artemis6.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773574/Portfolio/UI%20UX/Artemis%20Arthouse/artemis7.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773575/Portfolio/UI%20UX/Artemis%20Arthouse/artemis8.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773577/Portfolio/UI%20UX/Artemis%20Arthouse/artemis9.png'
    ]
  },
  {
    id: 'bdgsa',
    title: 'Bangladeshi Graduate Students\' Association (BDGSA) UI',
    tagline: 'Community-Centered Digital Platform',
    shortDescription: 'Comprehensive platform for graduate student community engagement',
    fullDescription: 'A community-focused digital platform designed for the Bangladeshi Graduate Students\' Association, facilitating member connections, event management, and cultural activities. The interface prioritizes accessibility and cultural relevance while providing modern functionality for student networking, event coordination, and resource sharing.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773578/Portfolio/UI%20UX/BDGSA/bdgsa1.png',
    category: 'Web Platform',
    tools: ['Figma', 'Sketch', 'InVision', 'Adobe XD'],
    role: ['UX Research', 'UI Design', 'Community Analysis'],
    process: [
      { step: 'Research', description: 'Graduate student community needs assessment' },
      { step: 'Wireframe', description: 'Community platform architecture and member flows' },
      { step: 'Prototype', description: 'Cultural-sensitive design prototypes' },
      { step: 'Test', description: 'Community feedback integration and accessibility testing' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773578/Portfolio/UI%20UX/BDGSA/bdgsa1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773580/Portfolio/UI%20UX/BDGSA/bdgsa2.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773581/Portfolio/UI%20UX/BDGSA/bdgsa3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773582/Portfolio/UI%20UX/BDGSA/bdgsa4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773583/Portfolio/UI%20UX/BDGSA/bdgsa5.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773584/Portfolio/UI%20UX/BDGSA/bdgsa6.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773586/Portfolio/UI%20UX/BDGSA/bdgsa7.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773587/Portfolio/UI%20UX/BDGSA/bdgsa8.png'
    ]
  },
  {
    id: 'cafe',
    title: 'Simple Cafe Menu Design (FreeCodeCamp)',
    tagline: 'Clean & Appetizing Menu Interface',
    shortDescription: 'Responsive cafe menu design focusing on user-friendly food ordering',
    fullDescription: 'A clean and appetizing cafe menu interface developed as part of FreeCodeCamp curriculum. The design emphasizes readability, visual hierarchy, and mobile-first responsive design. Features include categorized menu items, pricing display, and optimized food photography presentation for enhanced user experience.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773588/Portfolio/UI%20UX/Codecamp%20Cafe/cafe1.png',
    category: 'Web Design',
    tools: ['HTML', 'CSS', 'Figma', 'Responsive Design'],
    role: ['Frontend Development', 'UI Design', 'Responsive Design'],
    process: [
      { step: 'Research', description: 'Cafe menu design patterns and user preferences' },
      { step: 'Wireframe', description: 'Menu layout and information hierarchy' },
      { step: 'Prototype', description: 'Responsive design implementation' },
      { step: 'Test', description: 'Cross-device compatibility and usability testing' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773588/Portfolio/UI%20UX/Codecamp%20Cafe/cafe1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773589/Portfolio/UI%20UX/Codecamp%20Cafe/cafe2.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773590/Portfolio/UI%20UX/Codecamp%20Cafe/cafe3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773591/Portfolio/UI%20UX/Codecamp%20Cafe/cafe4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773593/Portfolio/UI%20UX/Codecamp%20Cafe/cafe5.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773594/Portfolio/UI%20UX/Codecamp%20Cafe/cafe6.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773595/Portfolio/UI%20UX/Codecamp%20Cafe/cafe7.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773596/Portfolio/UI%20UX/Codecamp%20Cafe/cafe8.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773597/Portfolio/UI%20UX/Codecamp%20Cafe/cafe9.png'
    ]
  },
  {
    id: 'fashionista',
    title: 'Fashionista Mobile App UI',
    tagline: 'Trendy Fashion Discovery Platform',
    shortDescription: 'Modern fashion app for style discovery and shopping',
    fullDescription: 'A contemporary mobile application designed for fashion enthusiasts to discover trends, create style profiles, and shop curated collections. The interface combines visual appeal with functional design, featuring personalized style recommendations, outfit coordination tools, and seamless shopping experiences.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773603/Portfolio/UI%20UX/fashionista/fashionista_1.png',
    category: 'Mobile App',
    tools: ['Figma', 'Adobe XD', 'Principle', 'Sketch'],
    role: ['UI Design', 'UX Research', 'Fashion Analysis'],
    process: [
      { step: 'Research', description: 'Fashion app user behavior and trend analysis' },
      { step: 'Wireframe', description: 'Style discovery and shopping user flows' },
      { step: 'Prototype', description: 'Interactive fashion browsing prototypes' },
      { step: 'Test', description: 'Style preference testing and user feedback' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773603/Portfolio/UI%20UX/fashionista/fashionista_1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773607/Portfolio/UI%20UX/fashionista/fashionista_3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773609/Portfolio/UI%20UX/fashionista/fashionista_4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773610/Portfolio/UI%20UX/fashionista/fashionista_5.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773611/Portfolio/UI%20UX/fashionista/fashionista_6.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773613/Portfolio/UI%20UX/fashionista/fashionista_7.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773614/Portfolio/UI%20UX/fashionista/fashionista_8.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773615/Portfolio/UI%20UX/fashionista/fashionista_9.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773604/Portfolio/UI%20UX/fashionista/fashionista_10.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773606/Portfolio/UI%20UX/fashionista/fashionista_11.png'
    ]
  },
  {
    id: 'friendship',
    title: 'Simple Friendship Tribute Site',
    tagline: 'Heartfelt Digital Memorial',
    shortDescription: 'Emotional tribute website celebrating friendship bonds',
    fullDescription: 'A heartfelt digital tribute website designed to celebrate and commemorate meaningful friendships. The design focuses on emotional storytelling through visual elements, creating an intimate and personal browsing experience. Features include photo galleries, memory sharing, and interactive timeline of friendship milestones.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773645/Portfolio/UI%20UX/Simple%20Friendship%20Tribute%20Page/friendshiptribute1.png',
    category: 'Web Design',
    tools: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    role: ['Web Development', 'UI Design', 'Content Strategy'],
    process: [
      { step: 'Research', description: 'Emotional design principles and memorial site analysis' },
      { step: 'Wireframe', description: 'Story flow and content presentation structure' },
      { step: 'Prototype', description: 'Interactive memory sharing features' },
      { step: 'Test', description: 'Emotional impact assessment and user feedback' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773645/Portfolio/UI%20UX/Simple%20Friendship%20Tribute%20Page/friendshiptribute1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773647/Portfolio/UI%20UX/Simple%20Friendship%20Tribute%20Page/friendshiptribute2.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773648/Portfolio/UI%20UX/Simple%20Friendship%20Tribute%20Page/friendshiptribute3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773650/Portfolio/UI%20UX/Simple%20Friendship%20Tribute%20Page/friendshiptribute4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773651/Portfolio/UI%20UX/Simple%20Friendship%20Tribute%20Page/friendshiptribute5.png'
    ]
  },
  {
    id: 'soulcouture',
    title: 'Soul Couture Online Shopping UI',
    tagline: 'Luxury E-commerce Experience',
    shortDescription: 'Premium online shopping platform for luxury fashion',
    fullDescription: 'An elegant e-commerce platform designed for Soul Couture, focusing on luxury fashion retail. The interface combines sophisticated aesthetics with intuitive shopping functionality, featuring premium product showcases, personalized styling recommendations, and streamlined checkout processes for high-end fashion consumers.',
    thumbnail: 'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773652/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_1.png',
    category: 'E-commerce',
    tools: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision'],
    role: ['UI Design', 'E-commerce UX', 'Luxury Brand Strategy'],
    process: [
      { step: 'Research', description: 'Luxury shopping behavior and premium brand analysis' },
      { step: 'Wireframe', description: 'Premium shopping journey and product discovery flows' },
      { step: 'Prototype', description: 'High-end visual design and luxury interactions' },
      { step: 'Test', description: 'Luxury market user testing and conversion optimization' }
    ],
    screenshots: [
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773652/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_1.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773653/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_2.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773654/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_3.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773655/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_4.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773656/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_5.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773663/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_6.png',
      'https://res.cloudinary.com/dacbxyltq/image/upload/v1765773665/Portfolio/UI%20UX/SoulCouture%20Shopping/shopping_7.png'
    ]
  }
]

// Helper to get URL-friendly project name
const getProjectUrl = (title: string): string => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') + '.com'
}

// Project card component with mockup display
interface ProjectCardProps {
  project: Project
  onClick: () => void
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  const isMobile = isMobileApp(project.category)

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-neutral-900 via-neutral-900/80 to-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800/50 hover:border-uiux-500/50 transition-all duration-500 cursor-pointer"
      whileHover={{
        scale: 1.02,
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(157, 133, 189, 0.15)"
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-uiux-500/5 via-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Project thumbnail with mockup */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-neutral-950 to-neutral-900 flex items-center justify-center p-4">
        {isMobile ? (
          // Mobile Phone Mockup - Card View
          <div className="relative h-full flex items-center justify-center">
            <div className="relative bg-neutral-800 rounded-[1.8rem] p-1.5 shadow-2xl border-2 border-neutral-700 h-[95%] aspect-[9/19]">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-10"></div>
              {/* Screen */}
              <div className="w-full h-full bg-black rounded-[1.5rem] overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Home Indicator */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>
        ) : (
          // Browser Window Mockup - Card View
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative bg-neutral-950 rounded-xl overflow-hidden shadow-2xl w-[95%] h-[92%] border border-neutral-800/50">
              {/* Browser Top Bar */}
              <div className="bg-neutral-900 px-3 py-2 flex items-center gap-3">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                {/* URL Bar */}
                <div className="flex-1 bg-neutral-950 rounded-md px-3 py-1 border border-neutral-800/50">
                  <span className="text-[10px] text-neutral-500 font-mono truncate">{getProjectUrl(project.title)}</span>
                </div>
              </div>
              {/* Browser Content */}
              <div className="relative h-[calc(100%-36px)] overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent pointer-events-none" />

        {/* Category badge */}
        <div className="absolute top-4 right-4 px-2.5 py-1 bg-gradient-to-r from-uiux-500/90 to-accent-500/90 text-white text-[10px] font-bold rounded-full shadow-lg">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 relative z-10">
        <h3 className="text-lg font-bold text-neutral-100 mb-2 group-hover:text-uiux-400 transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm mb-3 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tools.slice(0, 3).map((tool, toolIndex) => (
            <span
              key={toolIndex}
              className="px-2 py-0.5 bg-uiux-500/15 text-uiux-400 text-[10px] rounded border border-uiux-500/20"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="px-2 py-0.5 bg-neutral-800/50 text-neutral-500 text-[10px] rounded">
              +{project.tools.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span className="text-uiux-400 text-xs font-medium">View Details</span>
          <motion.div
            className="w-7 h-7 bg-gradient-to-r from-uiux-500 to-accent-500 rounded-full flex items-center justify-center"
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Project detail modal component
interface ProjectDetailProps {
  project: Project
  onClose: () => void
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [activeGroupIndex, setActiveGroupIndex] = useState<number>(0)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true)
  const isMobile = isMobileApp(project.category)

  // Determine if project has multiple groups
  const hasGroups = project.screenshotGroups && project.screenshotGroups.length > 0
  const currentGroup = hasGroups ? project.screenshotGroups![activeGroupIndex] : null
  const currentImages = hasGroups ? currentGroup!.images : project.screenshots
  const currentLabel = hasGroups ? currentGroup!.label : project.title

  // Navigation functions
  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % currentImages.length)
  }, [currentImages.length])

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1))
  }, [currentImages.length])

  // Auto-play every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      goToNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, goToNext])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext()
        setIsAutoPlaying(false)
      } else if (e.key === 'ArrowLeft') {
        goToPrev()
        setIsAutoPlaying(false)
      } else if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrev, onClose])

  // Reset active index when switching groups
  useEffect(() => {
    setActiveIndex(0)
  }, [activeGroupIndex])

  return (
    <motion.div
      className="fixed inset-0 bg-neutral-950/95 backdrop-blur-xl z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back Button */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neutral-900/90 to-neutral-800/90 backdrop-blur-xl border border-neutral-700/50 rounded-xl text-uiux-400 hover:text-white transition-all duration-300 font-medium shadow-lg"
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={18} />
          <span>Back to Projects</span>
        </motion.button>
      </motion.div>

      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-400 mb-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.tagline}
            </motion.p>

            {/* Project meta */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-uiux-500 rounded-full"></span>
                <span className="text-white">{project.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-accent-500 rounded-full"></span>
                <span className="text-white">{project.tools.length} Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-secondary-500 rounded-full"></span>
                <span className="text-white">{project.screenshots.length} Screens</span>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-xl rounded-2xl p-8 border border-neutral-800/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Project Overview</h3>
                <p className="text-neutral-400 leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </motion.div>

              {/* Process */}
              <motion.div
                className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-xl rounded-2xl p-8 border border-neutral-800/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6">Design Process</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.process.map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-uiux-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{step.step}</h4>
                        <p className="text-neutral-400 text-sm">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tools */}
              <motion.div
                className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-xl rounded-2xl p-6 border border-neutral-800/50"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-lg font-display font-bold text-white mb-4">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-uiux-500/20 text-uiux-400 text-sm rounded-lg border border-uiux-500/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Role */}
              <motion.div
                className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-xl rounded-2xl p-6 border border-neutral-800/50"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h4 className="text-lg font-display font-bold text-white mb-4">My Role</h4>
                <div className="space-y-2">
                  {project.role.map((role, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-uiux-500 rounded-full"></span>
                      <span className="text-neutral-400 text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Screenshots Gallery - Fixed Mockup with Thumbnails */}
          <motion.div
            className="mb-12 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center">Project Gallery</h3>

            {/* Group Tabs (if multiple groups exist) */}
            {hasGroups && (
              <div className="flex justify-center gap-4 mb-8">
                {project.screenshotGroups!.map((group, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      setActiveGroupIndex(idx)
                      setIsAutoPlaying(false)
                    }}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeGroupIndex === idx
                        ? 'bg-gradient-to-r from-uiux-500 to-accent-500 text-white'
                        : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/50 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {group.label}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Main Mockup Display with Navigation Arrows */}
            <div className="flex flex-col items-center">
              <div className="relative w-full flex items-center justify-center gap-4">
                {/* Left Arrow */}
                <motion.button
                  onClick={() => {
                    goToPrev()
                    setIsAutoPlaying(false)
                  }}
                  className="absolute left-0 md:left-4 lg:left-8 z-10 w-12 h-12 bg-neutral-800/50 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-neutral-700/50 transition-all duration-300 border border-neutral-700/50"
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={24} />
                </motion.button>

                {isMobile ? (
                  // Fixed Mobile Phone Mockup
                  <div className="relative bg-neutral-800 rounded-[3rem] p-3 shadow-2xl border-4 border-neutral-700 max-w-[280px] mx-auto">
                    {/* Dynamic Island */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10"></div>
                    {/* Screen */}
                    <div className="w-full bg-black rounded-[2.4rem] overflow-hidden">
                      <motion.img
                        key={`${activeGroupIndex}-${activeIndex}`}
                        src={currentImages[activeIndex]}
                        alt={`${project.title} screenshot ${activeIndex + 1}`}
                        className="w-full h-auto object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    {/* Home Indicator */}
                    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-white/30 rounded-full"></div>
                  </div>
                ) : (
                  // Fixed Browser Window Mockup
                  <div className="relative bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800/50 max-w-4xl w-full mx-16">
                    {/* Browser Top Bar */}
                    <div className="bg-neutral-900 px-5 py-3.5 flex items-center gap-4">
                      {/* Traffic lights */}
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-yellow-500"></div>
                        <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>
                      </div>
                      {/* URL Bar */}
                      <div className="flex-1 bg-neutral-950 rounded-lg px-4 py-2 border border-neutral-800/50">
                        <span className="text-sm text-neutral-500 font-mono">{getProjectUrl(hasGroups ? currentLabel : project.title)}</span>
                      </div>
                    </div>
                    {/* Browser Content */}
                    <div className="relative">
                      <motion.img
                        key={`${activeGroupIndex}-${activeIndex}`}
                        src={currentImages[activeIndex]}
                        alt={`${project.title} screenshot ${activeIndex + 1}`}
                        className="w-full h-auto object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                )}

                {/* Right Arrow */}
                <motion.button
                  onClick={() => {
                    goToNext()
                    setIsAutoPlaying(false)
                  }}
                  className="absolute right-0 md:right-4 lg:right-8 z-10 w-12 h-12 bg-neutral-800/50 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-neutral-700/50 transition-all duration-300 border border-neutral-700/50"
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>

              {/* Auto-play indicator & controls */}
              <div className="flex items-center gap-4 mt-6">
                <motion.button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isAutoPlaying
                      ? 'bg-uiux-500/20 text-uiux-400 border border-uiux-500/30'
                      : 'bg-neutral-800/50 text-neutral-400 border border-neutral-700/50 hover:bg-neutral-700/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isAutoPlaying ? 'Pause' : 'Auto-play'}
                </motion.button>
                <span className="text-neutral-500 text-sm">
                  Use arrow keys to navigate
                </span>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-4xl">
                {currentImages.map((screenshot, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                      activeIndex === index
                        ? 'ring-2 ring-uiux-500 ring-offset-2 ring-offset-neutral-950 scale-105'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    whileHover={{ scale: activeIndex === index ? 1.05 : 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isMobile ? (
                      // Mini Phone Thumbnail
                      <div className="relative bg-neutral-800 rounded-lg p-0.5 w-14 h-28 border border-neutral-700">
                        <div className="w-full h-full bg-black rounded-md overflow-hidden">
                          <img
                            src={screenshot}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    ) : (
                      // Mini Browser Thumbnail
                      <div className="relative bg-neutral-950 rounded-lg overflow-hidden w-24 h-16 border border-neutral-800/50">
                        <div className="bg-neutral-900 px-1.5 py-1 flex items-center gap-1">
                          <div className="flex items-center gap-0.5">
                            <div className="w-1 h-1 rounded-full bg-red-500"></div>
                            <div className="w-1 h-1 rounded-full bg-yellow-500"></div>
                            <div className="w-1 h-1 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        <img
                          src={screenshot}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-[calc(100%-14px)] object-cover object-top"
                        />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Image Counter */}
              <div className="mt-4 text-neutral-500 text-sm">
                {activeIndex + 1} / {currentImages.length}
                {hasGroups && <span className="ml-2">{currentLabel}</span>}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const UIUXPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -300])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  // Handle project selection from URL parameters
  useEffect(() => {
    const projectId = searchParams.get('project')
    if (projectId) {
      const project = projects.find(p => p.id === projectId)
      if (project) {
        setSelectedProject(project)
      } else {
        setSearchParams({})
      }
    } else {
      setSelectedProject(null)
    }
  }, [searchParams, setSearchParams])

  const handleProjectOpen = (project: Project) => {
    setSearchParams({ project: project.id })
  }

  const handleProjectClose = () => {
    setSearchParams({})
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(157,133,189,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(232,102,74,0.1),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Back to Portfolio Button */}
        <motion.div
          className="absolute top-6 left-6 z-40"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neutral-900/90 to-neutral-800/90 backdrop-blur-xl border border-neutral-700/50 rounded-xl text-uiux-400 hover:text-white transition-all duration-300 font-medium shadow-lg group"
            onClick={(e) => {
              if (window.history.length > 1 && document.referrer.includes('#portfolio')) {
                e.preventDefault()
                window.history.back()
              }
            }}
          >
            <motion.div
              whileHover={{ x: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowLeft size={18} />
            </motion.div>
            <span className="group-hover:underline">Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center py-32 px-4"
          style={{ y, opacity }}
        >
          <motion.span
            className="inline-block px-3 py-1 bg-uiux-500/10 border border-uiux-500/20 rounded-full text-uiux-400 text-sm font-medium mb-4 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            UI/UX DESIGN
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            User{' '}
            <span className="bg-gradient-to-r from-uiux-400 to-accent-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h1>
          <span className="block w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-uiux-500 to-accent-500 rounded-full" />
          <motion.p
            className="text-xl text-neutral-400 mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crafting intuitive and visually stunning digital experiences through thoughtful design and user-centered approach.
            Explore {projects.length} UI/UX projects across mobile apps, web platforms, and dashboards.
          </motion.p>
        </motion.div>

        {/* Process Section */}
        <section className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-8">Design Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: '01', title: 'Research', desc: 'User interviews, competitive analysis, personas' },
                  { step: '02', title: 'Ideation', desc: 'Wireframes, user flows, information architecture' },
                  { step: '03', title: 'Design', desc: 'Visual design, prototyping, design systems' },
                  { step: '04', title: 'Test', desc: 'Usability testing, iteration, validation' },
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative p-6 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-800/50 rounded-xl"
                  >
                    <div className="text-4xl font-display font-bold text-uiux-500/20 mb-2">{phase.step}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                    <p className="text-sm text-neutral-400">{phase.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectOpen(project)}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
                Need a designer for your project?
              </h2>
              <p className="text-xl text-neutral-400 mb-8">
                Let's create user experiences that your customers will love.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-uiux-500 to-accent-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-uiux-500/30 transition-all duration-300 hover:scale-105"
              >
                Start a Project
                <ChevronRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>

        <AnimatePresence>
          {selectedProject && (
            <ProjectDetail
              project={selectedProject}
              onClose={handleProjectClose}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default UIUXPortfolio
